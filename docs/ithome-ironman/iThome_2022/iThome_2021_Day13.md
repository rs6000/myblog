---
sidebar_position: 13
---


# 文章標題 DAY 13

### 符號錯誤

##### 初稿時間 2021-09-05  

### 前言  

今天是鐵人賽的第十三天，要來使用Python寫一下爬蟲程式([web crawler](https://bit.ly/3zPK0qf))
目的是爬取台灣的個股股價，最後可以跟前一篇的LineBot整合成一個新的應用
讓LineBot可以查詢股價資訊。

除了這篇是介紹台股的爬蟲外，下一篇是虛擬貨幣的爬蟲，希望這兩篇可以...
![Imgur](https://i.imgur.com/wTbJmEn.png)

在寫程式之前，推薦一個Python線上編輯器:**Colaboratory**
自己的電腦不用裝Python只要有網路+瀏覽器
就可以直接寫Pythont程式

### [什麼是 Colaboratory？](https://bit.ly/3thPxTY)
>
>Colaboratory (簡稱為「Colab」) 可讓你在瀏覽器上撰寫及執行 Python，且具備下列優點：
>
>- 不必進行任何設定
>- 免費使用 GPU
>- 輕鬆共用
>
>無論你是**學生**、**數據資料學家**或是  **AI 研究人員**，Colab 都能讓你的工作事半功倍。請觀看  [Colab 的簡介影片](https://www.youtube.com/watch?v=inN8seMm7UI)瞭解詳情，或是直接瀏覽以下的新手入門說明！ (以上內容是官網的簡介)
![Imgur](https://i.imgur.com/2gI14cV.png)

在臉書的Python社團常看到有新手在問python環境建置的問題，或程式出錯
真的建議用Colab來練習寫Python程式，真心不騙...
一般新手會寫到程式Colab都可以完成，甚至連AI訓練、機器學習也可以寫
程式有bug無法正常執行，把Colab的網址貼到社團裡讓善心人士來幫你debug
比用GENIUS截圖法還要有效

>![Imgur](https://i.imgur.com/oMPHMww.png)
>現在已經進化成GENIUS錄影..
>直接開Colab 馬上就可以開始快快樂樂寫Python了

### 開始用[Colab](https://bit.ly/3thPxTY)寫台股股價の爬蟲程式

0. 點選[新增筆記]
![Imgur](https://i.imgur.com/2zzSdvE.png)
1. 安裝 yfinance套件
![Imgur](https://i.imgur.com/57JoXvY.png)
2. 使用yfinance 下載個股股價資料(美股也可以抓)
![Imgur](https://i.imgur.com/uTr0HMY.png)
3. 印出最新的五筆資料
![Imgur](https://i.imgur.com/byOfw38.png)
4. 畫個股的K線圖
![Imgur](https://i.imgur.com/yPoEHiy.png)
5. 成果圖
![Imgur](https://i.imgur.com/LBmvKTE.png)
附上範例的[colab連結](https://bit.ly/3yQowYR)
6. 補充: 這個範例的延伸-畫MACD線 ![Imgur](https://i.imgur.com/mnpz6Nt.png)
買賣點的回測 (**不準**，單純練習寫code用)
![Imgur](https://i.imgur.com/VF9JCb7.png)
這些都可以直接用colab達成，好東西能不用嗎? XDD

以上就是鐵人賽第13天的內容 :)

---  
參考資料:

- [Algorithmic Trading Strategy Using MACD & Python](https://www.youtube.com/watch?v=kz_NJERCgm8)

###### tags: `13th鐵人賽` `中年大叔` `萬年菜雞` `走不出新手村` `自學歷程`
