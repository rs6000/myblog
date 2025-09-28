---
sidebar_position: 19
---


# 文章標題 DAY 19

### 圖片缺失

### 前言

鐵人賽進入第十九天，今天要來講講如何用Docker 打造程式開發環境
![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/375px-Docker_%28container_engine%29_logo.svg.png)
Docker 的維基百科
>Docker 是一個開放原始碼軟體，是一個開放平台，用於開發應用、交付（shipping）應用、執行應用。 Docker允許使用者將基礎設施（Infrastructure）中的應用單獨分割出來，形成更小的顆粒（容器），從而提高交付軟體的速度。[1]
>
>Docker容器與虛擬機器類似，但二者在原理上不同。容器是將作業系統層虛擬化，虛擬機器則是虛擬化硬體，因此容器更具有可攜式性、高效地利用伺服器。 容器更多的用於表示 軟體的一個標準化單元。由於容器的標準化，因此它可以無視基礎設施（Infrastructure）的差異，部署到任何一個地方。另外，Docker也為容器提供更強的業界的隔離相容。[2]...[維基百科](https://zh.wikipedia.org/wiki/Docker)

Docker*出道* 也有一段時間，大叔我以前也用過，不過只把它當作另一套的VM來用，加上Docker之前有很多的安裝限制，我都是在伺服器端上使用的(在虛擬機上再搭一個虛擬機...XD)

從去年中開始接觸前端後，套件版本相衝的問題一直是我自學過程中踩坑的來源，常常為了解決到底是哪個套件跟哪個套件的版本衝到，填坑的時間比真正寫程式的時間多的多
有時搞得很煩了，就棄坑去種菜 XD
![Imgur](https://i.imgur.com/hZ82m6x.png)
套件相衝的問題，後來去臉書的社團問
感謝大大們的回覆，不過我還是不解為啥nodejs不能處理套件相衝的問題，套件沒幾年就deprecated...都已經2021年了，我以為這些工具應該可以處理的...想當初還在當Linux**維運**碰到套件缺失或相衝最簡單的方法是去找到別人包好的RPM整合包(小紅帽的系統)最慘就要自己編譯...離題了XD

### 在Windows10 家用版上安裝Docker

原本Docker 在windows只能裝在專業版上面，現在可以裝在家用版上面了，前提是硬體要支援，我現在用的筆電是 i5-8250u 可以安裝docker (之前舊的筆電不能裝...殘念)

1
![Imgur](https://i.imgur.com/i536vef.png)
確認規格 win10家用版

2![Imgur](https://i.imgur.com/Fda542C.png)

3
![Imgur](https://i.imgur.com/QJJHKDY.png)
開啟hyper-v功能，框起來的都要安裝

4![Imgur](https://i.imgur.com/S26Rrsl.png)
承上一步，勾選windows 子系統 Linux版
會叫你安裝linux系統，我選ubuntu
裝好後就炸了...errrrror

5![Imgur](https://i.imgur.com/CgwR77H.png)
承上一步，先不管上面的錯誤，去下載與安裝 [Docker Desktop](https://www.docker.com/products/docker-desktop)
裝完又噴錯了...errrrror
6
![Imgur](https://i.imgur.com/7GjZIRE.png)
docker裝好後，一開始是無法啟動的，上面的圖示會是紅色的 (這邊是正常狀態的截圖)

這時候可以看剛才的噴的錯誤訊息是什麼: [WSL 2](https://docs.microsoft.com/zh-tw/windows/wsl/install-win10)
訊息裡有提供網頁連結了，點進去看看，照著裡面的方法操作，就解決了
...難得有那麼順利的 XDD

7![Imgur](https://i.imgur.com/ljr4vAF.png)
下指令看看裝好的docker版本

### 在 Vs Code 底下使用Docker

8
![Imgur](https://i.imgur.com/oTVlfPN.png)
安裝 Remote Development的套件
在vs code底下操作docker會用到

9
![Imgur](https://i.imgur.com/WBM7Tru.png)
裝好後， Ctrl + Shift + P 叫出命令面板

10![Imgur](https://i.imgur.com/83TSSlX.png)
選擇 開啟 Try a Development Container Sample
這邊要開一個簡單的demo用得 sample

11
![Imgur](https://i.imgur.com/OqmKG29.png)
映像檔選Node ...(想開別的可以自己選)

12
![Imgur](https://i.imgur.com/WsBjf9r.png)
Node 服務起來的畫面 1

13
![Imgur](https://i.imgur.com/WcKaqCC.png)
Node 服務起來的畫面 2

14![Imgur](https://i.imgur.com/1npAqj9.png)
Node 服務起來的畫面 3
可以直接在上面跑npm start
這樣就可以開始寫前端程式了

至於要怎麼寫客製化自己的docker如 dockerfile 、composer
已經沒篇幅寫了~待續...

以上就是鐵人賽第19天的內容 :)  

---
參考資料:

* [[ 前端新手技能樹 ] #1 VS Code、Docker 與開發環境建置 - Alex 宅幹嘛](https://www.youtube.com/watch?v=CxNm-3EedyA)
* [30 天與鯨魚先生做好朋友](https://mileschou.github.io/ironman/12th/docker-newbie/)
