---
sidebar_position: 30
---

# 文章標題 DAY 30

##### 初稿時間 2021-09-18

### 前言

終於來到鐵人賽的第29天啦，今天的內容是把之前做好的Line股價機器人
部署到Heroku 上面 ，所以可以直接拿第15天完成的範例檔案來用
通常這些暫時的應用服務，我就放Heroku上面，並不會放在自己的主機內
以節省資源... XDD

### 準備好的話就開始動工吧 (複製貼上)
>
>編輯的檔案 module/func.pypy

![Imgur](https://i.imgur.com/S3lthqH.png)
這邊要修改的就是text1這個字串的內容，隨便改，這樣推到heroku後就知道哪邊有更改了

>編輯的檔案 settings.py

![Imgur](https://i.imgur.com/mdzBfIq.png)

![Imgur](https://i.imgur.com/v5pVIPf.png)
在網站的根目錄下新增 Procfile 、runtime.txt
>編輯的檔案 Procfile

```
web: gunicorn --pythonpath linebotday15 linebotday15.wsgi
```

linebotday15 是我的專案名稱，這邊要改成自己設的名稱

>編輯的檔案 runtime.txt

```
python-3.9.7
```

接下來在專案底下開啟終端機視窗(cmd)
以下的操作都是在cmd底下執行

```
1.切換到 上次為 linebot建立的虛擬環境
2.現在的路徑要切到專案的根目錄底下
#以下開始操作
上傳到 Heroku (請先申請一個Heroku帳號)

heroku login

#專案名稱 在heroku上面的，名稱自己取..
heroku create 專案名稱(in heroku)

git init

heroku git:remote -a 專案名稱(in heroku)

heroku config:set DISABLE_COLLECTSTATIC=1

git add .

git commit -am "init commit"

git push heroku master

#打開瀏覽器觀看剛剛部署的網站
heroku open
#以下可省略
#heroku run python manage.py migrate
#heroku run python manage.py createsuperuser
#heroku ps:scale web=1
```

上傳至Heroku的完成圖
![Imgur](https://i.imgur.com/JpYd9Vs.png)

接著打開 LineBot的管理畫面，把資料填入
![Imgur](https://i.imgur.com/YTIPfHF.png)

打開網頁，看到 404...是正常的，因為這個專案不需要前端的網頁。
![Imgur](https://i.imgur.com/ORe6asC.png)

打開LineBot 測試功能 (黃色框起的部分就是這次修改的內容)
![Imgur](https://i.imgur.com/CDJCWlZ.png)
應該會很順利的把專案推到Heroku上面，LineBot也正常運作。(灑花)

新增範例的完成檔案:

```
git clone https://smilehsu@bitbucket.org/smilehsu/mylinebotv3.git
```

**理論上**，上面的檔案抓下來，把Line金鑰的資料改成自己的，照上面的流程操作，10分鐘內就可以上線

以上就是鐵人賽第29天的內容 :)  

---

###### tags: `13th鐵人賽` `中年大叔` `萬年菜雞` `走不出新手村` `自學歷程`
