---
sidebar_position: 24
---

# 文章標題 DAY 24

##### 初稿時間 2021-10-05  

### 前言

今天是鐵人賽的第二十四天，24、25、26這三篇都是ON檔，後面的 27、28、29
已經寫完了，所以這三天再努力一下就撐過去了!

今天要來寫一下有關之前寫過的第一支side project 想要升級的地方

一. 菲股小幫手，大叔我第一個實作的GUI介面程式
![Imgur](https://i.imgur.com/43NjLFe.png)
  
 二. 股價報酬計算機，是上面的附屬應用工具![Imgur](https://i.imgur.com/bW7bYuW.png)
  
三. Line股價機器人，跟上面用的是同一套股價資料庫，改成可以用Line查詢
![Imgur](https://i.imgur.com/L3mnRJ7.jpg)

使用情境示意圖 : 平常用雙螢幕，開盤時間就是這樣使用
![Imgur](https://i.imgur.com/ahfnbdm.jpg)

以上就是我第一次開發一個完整&可用的side project
也是第一次可以把程式給別人使用，之前當網管寫的工具只能自己用 = =|||

### 一個功能齊全的前端網站

![Imgur](https://i.imgur.com/0xMgmnL.jpg)
一開始因為我在用的菲律賓股市沒有一個比較好用的股市資訊彙整的網站
如goodinfo 或 玩股網，一開始連收集每日的收盤價的資料做成股價資料庫都很困難
後來總算克服了收集歷史股價的問題，寫了菲股看盤小幫手跟LINE股價機器人

本來我想接著寫出一個類似台灣股價資訊網的網站
上面可以有各種指標、買賣策略分析...等等
這部分研究了好久，後來知道 talib 這個屌炸天的股市指標函數庫

![Imgur](https://i.imgur.com/gksDLCB.jpg)
Q:至於為啥沒繼續接著寫下去?

A:因為沒時間維護與更新...
菲股小幫手，我去年寫好至今也才因為資料來源的網站改版，而跟著修正一次
到現在還是每天正常使用，如果要做一個goodinfo 或玩股網，那上面的股價指標、買賣策略就得常常更新，如果網站開放，還要注意伺服器的狀態，沒錢賺又傷身體...
等菲股社團的金主願意贊助開發經費再考慮 XD

### 一個美觀的Dashboard (儀表板)

![Imgur](https://i.imgur.com/SsMvF2m.png)
相較於上面一個是前端的網站，我在FinLab網站看到的這個回測的儀表板
比較有可能會實現(先不論上面那些買賣策略)
這個版面，我是很喜歡的

### 將菲股小幫手改成手機APP模式

一. 參考對象(一)
![](https://github.com/xinhaoxx/stock-viewer-tool/raw/master/screenshot/app.gif)

二. 參考對象(二)
![](https://github.com/xiaojiu5460/portfolio/raw/master/src/assets/img/home.png)
當我要把菲股小幫手給做成GUI時，有先想過到底要做成桌面版，還是手機(平板)版
後來想說因為使用雙螢幕，做成桌面版像一個widget 就符合我使用上的需求

Q: 那為什麼又想改成手機版APP?

A: 我爽~*
主要是使用的情境改變
現在通常我看盤的時候，通常也會開線上課程的影片來看
大螢幕要開VSCode 或 網頁 codepen
筆電的螢幕開線上課程，那原本放筆電螢幕上面的股價小幫手widget 就很礙眼...
我是很想再買一顆螢幕啦~ but 沒錢...
那只好把股價小幫手 改成手機APP 讓我另外在手機或平板 上面使用

上面三個，儀表板跟手機APP比較可能近期內會實現

以上就是鐵人賽第24天的內容 :)  

---
參考資料:

* [超簡單台股每日爬蟲教學 - FinLab](https://bit.ly/3aaoAsx)
* [Goodinfo!台灣股市資訊網](https://goodinfo.tw/StockInfo/index.asp)
* [一款基于 electron + vue + element-ui 的实时股票股价浏览工具 - github](https://github.com/xinhaoxx/stock-viewer-tool)
* [自选股APP - github](https://github.com/xiaojiu5460/portfolio)
* [用 Python 快速計算 158 種技術指標！](https://bit.ly/2W6OyWP)

---

###### tags: `13th鐵人賽` `中年大叔` `萬年菜雞` `走不出新手村` `自學歷程`
