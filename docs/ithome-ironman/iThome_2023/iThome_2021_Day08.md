---
sidebar_position: 8
---

# 文章標題 DAY 8

#### 符號錯誤

##### 初稿時間 2021-08-19  

### 在那個用記事本寫HTML的年代 (講古時間)

大叔我在1996年五專入學念資管系,一年級就接觸到網頁設計
當時就是用Windows 95裡面的記事本寫html網頁的(後來用[UltraEdit](https://zh.wikipedia.org/wiki/UltraEdit))
剛開始寫網頁時，就覺得為什麼html的標籤要有符號...

##### html的結構如下

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

每次打開記事本，上面的結構就的從頭寫一次...後來是把這種檔案存一份當範本，每次要寫網頁，就複製一份新檔，不過html的標籤問題還是沒有解決， 標籤要按著shift 害我好幾次按到手抽筋..

直到下學期，系上進了新的office校園版，裡面有一個軟體叫[FrontPage97](https://zh.wikipedia.org/wiki/Microsoft_FrontPage)
這真是一個跨時代的發明!!!(當時小時候覺得)
>![Imgur](https://i.imgur.com/998U0qX.png)
>(上面的圖是網路上抓的，當時已經有中文版了)

>![Imgur](https://i.imgur.com/cPGNn4k.jpg)
>當時跟我一樣不喜歡寫HTML標籤的人應該不在少數

寫網頁就跟打Word一樣，不用再打html標籤!!!(手不會再按到抽筋了!!!)
**所以當時一試就成老主顧**，一路用到2003版
聽說後來FrontPage變成國中電腦課裡一個必學?的軟體
>![Imgur](https://i.imgur.com/KAazouT.png)
>熟悉的編輯畫面!!!

FrontPage雖然好用到炸天，但也是有不少缺點的，其中最大條的應該是寫出來的網頁，只能給IE開
如果給[網景(Netscape)](https://en.wikipedia.org/wiki/Netscape_Navigator)開，畫面出錯的機率可能 >87%
不過當時已經是IE快要進入獨霸的階段，寄生在[Windows 95](https://bit.ly/3no6I5s)底下的不公平競爭...
([Windows 98](https://bit.ly/3hnDjnY)一出就再無懸念...)
講古時間最後，提一下我最喜歡的FrontPage的一樣功能
> ![Imgur](https://i.imgur.com/wS66Xt9.gif)

如上圖，FrontPage可以直接把網站的組織圖給畫出來，這功能即使到現在，我還是想要在寫網頁的時候有這個功能。
*上面的講古時間，純屬回憶，如果時序或內容有誤的，請指正*

>2021-08-23補充:
>暗黑破壞神2 重製版在 [8/21~8/24 開放3天免預購公測](https://udn.com/news/story/10222/5667867)
>我也就暫時放下鐵人賽，去玩這個當年我錯過的遊戲
>玩遊戲首先要去找攻略，就找到從2003活到現在的骨董級網站[【易牙居】](http://iyazero.tw/Default.htm)
>![Imgur](https://i.imgur.com/6oRWWM7.png)
>
>![Imgur](https://i.imgur.com/jTWn5Dg.png)
>
>![Imgur](https://i.imgur.com/Si9mKKQ.png)
>這網站看起來就像是FrontPage做的，檢視原始碼果然就是FrontPage寫的 XDD
>當年我記得我已經在玩金庸群俠傳，我也有在做攻略網站
>當時我也是用FrontPage，但自認美術天分不佳的我
>也懂得表格用實線會比預設空心的美觀 XDD

### 講了那麼多，就是鋪陳為了接下來要介紹的Emmet

# Emmet

![emmet](https://camo.githubusercontent.com/15cd87d168802cc9d764100675782dd6aa45e0c7d32e535a181146a2182a52a8/687474703a2f2f646f776e6c6f61642e656d6d65742e696f2f656d6d65742d61746f6d2e676966)
>[維基百科](https://zh.wikipedia.org/wiki/Emmet#cite_note-1)
>**Emmet**（以前名為**Zen Coding**[[1]](https://zh.wikipedia.org/wiki/Emmet#cite_note-1)）是一套面向[文字編輯器](https://zh.wikipedia.org/wiki/%E6%96%87%E6%9C%AC%E7%BC%96%E8%BE%91%E5%99%A8 "文字編輯器")的[外掛程式](https://zh.wikipedia.org/wiki/%E6%8F%92%E4%BB%B6 "外掛程式")，它允許通過[內容輔助](https://zh.wikipedia.org/wiki/%E5%86%85%E5%AE%B9%E8%BE%85%E5%8A%A9)高速度的編寫和編輯[HTML](https://zh.wikipedia.org/wiki/HTML "HTML")、[XML](https://zh.wikipedia.org/wiki/XML "XML")、[XSL](https://zh.wikipedia.org/wiki/%E5%8F%AF%E6%89%A9%E5%B1%95%E6%A0%B7%E5%BC%8F%E8%AF%AD%E8%A8%80 "可延伸樣式語言")和其他結構化的代碼格式。此專案2008年由Vadim Makeev發起[[2]](https://zh.wikipedia.org/wiki/Emmet#cite_note-2)，並由Sergey Chikuyonok和其他Emmet使用者基於Zen Coding 2.0的概念繼續積極開發。[[3]](https://zh.wikipedia.org/wiki/Emmet#cite_note-3)這套工具已經被一些高階的文字編輯器採納，以及存在於Emmet團隊開發或其他人獨立實現的外掛程式中。不過，Emmet獨立於任何文字編輯器，它的引擎可以直接處理文字，而無需與任何特定軟體相關。

### 從記不住語法，到沒有Emmet就無法寫網頁

我是去年要重新開始學網頁，才從Amos大大的[金魚都能懂的網頁設計入門 - 金魚都能懂了你還怕學不會嗎](https://ithelp.ithome.com.tw/users/20112550/ironman/2072)
看到Emmet這個玩意，不過當時並沒有意識到這個工具的好用之處
還覺得...又要記一些語法...好討厭...沒辦法我是金魚腦裡面腦容量低於平均值的那種... XDD
要到Amos大大講到CSS的部分，才驚覺Emmet能幫我做什麼
主要是class 與 id 這兩個部分，大叔的時代，最多只會在表單上用到id至於class 實在沒什麼印象
現在的html裡面充斥著大量的class，如果寫網頁還是照我古早之前的寫法，應該寫不到兩天就放棄，轉去學別的 XDD
Emmet有很進階的寫法，可以寫巢狀、變數、表格
但對菜雞大叔我來說，html標籤+class 或id的速寫已經足夠目前學習。
花了兩個星期來熟悉用Emmet來寫HTML，最後一試成主顧，在也離不開Emmet了!

>補充: 當初學習Bootstrap，一看到標籤裡面，塞了一堆class
>並不是很喜歡這種作法，即使當時已經很習慣用Emmet來寫
>但看了Amos大大的 [金魚都能懂的Bootstrap5網頁框架開發入門](https://ithelp.ithome.com.tw/users/20112550/ironman/3796)
>了解Bootstrap運作的方式後，就沒那麼排斥了

# PUG

![Imgur](https://i.imgur.com/MnAYehN.png)
Pug是我在hahow購買的前端課程中，講師在範例中所使用的網頁模板!  
pug最大的特色是用縮排來取代HTML的
這也是最吸引我的點，整篇文章看下來，應該就知道我有多討厭寫HTML的標籤寫法...
用縮排來控制程式區塊，恰好跟我在用的Python一樣
(當初會學Python也是因為其他語言也有類似的問題，大括號、分號...常常漏寫又沒編輯器幫忙補正)

>![Imgur](https://i.imgur.com/9zbtRZ6.png)
>當時發現PUG這款屌炸天的神器

Pug程式碼範例:

``` pug
.container
    .row
        .col-md-6.col-lg-3
            .card 
                img(src='https://picsum.photos/900/600?random=1').card-img-top.img-fluid
                .card-body
                    h5.card-title Card Title
                    p.card-text Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima optio quidem reiciendis harum repudiandae quisquam illo, fuga deleniti debitis nihil! 
                    button.btn.btn-info Go somewhere!
        .col-md-6.col-lg-3
            .card 
                img(src='https://picsum.photos/900/600?random=2').card-img-top.img-fluid
                .card-body
                    h5.card-title Card Title
                    p.card-text Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima optio quidem reiciendis harum repudiandae quisquam illo, fuga deleniti debitis nihil! 
                    button.btn.btn-info Go somewhere!
        .col-md-6.col-lg-3
            .card 
                img(src='https://picsum.photos/900/600?random=3').card-img-top.img-fluid
                .card-body
                    h5.card-title Card Title
                    p.card-text Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima optio quidem reiciendis harum repudiandae quisquam illo, fuga deleniti debitis nihil! 
                    button.btn.btn-info Go somewhere!
        .col-md-6.col-lg-3
            .card 
                img(src='https://picsum.photos/900/600?random=4').card-img-top.img-fluid
                .card-body
                    h5.card-title Card Title
                    p.card-text Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima optio quidem reiciendis harum repudiandae quisquam illo, fuga deleniti debitis nihil! 
                    button.btn.btn-info Go somewhere!            
```

畫面:
![Imgur](https://i.imgur.com/I9fLVYd.png)
這邊要介紹如何在 VS Code裡使用Pug !  
我在網路上爬文，想要在本機端使用Pug 的方法跟 在Codepen相比  
真的差很多...最常看到解答:

1. 使用 Gulp
2. 使用 Vue Cli 建立一個專案
3. 使用 Prepros

以上除了2&3日後，比較有機會用到外，Gulp不太符合我的使用習慣
這裡就介紹我目前所使用的方法:

在VS Code裡面安裝下面的套件:  
[Sass/Less/Stylus/Pug/Jade/Typescript/Javascript Compile Hero Pro](https://bit.ly/3ysojey)  
連結裡就有示範用法了，這邊就不灌水填版面了 XDDD  
文章最後說一下這個套件的優缺點:

優點:

1. 可以同時live檢視 pug 跟sass

缺點:

1. 安裝後，VS Code啟動時會明顯變慢...不用時最好關掉!!!
2. 無法用專案的模式，如webpack或vue cli (應該是我不會用)

以上就是鐵人賽第八天的內容 :)

---

###### tags: `13th鐵人賽` `中年大叔` `萬年菜雞` `走不出新手村` `自學歷程`
