---
sidebar_position: 25
---

# 文章標題 DAY 25

##### 初稿時間 2021-10-06

### 前言

記得以前在學校的時候修過資料結構與演算法，考試也都會考時間複雜度等相關的題目
BUT! 畢業後，在公司上班從沒需要寫過跟演算法相關的程式，就算到現在學pyhton爬蟲
還是前端網頁程式，(我)通通用不到演算法，倒是LeetCode刷題就有一大堆演算法的題目
這方面我自己的解讀是: 我太菜，寫的程式太粗淺，還沒進入需要寫演算法的階段...

以下的內容(不會提到任何程式碼，純用嘴巴寫程式 XD)
大概是我自學過程中，唯一碰到需要寫演算法的機會

### 在台灣完全不搭公車，到菲律賓每天搭

當我在菲律賓開服飾店後， 因為當地的機車絕大部分是打檔車(自動變速的速克達比較貴)
我上下班通勤，主要是搭當地隨招即停的公車吉普尼(Jeepney)如下圖所示

![Imgur](https://i.imgur.com/y6RCGD6.jpg)
Jeepney 沒有固定的座位，上面就兩排長凳如下圖所示 (這張圖是我自己拍的...嘻嘻)
![Imgur](https://i.imgur.com/rnuE7pF.jpg)
每天搭Jeepney通勤上下班，時間應該有快一年，直到我終於學會騎打檔車(下圖是我的機車)
![Imgur](https://i.imgur.com/uJeo4lv.jpg)

### 完全沒有概念的公車路線規劃程式

在一個人不生地不熟的地方，每天搭Jeepney上下班
所以有了如何從A點到B點搭Jeepney的需求 (如下圖所示)
![Imgur](https://i.imgur.com/gFhvEnr.png)

#### 自學就像瞎子摸象，在未知的情況下試圖拼出原貌

這個從A點到B點的可搭乘哪條公車路線的程式，大概是我第一次碰到
連關鍵字都不知道要怎麼下才能在Google上面找到相關解答
身為資深網路鄉民aka關鍵字老司機，靠著精準的關鍵字每每都能比其他鄉民更快上車
在這個程式裡第一次碰到翻車的情況...我把所有想的到的關鍵字拿去餵狗(古狗)
得到的資訊少之又少，幾乎沒用...真的沒辦法了，只好上網問鄉民
沒想到卻得到鄉民的考洗 = =|||
> 專題做不出來，meeting要被電了厚
> 賽咧滾了厚
> 問工作上的問題，要收費喔
> 笑死

其實，當初我根本不知道問問題有啥業界的淺規則...
我早就離開業界許久只是一個開服飾店的 XDD
被震撼教育後，我就沒再問過這個問題，一直到今天再把這個當年未解的題目拿出來

### 當年找不到的解答，現在終於看到了

圖一
![Imgur](https://i.imgur.com/iGSknZU.png)
圖二
![Imgur](https://i.imgur.com/oaws2cZ.png)
圖三
![Imgur](https://i.imgur.com/mc0Q7qc.png)
最後google居然把這個東西實作在google map上面了
連APP都不用裝，功能還更強大，連行車時間(概略)都有了

### 所以當初的問題到底跟啥東西有關?

![Imgur](https://i.imgur.com/U8gxSof.png)
答案是: GIS
當初我有用資料結構跟演算法的課程學過的**最短路徑演算法** 當關鍵字去搜尋
只不過自己太菜，無法從這個擴展到公車路線的規劃... GIS這個名詞當初我沒看過，後來在鐵人賽中有人寫過這個題目才恍然大悟...sooga! 大部分念運輸跟交通或地理才會認識GIS...
我資管對他不熟也是合情合理的啦

---
參考資料

* [30天精通GIS資料分析-使用Python - 2019 iT 邦幫忙鐵人賽](https://ithelp.ithome.com.tw/users/20107816/ironman/1797?page=3)
* [30天打造我的WebGIS - 2018 iT 邦幫忙鐵人賽](https://ithelp.ithome.com.tw/users/20107816/ironman/1541)
* [基因演算法應用於捷運轉乘公車區位路徑問題之研究](https://bit.ly/3DjwU5W)
* [製作以站為單位的公車路線 手動處理&使用pyQGIS](https://bit.ly/2Yokk6B)
* [批次處理公車路線的問題與解法](https://geopainter.com/technique/bus-route-bulk/)
* [最短路徑 - 高中資訊科技概論教師黃建庭的教學網站](https://sites.google.com/site/zsgititit/)
* [樂客轉乘通發展歷程與應用 PDF文件](https://bit.ly/3uOngoz)
* [菲律賓交通工具 重點整理​ ！看這一篇夠了！](https://www.dcomeabroad.com/philippines/publictransport/)
* [[宿霧交通]吉普尼（Jeepney） 搭乘攻略](https://3dacademy.tw/blogs/2016/12/09/cebu-jeepney-cheap.html)
* [Cebu Jeepney Map](https://apkpure.com/tw/cebu-jeepney-map/com.jeepney.android)
* [JTransit - Cebu Jeepney Navigation](https://play.google.com/store/apps/details?id=com.boscafsoftware.jtransit)

---

###### tags: `13th鐵人賽` `中年大叔` `萬年菜雞` `走不出新手村` `自學歷程` `菲律賓` `吉普尼` `賓妹`
