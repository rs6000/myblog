---
sidebar_position: 99
---

# Docusaurus 問題集

在轉移文章到 docusaurus 過程中，發現內文如果特殊符號
在某些情況下會在 build 的過程中產生錯誤訊息

已知

- markdown 語法內用特殊符號當作顏文字，大於小於 (特別是出現小於符號)
- markdown超連結語法結束後在右括號後加全形的逗點符號

---
參考資料:

- [Docusaurus v3 不能直接寫 小於, 大括號](https://medium.com/@franks543/docusaurus-v3-%E4%B8%8D%E8%83%BD%E7%9B%B4%E6%8E%A5%E5%AF%AB-f9525aff6748)
- [Support for symbolic linked .md files](https://github.com/facebook/docusaurus/issues/11080)
