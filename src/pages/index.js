import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

export default function Home() {
    return (
        <Layout>
            {/* 整體背景與 Hero 區 */}
            <div className="tailwind bg-gradient-to-br from-blue-500 to-purple-600 text-white min-h-screen flex flex-col">
                <header className="text-center mt-20">
                    <h1 className="text-5xl font-bold mb-4 tracking-tight text-green-500">
                        Welcome to My Docusaurus Site
                    </h1>
                    <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                        使用 Tailwind CSS
                        打造的現代化首頁設計，簡潔、美觀且快速。
                    </p>
                    <div className="mt-8">
                        <Link
                            to="/docs/intro"
                            className="px-8 py-3 bg-white text-purple-700 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
                        >
                            開始探索
                        </Link>
                    </div>
                </header>

                {/* 卡片區塊 */}
                <section className="mt-24 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                        <div
                            key={index}
                            className={`bg-gradient-to-br ${card.color} p-8 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300`}
                        >
                            <div className="text-5xl mb-4">{card.icon}</div>
                            <h3 className="text-2xl font-semibold mb-3">
                                {card.title}
                            </h3>
                            <p className="text-gray-100">{card.desc}</p>
                        </div>
                    ))}
                </section>

                {/* CTA 區塊 */}
                <section className="mt-24 mb-16 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        🚀 開始打造屬於你的技術部落格
                    </h2>
                    <p className="text-blue-100 mb-6">
                        使用 Docusaurus + Tailwind 快速建立美觀、可擴充的網站。
                    </p>
                    <Link
                        to="/blog"
                        className="px-8 py-3 bg-purple-800 hover:bg-purple-700 rounded-lg shadow font-semibold transition"
                    >
                        前往部落格
                    </Link>
                </section>

                {/* Footer */}
                <footer className="mt-auto py-6 text-center border-t border-white/10 text-sm text-blue-200">
                    © {new Date().getFullYear()} My Docusaurus Site. All rights
                    reserved. Made with ❤️ ChatGPT and Tailwind CSS.
                </footer>
            </div>
        </Layout>
    );
}
