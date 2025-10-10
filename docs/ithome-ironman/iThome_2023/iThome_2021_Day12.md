---
sidebar_position: 12
---

# 文章標題 DAY 12

##### 初稿時間 2021-09-05  

### 前言

今天是鐵人賽的第十二天，內容是如何解決實作上發現的問題
自學的人如何解決問題，原本就是打算要寫的內容之一
沒想到會在第一個小範例就碰到坑要填...

>![Imgur](https://i.imgur.com/qldRb35.png)
>自學的人沒有多啦a夢可以幫忙Debug...

前一篇的範例程式是2019年中做的，隔了兩年再拿出來
大概花快兩小時才重建完成，讓功能可以使用
其實這個公版的echo範例，正常來說大概10分鐘內就可以上線...
![Imgur](https://i.imgur.com/JnrAB7Y.png)

今天要講的坑不是在程式身上，而是要git的推送上

### bitbucket 版本控制服務

現在大叔我主要使用[Github](https://github.com/) 但這次鐵人賽所使用的範例我會放在[bitbucket](https://bitbucket.org/)

bitbucket 是我第一個使用的線上程式碼代管的服務
當初會選bitbucket 而不是github 原因是那時候bitbucket 有免費的 private  repository
github 的 private  repository 要收錢，一直到github被萬惡微軟收購後才有免費的  Pvt

### 好久沒打開的水桶 Bitbucket

直接說重點: 介面很精簡，但速度變慢..(一直轉圈圈)

當新建一個ropo後通常會有一個類似下圖的頁面，讓使用者可以直接複製貼上 remote 掛載  
>![Imgur](https://i.imgur.com/wNeFKwq.jpg)
>圖片來源: [05. Git Remote Repository - BitBucket](https://ithelp.ithome.com.tw/articles/10203305)

github也有同樣功能的頁面，但 bitbucket好像拿掉這個頁面了
找了好久找不到，最後放棄自己手動打 remote的資料

### 無法推送到 bitbucket 的坑

其實沒想過，會在這種地方碰到坑
自學踩坑填坑的單元，原本是要在後面階段才要寫的
沒想到提前上架...這邊就是紀錄如何填坑的紀錄

1. 先看錯誤訊息...每個單字都懂，但組成句子就看不懂 XD
![Imgur](https://i.imgur.com/54a6mI1.png)

2. 看不懂的訊息，只好貼到Google翻譯
![Imgur](https://i.imgur.com/9x1I9MM.png)

3. 用了Google翻譯...還是看不懂
![Imgur](https://i.imgur.com/kBnTVkk.jpg)

4. 把錯誤訊息的其中一句貼到google搜尋
![Imgur](https://i.imgur.com/fL46KHu.png)
Tip:把錯誤訊息貼到google搜尋，不能貼太多字通常10個英文單字
另外字串裡不要有你自己使用的名稱，如路徑、檔名

5. 得到[解答](https://gitbook.tw/chapters/github/fail-to-push.html)
![Imgur](https://i.imgur.com/Jx7a948.png)

解決的方法

``` git
git push orgin master -f
```

在這個例子中，錯誤訊息已經有提供解法:先拉再推
等於是先從bitbucket pull一個空的專案 (因為剛建立)
原本在本機上寫好的程式，再丟到那個剛pull下來的資料夾裡面
只是這種方法不如 -force 來的簡單粗暴有效 XDD

以上就是鐵人賽第12天的內容 :)

---  

###### tags: `13th鐵人賽` `中年大叔` `萬年菜雞` `走不出新手村` `自學歷程`
