---
sidebar_position: 5
---

# 文章標題 DAY 5

##### 初稿時間 2021-08-27

### 前言

今天是鐵人賽的第五天，要特別講一下vhost(虛擬網站)的設定方式

啟動XAMPP的Apache時，通常預設的本機網址是:

```
http://localhost
或是
http://127.0.0.1
```

大叔我通常會開一堆測試的網站，之前不知道怎麼設定vhsot的時候，假設開了3個測試網站
我就去改httpd.conf 把網站的根目錄指到現在要用的那一個，其他兩個就無法同時啟用。
這種方法...真的很不方便...也完全暴露自己是菜雞 XDD

這邊提供一個使用虛擬網址的方法，可以自訂你要的網址在本機端裡瀏覽
(網址雖然可以隨便設，但不要設成 google.com 或 facebook.com 之類的...)

要修改的檔案:

##### C:\xampp\apache\conf\extra\httpd-vhosts.conf

```
#網址格式範例
<VirtualHost *:80>
 DocumentRoot "C:/xampp/htdocs/mylab/public"
 ServerName mylab.cc
  <Directory "C:/xampp/htdocs/mylab/public">
   DirectoryIndex index.php
   AllowOverride All
   Order allow,deny
   Allow from all
  </Directory> 
</VirtualHost>

#有SSL
<VirtualHost *:443 >
   DocumentRoot "c:/xampp/htdocs/mylab"
   ServerName mylab.cc
   SSLEngine on
   SSLCertificateFile "ssl/mylab.cc/server.crt"
   SSLCertificateKeyFile "ssl/mylab.cc/server.key"
</VirtualHost>
```

##### C:\Windows\System32\drivers\etc\hosts

```
127.0.0.1  mylab.cc
```

以上的範例是以假設要用 mylab.cc當作本機測試網址，網站的目錄就是mylab
所以要怎麼改成自己要的應該不用解釋了

此外httpd-vhosts.conf裡面，除了一般的 80port外，還多一個 443port
這個就是給在網址列看到瀏覽器提示這個網站**不安全**會有煩躁感的人用的 XD (就是我)

### 網站的SSL憑證自己發

![Imgur](https://i.imgur.com/dkzoHzN.png)
要在XAMPP底下的虛擬網址掛上https
網路上已經有高人寫好工具程式了
安裝方法的傳送門: [How to Create Valid SSL in localhost for XAMPP](https://shellcreeper.com/how-to-create-valid-ssl-in-localhost-for-xampp/)

#### 安裝的重點
>
>把上面連結裡的兩隻檔案放到C:\xampp\apache\ssl
>ssl的資料夾名稱可以換成你自訂的，但上面httpd-vhosts.conf的設定檔就要跟著改

### 這邊碰到的小坑

本來用得好好的設定，在這個月突然壞掉了...
還好有其他人釋出修正的版本
傳送門:[Xampp SSL Certificate Creator for Windows](https://gist.github.com/adriansuter/f197dac4cf8570c2214642fa15299c33)
我是看不出改了什麼，只看到憑證的有效時間變成一年(縮短)。

#### 示意圖:(網址旁邊有鎖頭)

![Imgur](https://i.imgur.com/KZUrw55.png)
以上就是在本機端使用虛擬(假的)網址，附掛SSL憑證的做法
至於伺服端的HTTP與SSL設定，後面的文章會提。

以上就是鐵人賽第五天的內容 :)

---  

###### tags: `13th鐵人賽` `中年大叔` `萬年菜雞` `走不出新手村` `自學歷程`
