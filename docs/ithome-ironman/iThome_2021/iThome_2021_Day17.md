---
sidebar_position: 17
---

# 文章標題 DAY 17

##### 初稿時間 2021-09-10  

### 前言

今天是鐵人賽的第十七天，要來做一個臨時的side project : 批次在圖檔上加浮水印

### 動機與需求

大叔在寫這個鐵人賽的文章時，會把要demo的圖片一次傳到Imgur上面，因為圖檔大多是背景是黑色的終端機的操作畫面，圖片整批丟上去，無法從檔案的縮圖上看出圖片的順序
![Imgur](https://i.imgur.com/YVr7M8A.png)
我上傳圖片前，圖片的檔名就已經先預先處理好，數字就是在文章版面順序
![Imgur](https://i.imgur.com/e99vd5C.png)
只不過，圖片上傳到Imgur後，順序並不會照我命名的檔名排序(原本的檔名也被改掉)

所以我的需求是在圖片上面加上一個以數字當浮水印的程式，並且可以批次處裡多個檔案。
加上去的浮水印，只要能夠在Imgur的縮圖列表中，可以看到即可。

### 動工之前請先Google

![Imgur](https://i.imgur.com/pnIdWvp.png)
圖片要加浮水印，有很多現成的軟體可以實現，例如 ffmpeg 下指令就可以完成
但是大叔要練習自己寫一個，但又不想花太多時間先Google 這程式有沒有人寫過
通常有都會範例參考啦! 還可以選喜歡的寫法，例如我看到有class的寫法就會跳過...
太複雜的也會跳過 XDD
![Imgur](https://i.imgur.com/qfea9hj.jpg)

### 開始動工

``` python
from PIL import Image,ImageDraw,ImageFont
import os
#圖檔的資料夾 inpit output 這兩個資料夾要跟 這隻程式放同一個路徑下
#資料夾名字 可以自己改
start_folder="input"
#放置處理好的圖檔
traget_folder="output"

for i in os.listdir(start_folder):
    #print(i.split('.')[0])
    #檔名
    filename=i
    #浮水印文字 1.png  1 就式浮水印的文字內容
    text_msg=i.split('.')[0]
    #圖片檔
    im=Image.open(start_folder+"/"+i)

    #圖片尺寸
    im_w,im_h=im.size

    #字形與大小
    font=ImageFont.truetype("‪C:\Windows\Fonts\FiraCode-Retina.ttf",80)
    fn_w,fn_h=dw.textsize(text_msg,font=font)
    # 浮水印 貼在 圖片上面
    dw=ImageDraw.Draw(im)
    
    #設定浮水印 x軸的位置 (置中)
    x=im_w/2-fn_w/2
    #浮水印的 x y軸位置、文字內容、字體顏色
    dw.text((x,0),text_msg,font=font,fill=(255,0,0))
    #im.show()
    #存檔 (輸出)
    im.save(traget_folder+ '/' + filename)
    im.close()
```

完成圖:
![Imgur](https://i.imgur.com/o0Tbg8S.png)
附上範例程式的[bitbucket連結](https://bit.ly/3BZoDTZ)

### 可以更完善的部分

這隻程式沒幾行就寫完了，其實是可以繼續延伸下去，把程式的功能寫得更完善
以下是我目前想到可以增加的地方

* 完整的介面
如果是單機使用的話可以用GUI介面或者寫成網頁端的應用
我會比較傾向用網頁的方式解決，因為Python的GUI..很搞肛
用前端網頁的話，多檔案的拖曳上傳有現成的JQuery的函式庫可用

* 自動傳到Imgur
承上，有一個介面的話，希望可以直接在上面更改檔案的名字跟加浮水印
一鍵上傳到自己的Imgur帳號裡指定的相本，並把圖片連結照順序回傳給我
一整個懶人的極致...以上都只是說說而已...如果有人敲碗的話再考慮...

以上就是鐵人賽第17天的內容 :)  

---
參考資料

* [Python自動化為大量圖片加上中文字浮水印 - SKYNET資訊生活](http://hophd.com/python-chinese-watermark/)
* [Python 給圖片加文字，加圖片水印](https://www.itread01.com/content/1548006329.html)
* [使用Python編寫批量添加圖片水印程序：二、桌面客戶端](https://kknews.cc/code/emypx3q.html)
(要寫GUI可以參考這篇 But是Qt不是Tk)

###### tags: `13th鐵人賽` `中年大叔` `萬年菜雞` `走不出新手村` `自學歷程`
