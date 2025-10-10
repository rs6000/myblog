---
sidebar_position: 4
---

# 文章標題 DAY 4

### 13行 不能用文字表情 大於小於皺眉

##### 初稿時間 2021-08-17

### 前言

今天是鐵人賽的第四天，總算要來建置開發環境了!
因為大叔我只有Windows筆電，所以開發環境就是建置在Windows 10底下...
不會有Mac的系統建置...我也想要一台MacBook Pro 阿

### 開發環境的需求如下

* Git版本控制
* Python
* PHP/Laravel
* Vue
* 程式碼編輯器
* XAMPP (本地端測試伺服器)

下面列出的軟體，只有提供連結與相關設定，不會提供安裝畫面...如果不會下載&安裝，可以使用Google查詢 = ="

### [Git](https://git-scm.com/download/win)

Git是我建置開發環境中，第一個要安裝的軟體，安裝好之後
打開命令提示字元...我是比較習慣叫它DOS視窗或CMD
輸入要使用的名字與email即可，此後所有的git操作都在VS Code裡面執行。

``` script
git config --global user.name "你的名字(請用英文)"
git config --global user.email "你的email"
```

真的有安裝障礙的話，請服用下面的連結: (當初我就是看這兩個)

1. [djangogirlstaipei 安裝開發環境](https://djangogirlstaipei.herokuapp.com/tutorials/installation/?os=windows)
2. [連猴子都能懂的Git入門指南](https://backlog.com/git-tutorial/tw/)

### [Python](https://www.python.org/)

python這個是我這篇寫完後加上去的
因為不講點python...可能擠不出30篇來...XDD
可能後面的文章會講Django跟Line機器人吧

### [XAMPP](https://www.apachefriends.org/zh_tw/index.html)

XAMPP這套本機端架站軟體，歷史悠久...大叔從小用到大XD
在台灣只要跟網站建置相關的書都會提到這款軟體，這邊就不多作介紹充版面了...有興趣的人...請自行Google
XAPMM的版本在我是安裝 [7.3.29](https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/7.3.29/xampp-windows-x64-7.3.29-1-VC15-installer.exe/download) 7.3的數字是代表PHP的版本，不要安裝低於7.3 或8的版本。
**(PHP的版本是一個坑...)**

### [Node.js](https://nodejs.org/en/)

![Imgur](https://i.imgur.com/Ip7AcOr.png)
根據[wiki](https://zh.wikipedia.org/wiki/Node.js)的資料顯示Node.js誕生於2009年，那時大叔還在職，不過那時還真的沒聽過這玩意，到現在只要是跟網頁相關的都會安裝這個軟體，這邊我也不多做解釋了，只要裝起來就對了。

### PHP

PHP在安裝XAMPP時，就已經安裝好了，這邊是要安裝PHP的套件管理工具[Composer](https://getcomposer.org/download/)
![Composer](https://getcomposer.org/img/logo-composer-transparent.png)

##### Composer裝好後，在c:/xampp/htdocs/ 開啟DOS視窗

```
C:\xampp\htdocs>

查看目前Composer版本
composer -V

更新Composer版本
composer update

用Composer 安裝Laravel套件
composer global require laravel/installer

用Composer 建立Laravel專案(指定使用Laravel的版本: 5.8)
composer create-project laravel/laravel 專案名稱 "5.8.*" --prefer-dist

另一種建立Laravel專案的方法:(不指定Laravel版本)
laravel new 專案名稱
```

### [VS Code](https://code.visualstudio.com/)

![Imgur](https://i.imgur.com/dhzDJxv.png)
VS Code裝好就，下面是推薦安裝的外掛(Extensions)
直接把外掛的名稱在VS Code裡面的 Extensions Marketplace裡面搜尋即可
![Imgur](https://i.imgur.com/FBcG2uH.png)

1. [Chinese (Traditional) Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hant): VS Code 的中文 (繁體) 語言套件
2. [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)
3. [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
4. [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
5. [PHP Intelephense](https://marketplace.visualstudio.com/items?itemName=bmewburn.vscode-intelephense-client)
6. [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
7. [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)
8. [AutoFileName](https://marketplace.visualstudio.com/items?itemName=JerryHong.autofilename)
9. [CodeSnap](https://marketplace.visualstudio.com/items?itemName=adpyke.codesnap)
10. [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)
11. [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
12. [Fake Image Snippet Collection](https://marketplace.visualstudio.com/items?itemName=yoyoys.fake-img-snippet-collection)

因為最近筆電有重灌過，以上是我目前重灌後的筆電安裝的VS Code外掛
比重灌之前少了三分之一，如Python跟Vue之類的外掛，因為重灌後，還沒空寫Python或Vue所以就還沒裝。
至於要裝多少個外掛，全看個人需求，網路上很多人分享他們的外掛清單，下面就附上幾個我看過的分享清單:

* [小克的 Visual Studio Code 必裝擴充套件（Extensions）](https://blog.goodjack.tw/2018/03/visual-studio-code-extensions.html)
* [12 個前端愛用的 VSCode 擴充套件 - 卡斯柏's Blog](https://wcc723.github.io/development/2020/12/13/vscode-extension/)
* [VS Code 推薦套件(外掛)分享  - Ruyut 鹿遊](https://www.ruyut.com/2021/04/vs-code.html)

#### 還來不及寫的 (有人敲碗再做)

1. 安裝 Fira Code字形
2. 滑鼠右鍵開啟DOS視窗

以上就是鐵人賽第四天的內容 :)

---

###### tags: `13th鐵人賽` `中年大叔` `萬年菜雞` `走不出新手村` `自學歷程`
