---
sidebar_position: 14
---

# 文章標題 DAY 14

##### 初稿時間 2021-09-07  

### 前言

今天是鐵人賽的第十四天，這次要來寫一下虛擬貨幣的爬蟲
對象是meme虛擬貨幣界的霸主:**狗狗幣**
![Imgur](https://i.imgur.com/e1OhoYJ.jpg)

### 開始用[Colab](https://bit.ly/3thPxTY)寫狗狗幣の爬蟲程式

1. 設定要抓取的時間範圍
![Imgur](https://i.imgur.com/FtbmG7H.png)

2. 設定要抓的虛擬貨幣
![Imgur](https://i.imgur.com/taTgb9G.png)

3. 設定要抓的網址
![Imgur](https://i.imgur.com/tNuoPBr.png)

程式碼太長被截掉了，在這補上

``` python
res = requests.get(('https://poloniex.com/public?command=returnChartData&currencyPair={0}&start={1}&end={2}&period=14400').format(currency,start_date,end_date,))
```

4. 列出最新5筆
![Imgur](https://i.imgur.com/W2xVPaI.png)

5. 畫出每日收盤價的走勢圖
![Imgur](https://i.imgur.com/s3eHVun.png)

6. 畫K線圖
![Imgur](https://i.imgur.com/Pn5XJrD.png)

7. 成果圖
![Imgur](https://i.imgur.com/JQgiYgH.png)
附上本次範例的[Colab連結](https://bit.ly/2WWMSTC)

以上就是鐵人賽第14天的內容 ...

今天這篇應該是到目前為止字數最少了...水份跟西瓜一樣多..
![Imgur](https://i.imgur.com/lqOclAO.png)
不是沒時間寫，是榨不出汁來了...

---  
參考資料:

- [[比特幣程式交易] 如何透過API獲取比特幣歷史報價數據?](https://www.youtube.com/watch?v=no5dBXTppkg)
- [Blockchain API](https://docs.poloniex.com/#returntradehistory-public)
- [Python時間轉換介紹](https://ithelp.ithome.com.tw/articles/10235251)

###### tags: `13th鐵人賽` `中年大叔` `萬年菜雞` `走不出新手村` `自學歷程`
