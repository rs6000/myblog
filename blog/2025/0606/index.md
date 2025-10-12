---
slug: Setting-up-a-React-Native-development-environment
title: 建立React Native 開發環境
authors: [slorber, yangshun]
tags: [facebook, hello, docusaurus]
date: 2025-06-06T10:00
---

### 前言:
#### 發布日期: 2022 年 1 月 6 日下午 1:10

### 前言:

#### 2022第一篇

這是一篇建立React Native 開發環境的筆記 (在Windows 10 底下 ) 題外話:不知為何，我買的線上課程都是用Mac環境...摸了幾天後才曉得 but 沒錢買 MacBook Pro M1 啦...

<!-- truncate -->

### 開發環境的需求如下:

* Git版本控制
* node.js
* EXPO
* VS Code
* Android 模擬器

下面列出的軟體，只有提供連結與相關設定，不會提供安裝畫面...如果不會下載&安裝，可以使用Google查詢 = ="

### [Git](https://git-scm.com/download/win)

Git是我建置開發環境中，第一個要安裝的軟體，安裝好之後 打開命令提示字元...我是比較習慣叫它DOS視窗或CMD 輸入要使用的名字與email即可，此後所有的git操作都在VS Code裡面執行。

```script
git config --global user.name "你的名字(請用英文)"
git config --global user.email "你的email"
```

真的有安裝障礙的話，請服用下面的連結: (當初我就是看這兩個)

1. djangogirlstaipei 安裝開發環境
2. [連猴子都能懂的Git入門指南](https://backlog.com/git-tutorial/tw/)

### [Node.js](https://nodejs.org/en/)

```js
#node.js 安裝 react-native & expo
#開啟 cmd 或  PowerShell
npm  install -g expo-cli

#結束 ...安裝expo會順便先安裝 react的相關套件
```

### [VS Code](https://code.visualstudio.com/)

VS Code裝好就，下面是推薦安裝的外掛(Extensions) 直接把外掛的名稱在VS Code裡面的 Extensions Marketplace裡面搜尋即可

```js
#VS Code 安裝的套件有
0.Git History
0.GitLens
1.ES7 React/Redux/GraphQL/React-Native snippets
2.React Native Tools
#上面兩個可以選一個安裝，我是兩個同時裝
3.Emmet JSS
4.Auto Close Tag
5.Auto Rename Tag
6.AutoFileName
7.Code Spell Checker
8.Color Highliht
9.indent-rainbow
10.Rainbow Brackets

#以上的套件只要在 VS Code裡面的"延伸模組"裡搜尋即可下載安裝。
```

### Android 模擬器

最後是Android模擬器的安裝，這邊就只提在使用EXPO的情況下 安裝第三方模擬器(非Android Studio)

首先可以選BlueStacks 或是 NOX夜神 (當然還有其他選項，但我是選這兩個) 模擬器裝好後，就開始google商店安裝EXPO Go這個APP(如上圖)

每次專案要進行測試之前，要先打開模擬器再打開EXPO Go 在VS Code 的終端機底下指令 expo start 就可以看到APP的畫面在模擬器裡面

另外如果不是用EXPO 而是用一般的react-native cli建立的專案 不想裝超肥的Android Studio 而也要用第三方模擬器的話 也是可以的，礙於篇幅下次有空再寫 :)

***

### Reference:

* [30天用React native製作app!!](https://ithelp.ithome.com.tw/articles/10235065)
* [\[教學\] 使用 Expo 建立與開發 React Native 專案](https://bit.ly/3mYSZ3G)
* [React Native使用手冊](https://jim-5.gitbook.io/rea-native/)
* How To Run React Native App In NOX Emulator
* [解決夜神無法連線的問題](https://blog.csdn.net/DaisyCold/article/details/111477842)


