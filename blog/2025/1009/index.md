---
slug: Manual-Update-WordPress
title: 在主機端直接下指令更新WordPress
authors: [smilehsu]
tags: [facebook, hello, docusaurus]
date: 2025-10-09T10:00
---
### 前言:
#### 發布日期: 2022 年 6 月 22 日下午 5:06

本篇是介紹如在Server端下更新WordPress 之前我更新WordPress的方式都是把更新檔下載到個人電腦 將檔案解壓縮後，再使用FTP軟體把檔案上傳到Server上 詳細過程可以參考這篇[\[教學\] 手動更新WordPress](http://test.smilehsu.cc/2016/10/307)現在我在的地方只能用手機網路，FTP連線會一直斷線 所以改用SSH連線主機更新WordPress ### 操作流程如下:

<!-- truncate -->

```script
1.使用SSH登入Server 並下載WordPress 最新版本
wget https://tw.wordpress.org/latest-zh_TW.tar.gz

2.解壓縮剛剛下載的WordPress檔案
tar -zxvf latest-zh_TW.tar.gz

3.備份WordPress 網站目錄
tar -zcvf 20220622_wordpress_WebBK.tar.gz /var/www/html/wordpress/

4.備份WordPress 資料庫
mysqldump -u root -p密碼 WP資料庫名稱 > 20220622_wordpress_SqlBK.sql

5.將剛剛解壓的WordPress 複製(覆蓋)到WordPress的網站目錄
cp -avr wordpress/* /var/www/html/wordpress

6. 解決檔案權限跑掉(無法安裝外掛的問題) (20240403新增)
cd /var/www/html/
sudo chown -R www-data:www-data wordpress/
sudo chmod -R 755 wordpress/

6.打開瀏覽器進入WordPress 的更新頁面
WordPress網址/wp-admin/upgrade.php
```

以上打完收工 - - - - - -

### Reference:

1. Upgrade wordpress quickly in 3 easy steps from UNIX shell prompt
