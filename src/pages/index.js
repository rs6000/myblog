import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
// 引入生成的資料
import latestBlogPostList from "../components/LatestPosts/latest-blog-posts.json";

// --- Placehold.co 圖片庫 ---
const placeholderImages = [
    "https://placehold.co/600x400/3b82f6/ffffff?text=Beach+View",
    "https://placehold.co/600x400/10b981/ffffff?text=Tropical+Paradise",
    "https://placehold.co/600x400/f97316/ffffff?text=Sunset+Relax",
    "https://placehold.co/600x400/8b5cf6/ffffff?text=Ocean+Vibes",
    "https://placehold.co/600x400/facc15/333333?text=Surfing+Time",
    "https://placehold.co/600x400/4f46e5/ffffff?text=Ocean+Activities",
    "https://placehold.co/600x400/ef4444/ffffff?text=Adventure+Blog",
];

// 獲取隨機圖片的函式
const getRandomImage = (index) => {
    return placeholderImages[index % placeholderImages.length];
};

// --- 部落格卡片元件 (樣式保持不變) ---

function BlogCard({
    title,
    permalink,
    formattedDate,
    description,
    image,
    index,
}) {
    const imageUrl = image || getRandomImage(index);
    const cardDescription =
        description ||
        `這是一篇關於 ${title} 的技術分享，發佈於 ${formattedDate}。`;

    return (
        // 區塊：標準區塊顯示、圓角、白色背景、陰影設定、滑鼠懸停動畫
        <div
            className="block rounded-xl bg-white shadow-2xl shadow-gray-400/30
                       hover:shadow-3xl hover:shadow-blue-500/50 hover:scale-[1.02]
                       transform transition duration-300 overflow-hidden flex flex-col"
        >
            {/* 圖片區塊 */}
            {/* 寬高設定、灰色背景、隱藏溢出 */}
            <Link
                to={permalink}
                className="w-full h-48 bg-gray-200 overflow-hidden"
            >
                {/* 圓角頂部、寬高充滿、圖片適應、懸停放大動畫 */}
                <img
                    className="rounded-t-xl w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    src={imageUrl}
                    alt={title}
                />
            </Link>

            {/* 內容區塊 */}
            {/* 內邊距、彈性佈局、文字顏色 */}
            <div className="p-6 flex flex-col flex-grow text-gray-800">
                {/* 標題 */}
                {/* 間距、文字大小、粗體 */}
                <h5 className="mb-2 text-xl font-bold leading-tight">
                    {/* 連結顏色和動畫 */}
                    <Link
                        to={permalink}
                        className="hover:text-blue-600 transition duration-150"
                    >
                        {title}
                    </Link>
                </h5>

                {/* 內容 */}
                {/* 間距、文字大小、文字顏色、彈性成長 */}
                <p className="mb-4 text-base text-gray-600 flex-grow">
                    {cardDescription}
                </p>

                {/* 日期資訊 */}
                {/* 文字顏色、文字大小、間距 */}
                <p className="text-gray-500 text-xs mb-4">{formattedDate}</p>

                {/* 按鈕 */}
                {/* 底部對齊、行內區塊、圓角、背景色、內邊距、文字大小、粗體、文字白色、陰影、動畫效果 */}
                <Link
                    to={permalink}
                    className="mt-auto inline-block rounded bg-purple-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-lg
                               transition duration-150 ease-in-out hover:bg-purple-700 hover:shadow-xl focus:bg-purple-700 focus:shadow-xl focus:outline-none focus:ring-0 active:bg-purple-800"
                    type="button"
                >
                    閱讀全文
                </Link>
            </div>
        </div>
    );
}

// --- 最新文章區塊 (3x3 網格 - 乳白色背景) ---

function LatestBlogCards() {
    const MAX_CARDS = 9; // 最多顯示 3x3 = 9 篇
    const postsToShow = latestBlogPostList.slice(0, MAX_CARDS);

    if (postsToShow.length === 0) {
        return null;
    }

    return (
        // 區塊背景設定：白色背景、垂直內邊距、水平內邊距、內部陰影
        <section className="bg-white py-24 px-6 shadow-inner shadow-gray-200">
            <div className="max-w-6xl mx-auto">
                {/* 標題設定：文字大小、粗體、置中、底部間距、文字顏色 */}
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    最新技術分享 ✍️
                </h2>

                {/* 網格佈局：1欄(預設)、2欄(md)、3欄(lg)、間距8 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postsToShow.map((post, index) => (
                        <BlogCard
                            key={post.permalink}
                            {...post}
                            index={index}
                        />
                    ))}
                </div>

                {/* 按鈕容器：頂部間距、置中 */}
                <div className="mt-12 text-center">
                    {/* 按鈕樣式：內邊距、背景色、圓角、陰影、粗體、動畫 */}
                    <Link
                        to="/blog"
                        className="px-8 py-3 bg-purple-800 hover:bg-purple-700 rounded-lg shadow font-semibold transition text-white"
                    >
                        查看所有文章
                    </Link>
                </div>
            </div>
        </section>
    );
}

