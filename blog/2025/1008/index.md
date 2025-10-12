---
slug: Using-Bitbucket
title: 把程式推送到Bitbucket
authors: [slorber, yangshun]
tags: [facebook, hello, docusaurus]
date: 2025-10-10T10:00
---

### 前言:
#### 發布日期: 2022 年 1 月 19 日下午 12:21
目前我把bitbucket 當作練習範例的程式碼倉庫，練習用的範例都會放這 一般的side project 會放在github，網頁上內嵌的程式碼會用 gits 本來內嵌程式碼也是要用 bitbucket 但是我找不到可以內嵌的選項...

<!-- truncate -->

### 流程:

```shell

到 bitbucket 建立新的 repository

# 本地的專案資料夾下
git init

# 網址要改成自己的...
git remote add orgin https://anyone@bitbucket.org/anyone/myproject.git

git add .
git commit -m "say somethig here"
# 第一次推送要加 -f 強制用本地端檔案覆蓋遠端檔案
git push orgin master -f

之後如果要新增
# 本地的專案資料夾下
git add .
git commit -m "say somethig here"
git push orgin master

```

---

### Reference: