---
sidebar_position: 15
---

# 文章標題 DAY 15

##### 初稿時間 2021-09-08

### 前言

今天是鐵人賽的第十五天，終於要把前兩天的爬蟲程式整合到LineBot了
![Imgur](https://i.imgur.com/Dn40AIw.jpg)

**再次說明:這裡不是手把手程式教學，所以不會有程式解說**

這次的範例，可以直接延續第11天的範例接著做下去
只會動到兩隻檔案，要注意python的虛擬環境裡是否有安裝 yfinance 這個套件

### 準備好的話就開始動工吧 (複製貼上)
>
>編輯的檔案 myapp/view.py

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

#
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

        #這次修改的程式碼 開始
        for event in events:
            if isinstance(event, MessageEvent):
                #mtext = 使用者輸入的字串
                mtext = event.message.text
                if mtext == '@help':
                    func.sendUse(event)
                else:
                    func.sendScrachStock(event, mtext)
        #這次修改的程式碼 結束

        return HttpResponse()
    else:
        return HttpResponseBadRequest()
```

> 編輯的檔案 module/func.py

``` python
from django.conf import settings
from linebot import LineBotApi
from linebot.models import TextSendMessage, ImageSendMessage
import requests
import pandas as pd
import os,io
import datetime
import time
import sqlite3
import glob
import matplotlib.pyplot as plt
import numpy as np
#抓股價的套件
import yfinance as yf

line_bot_api = LineBotApi(settings.LINE_CHANNEL_ACCESS_TOKEN)

def sendUse(event):
    try:
        text1='''這是提供台股與美股數據的機器人'''

        message=TextSendMessage(
            text=text1
        )
        line_bot_api.reply_message(event.reply_token, message)
    except:
        line_bot_api.reply_message(event.reply_token,TextSendMessage(text='發生錯誤！'))


def sendScrachStock(event,mtext):
    try:
        
        #新版
        #股票代號
        stock_no= mtext.upper()
        #起始日期
        start_date='2021-01-01'
        #下載資料
        df=yf.download(stock_no,start=start_date)
        #最新5筆資料
        result=df.tail()
     
        text1='查詢 {0} 股票資料 \n {1}'.format(mtext.upper(),result)
        message = [
            TextSendMessage(  
                text = text1
            )
        ]
        line_bot_api.reply_message(event.reply_token, message)
    except Exception as e:
        line_bot_api.reply_message(event.reply_token,TextSendMessage(text='發生錯誤！ \n {0}'.format(e)))
```

### 成果圖
>
>輸入 @help
![Imgur](https://i.imgur.com/GugMeSc.png)
查台股
![Imgur](https://i.imgur.com/hJ8RoxN.png)
查美股
![Imgur](https://i.imgur.com/J94a6qe.png)

下載本篇的範例程式碼 (使用git clone)

```
git clone https://smilehsu@bitbucket.org/smilehsu/mylinebotv2.git
```

以上就是鐵人賽第15天的內容 :)  

---

###### tags: `13th鐵人賽` `中年大叔` `萬年菜雞` `走不出新手村` `自學歷程`
