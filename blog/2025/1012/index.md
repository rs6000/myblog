---
slug: 2025-Ubuntu-Server-Upgrade
title: 2025 Ubuntu 主機升級紀錄(PHP8.3+SSL+Wordpress)
authors: [smilehsu]
tags: [facebook, hello, docusaurus]
date: 2025-10-12T10:00
---

### 前言

今年的第一篇就在愚人節... 說實在的這個部落格也一直處於閒置的狀態，也沒啥好更新的 大概年紀大了就開始發懶...

今天的更新是紀錄伺服器重灌後系統的建置流程，內容跟之前的大同小異 只是版本的更新

<!-- truncate -->

#### 預估操作時間: 30分鐘\~60分鐘

### 開始施工：

#### Step1

安裝Ubuntu 22.04 LTS 我的server在Linode 系統裝好後就直接SSH連線

```script
#更改時區 (2024/04/01 新增)
查看時區
timedatectl

列出時區表
timedatectl list-timezones

設定時區
sudo timedatectl set-timezone Asia/Taipei

#系統更新 (2024/04/01 新增)

指令一：sudo apt-get update
說明：用來取得遠端更新伺服器的套件檔案清單。

指令二：sudo apt-get -y dist-upgrade
說明：更新套件。

指令三：sudo apt-get clean
說明：清除更新時所下載回來的更新(安裝)檔案。

指令四：sudo apt-get autoremove
說明：自動清除更新後用不到的舊版本檔案（例如舊的核心程式）

#安裝Nginx
sudo apt install nginx

#安裝 MariaDB
sudo apt-get install mariadb-server mariadb-client

#啟動 Nginx & MariaDB

sudo systemctl start nginx.service
sudo systemctl enable nginx.service

sudo systemctl start mariadb.service
sudo systemctl enable mariadb.service

#安裝 PHP8.3
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php
sudo apt-get install php8.3

#安裝 PHP 8.3相關套件
sudo apt install php8.3-fpm php8.3-common php8.3-mysql php8.3-gmp php8.3-curl php8.3-intl php8.3-mbstring php8.3-xmlrpc php8.3-gd php8.3-xml php8.3-cli php8.3-zip php8.3-imagick
```

#### Step2

Nginx、MariaDB、PHP相關設定

資料庫設定

```script
#資料庫初始設定 (設定資料庫root密碼)
sudo mysql_secure_installation

#新增資料庫跟使用者 (給WordPress用)
#下面的帳號密碼資料庫名稱請自行替換

sudo mysql -u root -p

CREATE DATABASE 資料庫名稱;

CREATE USER '使用者名稱'@'localhost' IDENTIFIED BY '密碼';

GRANT ALL ON 資料庫名稱.* TO '使用者'@'localhost' WITH GRANT OPTION;

FLUSH PRIVILEGES;

EXIT;

sudo systemctl restart mariadb.service
```

PHP設定

```script
#編輯php.ini內容 主要是把上傳檔案限制開大
sudo nano /etc/php/8.3/fpm/php.ini

#以下是php.ini要改的部分
short_open_tag = On
memory_limit = 512M
cgi.fix_pathinfo = 0

#上傳檔案大小上限（單一檔案大小）
upload_max_filesize = 20M

#POST 大小上限（所有檔案大小加總）
post_max_size = 50M

max_execution_time = 360
```

2023/01/01 新增: 在WP後台上傳檔案發生 413 Request entity too large 解決方式

```script
#編輯nginx.con內容 
sudo nano /etc/nginx/nginx.conf

修改 http{} 裡面的 upload_max_filesize 30M; 
數字改成跟php.ini 裡面的 upload_max_filesize 一樣大小)
如果在 http{} 沒看到 upload_max_filesize 就自行加上去
改完存檔
```

下載WordPress

```script
#先下載wordpress

cd /tmp
wget https://tw.wordpress.org/latest-zh_TW.tar.gz
tar -xvzf latest-zh_TW.tar.gz

sudo chown -R www-data:www-data wordpress/
sudo chmod -R 755 wordpress/

sudo mv wordpress/ /var/www/html/
```

Nginx 網站相關設定

```script
#編輯 Nginx設定檔
sudo nano /etc/nginx/sites-available/wordpress

#以下是設定檔的內容(直接貼上..server_name要改成自己的網址)

server {
    listen 80;
    listen [::]:80;
    root /var/www/html/wordpress;
    index  index.php index.html index.htm;
    server_name  example.com www.example.com;

    client_max_body_size 100M;
    autoindex off;
    location / {
        try_files $uri $uri/ /index.php?$args;
    }

    location ~ \.php$ {
         include snippets/fastcgi-php.conf;
         fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;
         fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
         include fastcgi_params;
    }
}

#存檔離開後
sudo ln -s /etc/nginx/sites-available/wordpress /etc/nginx/sites-enabled/

sudo rm /etc/nginx/sites-enabled/default

sudo systemctl restart nginx.service

#php 重新啟動(2024-0401 修改)
sudo service php8.3-fpm restart
```

