---
sidebar_position: 16
---

# 文章標題 DAY 16

##### 初稿時間 2021-09-10  

### 前言

今天是鐵人賽的第十六天，要來寫一下如何在Bitbucket顯示 Jupyter Notebook的檔案

[Jupyter Notebook在維基百科的解釋:](https://zh.wikipedia.org/wiki/Jupyter)
>Jupyter Notebook（前身是IPython Notebook）是一個基於Web的互動式計算環境，用於創建Jupyter Notebook檔案。Notebook一詞可以通俗地引用許多不同的實體，主要是Jupyter Web應用程式、Jupyter Python Web伺服器或Jupyter檔案格式（取決於上下文）。Jupyter Notebook檔案是一個JSON檔案，遵循版本化模式，包含一個有序的輸入/輸出單元格列表，這些單元格可以包含程式碼、文本（使用Markdown語言）、數學、圖表和富媒體 (Rich media)，通常以「.ipynb」結尾附檔名。
>![](https://upload.wikimedia.org/wikipedia/commons/a/af/IPython-notebook.png)
>Jupyter Notebook檔案可以通過Web界面中的「Download As」，通過nbconvert函式庫或shell中的「jupyter nbconvert」命令行界面，轉換為許多的開源標準輸出格式（HTML、演示投影片、LaTeX、PDF、reStructuredText、Markdown、Python)。
>
>為了簡化Jupyter Notebook檔案在Web上的視覺化，nbconvert函式庫是通過nbviewer提供的一項服務，它可以獲取任何公開可用的Notebook檔案的URL，將其動態轉換為 HTML 並顯示給使用者。

我現在寫Python程式，大部分都直接用Jupyter 只要跑出程式的結果就好了
像是股市的爬蟲或是畫趨勢圖，就不另外寫成檔案，因為Jupyter 本身就是一個網頁
不用另外寫個ui來呈現資料的畫面，非常方便省事

前幾天的範例:DAY13 台股爬蟲、DAY14虛擬貨幣爬蟲
是用Colab (就是線上版的 Jupyter Notebook)
可以直接線上執行範例程式碼，但有些我只想放不能執行，只展示程式碼的靜態網頁
因為總不能一直在Colab上蓋蚊子館..XDD
所以這篇就來介紹 怎麼在 Bitbucket 展示 Jupyter的畫面

### 開始動工

1. 有任何疑難雜症，先問Google (查詢怎麼在水桶上顯示邱比特筆記)
![Imgur](https://i.imgur.com/xgZXqWv.png)

2. 在堆棧溢出裡面得到解答，就照著做
![Imgur](https://i.imgur.com/IJ5H7N7.png)

3. 到marketplace安裝套件
![Imgur](https://i.imgur.com/LpdUo8W.png)

4. Add Notebook Viewer
![Imgur](https://i.imgur.com/4bLwRwr.png)

5. 裝好後，**repo裡面的ipynb檔案**就可以用Jupyter Notebook模式檢視
![Imgur](https://i.imgur.com/h6XDukp.png)
檢視的版面居然沒有滿版...程式碼太長就會出現捲軸...痾

6. 可惜的是Snippets並不支援，只能放在repo下
![Imgur](https://i.imgur.com/al7GyjI.png)
我就是不想開一個repo只要貼程式碼就好...痾

7. 看看gitbhub 的gist 直接可以貼ipynb檔案還可以用 colab開啟...水桶已經看不到人家的車尾燈
![Imgur](https://i.imgur.com/dTjcsU2.png)
gist真的很放方便，我大多也只是貼短短的程式碼或者Jupyter Notebook
所以一用成主顧就回不去水桶了...

### Bitbucket方便的地方?

 俗語說【狡兔有三窟】這次參加it鐵人賽，把塵封已久的水桶(Bitbucket)打開
 是為了多一個地方放程式碼，現在主要都用Github了
 水桶用了幾天，就知道為啥現在沒啥人在用...
 這邊說一個，我覺得水桶比github好用的地方
 刪除repo很方便...
>水桶要刪除repo只要按下Delete
>![Imgur](https://i.imgur.com/IaY4Jxe.png)
>github要刪掉repo 得先填上 repo的名稱做確認
>![Imgur](https://i.imgur.com/KaEhImD.png)

之前在github上 fork一堆別人的repo 要刪除就一個一個刪慢慢刪 (不知道能不能用cli批次刪檔)
水桶刪repo比較簡單，是我認為比github方便的地方..XDD

以上就是鐵人賽第16天的內容 :)  

---
參考資料

* [how to display ipynb notebook file in bitbucket? - Stack Overflow](https://bit.ly/3k0mqSa)

###### tags: `13th鐵人賽` `中年大叔` `萬年菜雞` `走不出新手村` `自學歷程`
