---
sidebar_position: 28
---

# 文章標題 DAY 28

##### 初稿時間 2021-09-18  

### 前言

本篇是紀錄如何在Ubuntu 20.04 LTS 底下搭建LEMP + WordPress + SSL
這一篇算是資源回收，因為這是出自我之前寫在個人部落格的內容 XD

以下就是操作流程，先說結論:Ubuntu要裝LEMP (LNMP) 很方便
20分鐘內(含等待下載時間)就完成整個系統的建置...手速更快的應該不用10分鐘

### Step1

安裝Ubuntu 20.04 LTS 我的server在Linode 系統裝好後就直接SSH連線

``` script
#更新系統
sudo apt-get update

#安裝Nginx
sudo apt install nginx

#安裝 MariaDB
sudo apt-get install mariadb-server mariadb-client

#啟動 Nginx & MariaDB

sudo systemctl start nginx.service
sudo systemctl enable nginx.service

sudo systemctl start mariadb.service
sudo systemctl enable mariadb.service

#安裝 PHP7.4
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php
sudo apt update

#安裝 PHP相關套件
sudo apt install php7.4-fpm php7.4-common php7.4-mysql php7.4-gmp php7.4-curl php7.4-intl php7.4-mbstring php7.4-xmlrpc php7.4-gd php7.4-xml php7.4-cli php7.4-zip
```

### Step2

Nginx、MariaDB、PHP相關設定

資料庫設定

``` script
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

``` script
#編輯php.ini內容 主要是把上傳檔案限制開大
sudo nano /etc/php/7.4/fpm/php.ini

#以下是php.ini要改的部分
short_open_tag = On
memory_limit = 256M
cgi.fix_pathinfo = 0

#上傳檔案大小限制，不要開太大...
upload_max_filesize = 20M

max_execution_time = 360
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

Nginx設定

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
         fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
         fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
         include fastcgi_params;
    }
}

#存檔離開後
sudo ln -s /etc/nginx/sites-available/wordpress /etc/nginx/sites-enabled/

sudo rm /etc/nginx/sites-enabled/default

sudo systemctl restart nginx.service
```

完成以上步驟，打開瀏覽器，輸入網址，應該就可以看到WordPress安裝畫面，這邊有個小坑...如果是用Chrome會看不到網頁...要用IP
因為Chrome預設只能開啟https的網址，SSL目前還沒裝...
用其他瀏覽器就可以看到畫面~如IE (Edge ...我還是習慣叫它IE) 或Firefox
接下來最後的步驟把SSL裝上

### Step3

SSL 安裝&設定

``` script
sudo snap install core; sudo snap refresh core
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot

#讓certbot 自動修改Nginx設定
sudo certbot --nginx

#自動更新設定
sudo crontab -e
0 1 * * * /usr/bin/certbot renew >> /var/log/letsencrypt/renew.log
```

補充:
通常主機內除了放網站外，我還會放Jupyter Notebook Server
Colab雖然超級好用，但我通常是要放一些臨時性的檔案
如上網發問的範例檔案，平常在寫的檔案還是放在自己的主機內
如果有人敲碗的話，再補充這方面的設定

以上就是鐵人賽第28天的內容 :)  

---

### 參考資料

* [How to Install WordPress on Ubuntu 20.04](https://bit.ly/2NkJrRW)
* [Nginx on Ubuntu 20.04](https://bit.ly/3a9Wvm8)

---

###### tags: `13th鐵人賽` `中年大叔` `萬年菜雞` `走不出新手村` `自學歷程`
