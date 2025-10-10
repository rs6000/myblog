---
sidebar_position: 11
---

# 文章標題 DAY 11

##### 初稿時間 2021-09-04  

# 第一個小範例 : LineBot 自動回話

### 前言

今天是鐵人賽的第十一天，開始進入新的階段啦
從這邊開始會寫一些我自學過程中寫過的範例

![Imgur](https://i.imgur.com/uMHnELF.png)

### 申請 Line Developer 帳號

要開始寫Line Bot之前，先要有Line開發者帳號
請先到[LINE Developers Console](https://developers.line.biz/console/) 建立一個開發者帳號
(註: 要創立開發者帳號之前...要先有Line的帳號)

如不知知道怎麼註冊開發者帳號，請點選下面的圖片連結
[![Imgur](https://i.imgur.com/7U8zDEP.png)](https://developers.line.biz/zh-hant/docs/messaging-api/getting-started/)

建好開發者帳號後，就在管理頁面上建立一個 **provider**
![Imgur](https://i.imgur.com/cBy6hzE.png)
在建立的類型選擇 **Create Messaging API channel**
![Imgur](https://i.imgur.com/jxgOwlw.png)
 之後就照著填資料，下面的圖就是我建好的 (豬頭可以換成自己喜歡的圖..)
![Imgur](https://i.imgur.com/aFqxGD0.png)

### 保存LineBot 的重要資料

Line Bot的帳號建好之後，有兩個資料要先保存

**Channel secret**
![Imgur](https://i.imgur.com/VC5t4bH.png)
**Channel access token**
![Imgur](https://i.imgur.com/5HdIJy2.png)
上面的兩張圖，紅色框起來的部分，把文字複製下來，貼在記事本裡保存
在本機開發Lien Bot時，會用到，存下來就不用去開網頁查看。

**補充: 最後記得要把這個LineBot 加到你的Line好友**

### LineBot 開發環境建置 (for Python)

以下都是在win10 64bit 家用版的環境下建置

下載[Ngrok](https://ngrok.com/download)
>這是一個可在本地端測試webhook 的必備工具

安裝Python 虛擬環境的套件
```pip install virtualenvwrapper-win```

建立 Python 虛擬環境

``` ptyhon
mkvirtualenv mylinebot
```

建立 LineBot 開發專案

``` python
#註: 以下操作都需要在python的虛擬環境底下執行
#安裝 Django & Line SDK
pip install Django==2.2.4
pip install line-bot-sdk==1.8.0
pip install yfinance

#建立 django 專案
django-admin starproject mybot
cd mybot

#建立 app 跟 資料庫初始化
python manage.py startapp myapp
python manage.py makemigrations
python manage.py migrate
```

在這個範例裡只會修改3隻檔案如下圖所示:
![Imgur](https://i.imgur.com/stlVP1H.png)

/settings.py 設定檔內容太長，只列出要改的地方

``` python
#找到ALLOWED_HOSTS 把內容改成 ['*']
ALLOWED_HOSTS = ['*']

#檔案最後面加入
LINE_CHANNEL_SECRET ='這邊改成你申請的' 
LINE_CHANNEL_ACCESS_TOKEN ='這邊改成你申請的'

```

/urls.py

``` python
from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from myapp import views

urlpatterns = [
    url('^callback',views.callback),
    path('admin/', admin.site.urls),
]
```

/views.py

``` python
from django.conf import settings
from django.http import HttpResponse, HttpResponseBadRequest, HttpResponseForbidden
from django.views.decorators.csrf import csrf_exempt

from linebot import LineBotApi, WebhookParser
from linebot.exceptions import InvalidSignatureError, LineBotApiError
from linebot.models import MessageEvent, TextSendMessage
from module import func


line_bot_api = LineBotApi(settings.LINE_CHANNEL_ACCESS_TOKEN)
parser = WebhookParser(settings.LINE_CHANNEL_SECRET)



#傳什麼訊息回覆相同訊息的範例
@csrf_exempt
def callback(request):
    if request.method == 'POST':
        signature = request.META['HTTP_X_LINE_SIGNATURE']
        body = request.body.decode('utf-8')

        try:
            events = parser.parse(body, signature)
        except InvalidSignatureError:
            return HttpResponseForbidden()
        except LineBotApiError:
            return HttpResponseBadRequest()

        for event in events:
            if isinstance(event, MessageEvent):
                line_bot_api.reply_message(event.reply_token,TextSendMessage(text=event.message.text))

        return HttpResponse()
    else:
        return HttpResponseBadRequest()
```

以上的程式碼內容，只要複製貼上，基本上都可以正確地執行
這個是Line Bot最簡單的Echo範例，也是Line官網上面的範例(又可稱為公版程式)
![Imgur](https://i.imgur.com/2dbW80v.png)
(註:Line官網的python範例是以另一個框架Flask為例，這邊是用Django)

### 測試LineBot

``` python
python manage.py runserver
```

![Imgur](https://i.imgur.com/Gp45G9O.png)

打開 ngrok
![Imgur](https://i.imgur.com/rXJ4t7V.png)

把 ngrok的網址 填到 LineBot 的管理頁面上
**補充: "每次" 打開ngrok 得到的網址都不一樣，每次都要去LineBot的管理頁面更換Webhook URL**
![Imgur](https://i.imgur.com/MySmITy.png)

打開Line 傳給訊息給Bot
![Imgur](https://i.imgur.com/ComeoOo.png)

下載本篇的範例程式碼 (使用git clone)

```
git clone https://smilehsu@bitbucket.org/smilehsu/mylinebot.git
```

以上就是鐵人賽第11天的內容 :)

---  
參考資料與相關連結:

* sdsd
* sdsa
* dsadsa
* asdsad
* sadsad
* sadsad
* sadsad
* sadsad
* sadsad
* adsad
* asd
*

###### tags: `13th鐵人賽` `中年大叔` `萬年菜雞` `走不出新手村` `自學歷程`