完成以上步驟，打開瀏覽器，輸入網址，應該就可以看到WordPress安裝畫面，這邊有個小坑...如果是用Chrome會看不到網頁...要用IP 因為Chrome預設只能開啟https的網址，SSL目前還沒裝... 用其他瀏覽器就可以看到畫面\~如IE (Edge ...我還是習慣叫它IE) 或Firefox 接下來最後的步驟把SSL裝上

#### Step3

SSL 安裝&設定

```script
sudo snap install core; sudo snap refresh core
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot

#讓certbot 自動修改Nginx設定
sudo certbot --nginx

#自動更新設定
sudo crontab -e
0 1 * * * /usr/bin/certbot renew >> /var/log/letsencrypt/renew.log
```

#### Step4

既然系統都升級了(還有PHP)那麼原本的WordPress也順便升級到最新版 就當一切都很順利的時候，把原本舊有的WP資料匯入時就炸了 出現下面那個熟悉的畫面 ![圖片1](https://smilehsu.cc/wp-content/uploads/2022/11/wp_qa.png)在網路上的教學文章，很多都是要你去裝一個外掛 but這招僅限於WP的後台還能登入的情況下 而我的站台前後台都掛了無法正常顯示，所以網路的教學文無法適用我的情況

要解決問題首先要了解問題發生的原因! 這邊只提我的經驗:這問題發生的原因 94.87%是升級WP時 跟原本安裝的外掛產生衝突而導致的，所以要解決這個問題 通常停用外掛可以讓網站恢復正常

而網站跳出的警告訊息"這個網站發生重大問題..." 下面一行[進一步了解WorddPress中的移難排解方式](https://wordpress.org/support/article/faq-troubleshooting/)

> How to deactivate all plugins when not able to access the administrative menus?

![圖片2](https://smilehsu.cc/wp-content/uploads/2022/11/2022-11-08-12_28_02-smilehsu.cc-_-localhost-_-wordpressdb-_-wp_options-_-phpMyAdmin-5.2.0.png)其實WordPress的警告訊息中給的連結，已經"明確"的告知使用者如何處理這個重大問題 在WP的資料庫裡的 資料表:wp\_options 欄位:active\_plugins 欄位值:option*value* field 的值改為a:0:{}

上面的意思就把開啟的外掛全部關閉 做完這一步，網站就可以正常顯示，接著登入後台 去更新外掛，再一個一個把原本的外掛啟用即可

以上是這次系統升級的操作流程記錄 :)

### 補充

把舊有的網站復原後發現一個小問題:無法安裝外掛 (但上傳圖片是正常) 大概是目錄的權限設定 跑掉了...

```
sudo chown -R www-data:www-data wordpress/
sudo chmod -R 755 wordpress/
```

### 同場加映 SSH登入免密碼 (2024/04/01 新增)

```script
操作流程

1.以root帳號登入主機
2.mkdir .ssh && cd .shh
3.ssh-keygen -t rsa -b 4096

在.ssh 底下
cat   id_rsa.pub >  authorized_keys

回上一層
chmod  600 .ssh/*
chmod 700 .ssh

用  sftp 把 id_rsa 抓到自己的電腦裡
```

接下來在個人電腦上打開 puttygen 讀取 id\_rsa => Save private key (名字可自定 如 my\_key) ![](https://smilehsu.cc/wp-content/uploads/2024/04/3.png) 打開putty 接下來的流程如下面3張圖 ![](https://smilehsu.cc/wp-content/uploads/2024/04/1.png)

![](https://smilehsu.cc/wp-content/uploads/2024/04/2.png)

![](https://smilehsu.cc/wp-content/uploads/2024/04/4.png)

打完收工

***

### Reference:

1. How to Upgrade from PHP 7.x to PHP 8 on Ubuntu
2. [PHP 7.4 End of Life Date](https://www.php.net/supported-versions.php)
3. [Wordpress : FAQ Troubleshooting](https://wordpress.org/support/article/faq-troubleshooting/)
4. [如何在 Ubuntu Server 20.04 使用指令設定系統時區](https://bit.ly/3J0GyPy)
5. [Ubuntu 更新與升級 – Ethan's 學習筆記](https://bit.ly/3PLqsx8)
6. [SSH Key 教學，讓你免密碼登入主機伺服器!](https://bit.ly/49kV1ke)
