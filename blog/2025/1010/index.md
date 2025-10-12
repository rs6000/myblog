---
slug: Add-a-new-subdomain-using-Nginx
title: 使用Nginx新增一個子網域(Subdomain)
authors: [slorber, yangshun]
tags: [facebook, hello, docusaurus]
date: 2025-10-10T10:00
---

### 前言:
#### 發布日期: 2022 年 6 月 23 日上午 3:52
本篇是紀錄如何在Nginx底下設定子網域(Subdomain)並且安裝WordPress

我目前的網址smilehsu.cc就是使用WordPress架設 想要增加新的網站又不要買新的網域名稱，就要用到子網域(Subdomain)功能 xxx.網域名稱 xxx就是給新的網站使用的名稱，xxx自己取(如:shop、game、lab...限定英文...)

本篇只會寫如何在新增Nginx的Subdomain的設定檔 至於如何安裝WordPrsss、如何設定SSL 請參考我之前寫過的 [\[筆記\] Ubuntu20.04 安裝LEMP +SSL](http://test.smilehsu.cc/2021/02/2603)

<!-- truncate -->

### 操作流程如下:

首先我的網址DNS是主機商(Linode)代管的，所以先到DNS設定頁面 把要新增的子網域名稱加上去(這次範例是shop當子網域名稱，所以完成後網址是這樣 shop.smilehsu.cc )

![圖片1](https://smilehsu.cc/wp-content/uploads/2022/06/aaa.png)

接下來使用子網域的網站，我還是使用WordPress來架設 所以下載WordPress跟網站的路徑設定與SSL設定 請參考[\[筆記\] Ubuntu20.04 安裝LEMP +SSL](http://test.smilehsu.cc/2021/02/2603)

最後進入本篇的重點，在Nginx底下新增子網域(Subdomain)的設定

```script
#新增設定檔 shop-wordpress (名稱自訂)
touch /etc/nginx/sites-available/shop-wordpress

#編輯設定檔
nano /etc/nginx/sites-available/shop-wordpress
```

### 設定檔的內容如下:

```script
server {
    #要改的地方
    root /var/www/html/myshop;
    index  index.php index.html index.htm;
    #要改的地方
    server_name shop.smilehsu.cc

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
    # SSL設定，要先用Certbot完成
    listen [::]:443 ssl; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/smilehsu.cc/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/smilehsu.cc/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
server {
    if ($host = shop.smilehsu.cc) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    listen 80;
    listen [::]:80;
    #要改的地方
    server_name shop.smilehsu.cc

    client_max_body_size 100M;
    return 404; # managed by Certbot
}
```

#### 最後一步:設定連結與打開新網站

```script
#設定連結
sudo ln -s /etc/nginx/sites-available/shop-wordpress /etc/nginx/sites-enabled/

# restart Nginx
sudo systemctl restart nginx.service

#最後在瀏覽器(chrome)上輸入網址 shop.smilehsu.cc 就會看到WordPress的安裝畫面
```

以上打完收工

***

### Reference:

1. [How to install WordPress in a subdomain on Cloud Servers with Nginx](https://bit.ly/3QCkyNE)
2. How to Install WordPress on a Subdomain with Nginx