// --- 您的主要 Home 元件 ---

export default function Home() {
    return (
        <Layout>
            {/* 頁面容器：深色漸層背景、文字白色、最小高度、彈性佈局 */}
            <div className="tailwind bg-gradient-to-br from-blue-500 to-purple-600 text-white min-h-screen flex flex-col">
                {/* 頁首區塊：置中、頂部間距 */}
                <header className="text-center mt-20">
                    {/* 標題：文字大小、粗體、間距、追蹤緊密、文字顏色 */}
                    <h1 className="text-5xl font-bold mb-4 tracking-tight text-green-500">
                        Welcome to My Docusaurus Site
                    </h1>
                    {/* 說明文字：文字大小、文字顏色、最大寬度、置中 */}
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                        使用 Tailwind CSS
                        打造的現代化首頁設計，簡潔、美觀且快速。
                    </p>
                    {/* 按鈕容器：頂部間距 */}
                    <div className="mt-8">
                        {/* 按鈕樣式：內邊距、白色背景、文字顏色、圓角、陰影、粗體、動畫 */}
                        <Link
                            to="/blog"
                            className="px-8 py-3 bg-white text-purple-700 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
                        >
                            開始探索
                        </Link>
                    </div>
                </header>

                {/* 卡片區塊 (特色卡片) */}
                {/* 上下外邊距、內邊距、網格佈局、間距、最大寬度、置中 */}
                <section className="mt-24 mb-24 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        {
                            title: "文件系統",
                            desc: "探索 Docusaurus 的強大文件功能與模組化設計。",
                            icon: "📘",
                            color: "from-indigo-600 to-indigo-800",
                        },
                        {
                            title: "部落格文章",
                            desc: "撰寫技術筆記與分享，內建 RSS 與 SEO 最佳化。",
                            icon: "✍️",
                            color: "from-purple-600 to-purple-800",
                        },
                        {
                            title: "自訂樣式",
                            desc: "結合 Tailwind CSS，創造專屬於你的風格體驗。",
                            icon: "🎨",
                            color: "from-blue-600 to-blue-800",
                        },
                    ].map((card, index) => (
                        // 特色卡片樣式：漸層背景、內邊距、圓角、陰影、懸停動畫
                        <div
                            key={index}
                            className={`bg-gradient-to-br ${card.color} p-8 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300`}
                        >
                            {/* Icon 樣式：文字大小、間距 */}
                            <div className="text-5xl mb-4">{card.icon}</div>
                            {/* 標題：文字大小、粗體、間距 */}
                            <h3 className="text-2xl font-semibold mb-3">
                                {card.title}
                            </h3>
                            {/* 內容：文字顏色 */}
                            <p className="text-gray-100">{card.desc}</p>
                        </div>
                    ))}
                </section>

                {/* 📌 最新部落格卡片區塊 - 現在會緊接在上方間隔之後 */}
                <LatestBlogCards />

                {/* CTA 區塊 */}
                {/* 頂部外邊距、底部外邊距、置中、垂直內邊距 */}
                <section className="mt-24 mb-16 text-center py-16">
                    {/* 標題：文字大小、粗體、間距 */}
                    <h2 className="text-3xl font-bold mb-4">
                        🚀 開始打造屬於你的技術部落格
                    </h2>
                    {/* 說明文字：文字顏色、間距 */}
                    <p className="text-blue-100 mb-6">
                        使用 Docusaurus + Tailwind 快速建立美觀、可擴充的網站。
                    </p>
                    {/* 按鈕樣式：內邊距、背景色、圓角、陰影、粗體、動畫 */}
                    <Link
                        to="/blog"
                        className="px-8 py-3 bg-purple-800 hover:bg-purple-700 rounded-lg shadow font-semibold transition"
                    >
                        前往部落格
                    </Link>
                </section>

                {/* Footer */}
                {/* 底部對齊、垂直內邊距、置中、邊界線、文字大小、文字顏色 */}
                <footer className="mt-auto py-6 text-center border-t border-white/10 text-sm text-blue-200">
                    © {new Date().getFullYear()} My Docusaurus Site. All rights
                    reserved. Made with ❤️ Gemini and Tailwind CSS.
                </footer>
            </div>
        </Layout>
    );
}
