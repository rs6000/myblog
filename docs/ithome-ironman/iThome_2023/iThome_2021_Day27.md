---
sidebar_position: 27
---

# 文章標題 DAY 27

##### 初稿時間 2021-09-18  

### 前言

今天是鐵人賽的第27天，終於要進入把網站從自己的電腦裡搬到雲端上(伺服器端)
有關於網址與網路主機的要買哪一種，在之前的文章就提過了
以下的範例內容就以大叔我自己目前使用的廠商為主

### 購買網址: [Godaddy](https://tw.godaddy.com/)

![Imgur](https://i.imgur.com/jjq7lEm.png)
大叔使用 Godaddy 的時間 2017至今 (上面那個人不是我...)
目前 Godaddy除了網站有中文介面外，也有了台灣的服務電話(02開頭的，所以應該也是講中文的)
在這邊買一組你要的網址，裡面可能會有很多個加購選項如虛擬主機、SSL 這些都不需要，只要買網址就好!

DNS管理:
![Imgur](https://i.imgur.com/E3GsL8y.png)
買好網址後，進入管理頁面有個【DNS管理】填入以下的資料!

```
NS1.LINODE.COM
NS2.LINODE.COM
NS3.LINODE.COM
NS4.LINODE.COM
NS5.LINODE.COM
```

網址設定的部分就結束了，基本上除了續約、退租或其他管理之外，基本上都不會再進入Godaddy網頁 XDD

### 網路主機: [Linode](https://www.linode.com/)

![Imgur](https://i.imgur.com/tHp8fjf.png)
在Linode購買主機，有很多方案可以選，我目前是用 10美金/月 的方案
來放置我個人的部落格(WordPress)與其他服務(如 Jupyter notebook)
10鎂的方案來說已經很夠用了，當然我也看過有更便宜的方案 5鎂
...也聽聞有當起二房東的業者，拿當初GCP一年免費額度，把客戶的網站塞在那邊的...
10鎂的方案是目前我用到現在，CP值最高的。想想喇基手遊一個月課金花多少? XDD

伺服器設定:

1.

![Imgur](https://i.imgur.com/puKxOAq.png)
買完主機方案後，就可以進入管理頁面，建立伺服器啦~

2.

![Imgur](https://i.imgur.com/OhnGWcQ.png)
這邊可以挑選伺服器的Distribution
之前我都是用[CentOS](https://zh.wikipedia.org/wiki/CentOS) 但已經被RedHat放生了...現在我伺服器只好改用Ubuntu
選好伺服器版本&設定root密碼後，就會進行安裝，大約3分鐘內就裝好了

domains設定:
![Imgur](https://i.imgur.com/qD7ab3k.png)
伺服器裝好後，接下來就是網址的設定，這部分也是很簡單，照著下面的圖示進行就好...

1. a紀錄
![Imgur](https://i.imgur.com/sCpnbtx.png)
smilehsu.cc 是我目前部落格的網址，這邊就把網址改成你自己申請的就好。
shop那一欄可以不用填。

2.mx紀錄
![Imgur](https://i.imgur.com/JXBHQTA.png)
MX Record 是郵件交換記錄
目前我的部落格是讓mailgun來代發我主機的信件
通常我不會讓主機直接去發信件，我自己用的伺服器就是用第三方的信件服務(mailgun免費仔的方案)
SPAM(垃圾信)實在太討厭了，郵件過濾規則再會寫，也不比上GMAIL 的神奇演算法
如果不想看打開信箱被SPAM塞爆或你寄出去的信被對方郵件伺服器掃到垃圾信箱
我會建議用把郵件服務給[Google Workspace](https://workspace.google.com/intl/zh-TW/pricing.html)
如果不是只有一個人要用，那通常這個費用會比 今天提到的買網址跟網路主機加起來還要**貴一點點** XDD
(這個服務是算使用者數量的...越多使用者當然越貴)

以上就是網址與主機的設定，應該很簡單啦
設定好之後，通常網址約幾個小時內才會生效，(現在好像1個小時內就生效)
下篇內容就會介紹在主機內建立網站與其他服務

以上就是鐵人賽第27天的內容 :)  

---

###### tags: `13th鐵人賽` `中年大叔` `萬年菜雞` `走不出新手村` `自學歷程`
