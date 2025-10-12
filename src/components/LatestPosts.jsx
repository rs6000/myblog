import React from "react";
import Link from "@docusaurus/Link";
import blogPosts from "@generated/blog-posts"; // ✅ 改用這個

export default function LatestBlogCards({ limit = 10 }) {
    // 取出最新的前 n 筆文章
    const latestPosts = blogPosts
        .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date))
        .slice(0, limit);

    return (
        <section className="mt-20 px-6 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
                📰 最新文章
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {latestPosts.map(({ metadata }) => (
                    <Link
                        key={metadata.permalink}
                        to={metadata.permalink}
                        className="block bg-white rounded-2xl shadow hover:shadow-lg transition p-6"
                    >
                        {metadata.frontMatter.image && (
                            <img
                                src={metadata.frontMatter.image}
                                alt={metadata.title}
                                className="rounded-lg mb-4 w-full h-48 object-cover"
                            />
                        )}
                        <h3 className="text-xl font-semibold mb-2 text-purple-700 hover:text-purple-900">
                            {metadata.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">
                            🗓️ {new Date(metadata.date).toLocaleDateString()}
                        </p>
                        <p className="text-gray-700 line-clamp-3">
                            {metadata.description || metadata.frontMatter.description}
                        </p>
                    </Link>
                ))}
            </div>
        </section>
    );
}
