---
sidebar_position: 99
---

# Docusaurus 問題集

## 問題一
在轉移文章到 docusaurus 過程中，發現內文如果特殊符號  
在某些情況下會在 build 的過程中產生錯誤訊息

#### 已知  
- markdown 語法內用特殊符號當作顏文字，大於小於 (特別是出現小於符號)
- markdown超連結語法結束後在右括號後加全形的逗點符號

---

## 問題二
在 Docusaurus 編輯文件時，圖片要放哪個資料夾  
![docusaurus-image-folder](/img/docusaurus_image_folder.png)
```bat
使用 google 給的解答
![說明文字](/img/圖片.png)

會有一個小問題，無法預覽圖片
需要 執行 npm run start 後，在網頁上才能看到圖片

如果在 文件上寫上完整路徑，可以預覽圖片，但 npm run start 會報錯，不給過
```


---
參考資料:

- [google](https://www.google.com)
- [Docusaurus v3 不能直接寫 小於, 大括號](https://medium.com/@franks543/docusaurus-v3-%E4%B8%8D%E8%83%BD%E7%9B%B4%E6%8E%A5%E5%AF%AB-f9525aff6748)
- [Support for symbolic linked .md files](https://github.com/facebook/docusaurus/issues/11080)
