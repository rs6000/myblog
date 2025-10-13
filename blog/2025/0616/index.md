---
slug: 2025-Ubuntu-Server-Ops
title: 2025 Ubuntu主機運營紀錄(長期更新) 5566
authors: [slorber, yangshun]
tags: [facebook, hello, docusaurus]
date: 2025-06-16T10:00
---

好久沒更新這裡了，網站一直放著也沒壞掉
目前先發一篇關於主機日常運營的常用指令跟自己寫的shell script
只要是管理Linux主機時常用的東西，就會先暫時寫在這一篇先堆著以後有空再分類...

<!-- truncate -->


目前我寫了一隻shell script用來每天備份主機內的WordPress網站

```
#!/bin/bash

dirName=$(date "+%Y%m%d")
fileName=$(date "+%Y%m%d_%H%M%S")
bkDir="/root/temp/WEB_BK"
fullPath="$bkDir/$dirName"

if [ -d $fullPath ]; then
        #echo "$bkDir 存在!"
        cd $fullPath
        cp -a /var/www/html/wordpress/ .
        mysqldump -u 資料庫管理者 -p資料庫密碼 資料庫名稱 > 匯出的資料庫檔名.sql
        tar -zcf feylaibook_BK_$fileName.tar.gz wordpress/ feylaibook.sql
        rm -rf wordpress/ feylaibook.sql

else
        #echo "$bkDir 不存在!"
        mkdir -p $fullPath
        cd $fullPath
        cp -a /var/www/html/wordpress/ .
        mysqldump -u 資料庫管理者 -p資料庫密碼 資料庫名稱 > 匯出的資料庫檔名.sql
        tar -zcf feylaibook_BK_$fileName.tar.gz wordpress/ feylaibook.sql
        rm -rf wordpress/ feylaibook.sql
fi

資料夾長這樣
20240718

資料夾裡面
feylaibook_BK_20240718_030001.tar.gz

排程設定 (每天3AM備份一次)

0 3 * * * sh /root/temp/bk.sh

```
 