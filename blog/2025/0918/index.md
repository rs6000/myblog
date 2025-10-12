---
slug: Create-TaildwindCss-Project-With-Vite
title: 使用 Vite 建立 React 專案並使用 TailwindCSS
authors: [slorber, yangshun]
tags: [facebook, hello, docusaurus]
date: 2025-09-18T10:00
---

最近想學一下 chrome extension(外掛)的開發  
雖然我知道chrome extension 基本上是由 JS+CSS組成  
但我實在有點受不了原生的JS落落長的語法 
想用JS的前端框架 React來開發chrome外掛  
所以就有了這篇，以下是使用vite來開react專案並把tailwindCSS加進去  

<!-- truncate -->

```
npm create vite@latest my-example -- --template react

cd my-example

npm install

npm install tailwindcss @tailwindcss/vite

#修改 vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})

#清空 src\App.css

#修改 src\index.css

@import "tailwindcss";

#修改 src\App.jsx

function App() {

    return (
        <>
            <h1 className="text-3xl font-bold underline">Hello World</h1>
        </>
    )
}

export default App

#執行

npm run dev

```
### 執行結果
![demo](2025-09-18.png)  
如果網頁執行結果如上圖，那就表示TailwindCSS的設定成功


---

### Reference:
- [使用Vite建立 React專案](https://vite.dev/guide/)
- [在Vite專案裡使用Tailwindcss](https://tailwindcss.com/docs/installation/using-vite)
- [React js with WordPress APIs Headless SPA 5 Hours Complete Course](https://youtu.be/rG538v2y6DM?si=LmAbBmuXoMuZcyRQ)