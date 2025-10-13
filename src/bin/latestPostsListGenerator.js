const path = require("path");
const fs = require("fs");
const moment = require("moment");

const blogPath = "./.docusaurus/docusaurus-plugin-content-blog/default";
const latestBlogPostListPath =
    "./src/components/LatestPosts/latest-blog-posts.json";

// 📌 修正點 1: 定義一個特殊值來代表所有文章
const ALL_POSTS_SENTINEL = -1;
// 📌 修正點 2: 設定您想要的限制。如果您想獲取所有文章，請將此值設定為 -1。
const MAX_POSTS = ALL_POSTS_SENTINEL; // 範例: 設置為 -1，表示獲取所有文章

console.log("🚀 開始生成最新部落格文章列表 (使用 fs 模組)...");

function generateLatestPostList(folderPath, outputPath) {
    let allPosts = {};

    const absoluteBlogPath = path.resolve(folderPath);

    try {
        const files = fs.readdirSync(absoluteBlogPath);
        const blogFiles = files.filter(
            (file) => file.startsWith("site-blog-") && file.endsWith(".json")
        );

        if (blogFiles.length === 0) {
            console.warn(
                `⚠️ 警告：在資料夾 ${absoluteBlogPath} 中未找到任何 JSON 檔案。已生成空列表。`
            );
            fs.writeFileSync(outputPath, JSON.stringify([], null, 2));
            return;
        }

        // ... (文章讀取和過濾邏輯保持不變，與上一個回答中的版本一致)

        blogFiles.forEach((fileName) => {
            const filePath = path.join(absoluteBlogPath, fileName);

            try {
                const rawdata = fs.readFileSync(filePath, "utf8");
                const item = JSON.parse(rawdata);

                if (item && item.permalink && item.title) {
                    const postDate = item.date || item.lastUpdatedAt;

                    if (!postDate) return;
                    if (item.draft === true) return;

                    allPosts[item.permalink] = {
                        title: item.title,
                        permalink: item.permalink,
                        date: postDate,
                        formattedDate: moment(postDate).format("YYYY/MM/DD"),
                    };
                }
            } catch (e) {
                console.error(`❌ 解析文件 ${fileName} 時發生錯誤:`, e.message);
            }
        });

        // 3. 排序並寫入檔案
        const sortedPosts = Object.values(allPosts).sort(
            (a, b) => new Date(b.date) - new Date(a.date)
        );

        // 📌 核心修正：根據 MAX_POSTS 決定是否進行切割
        const finalPosts =
            MAX_POSTS === ALL_POSTS_SENTINEL
                ? sortedPosts
                : sortedPosts.slice(0, MAX_POSTS);

        fs.writeFileSync(outputPath, JSON.stringify(finalPosts, null, 2));

        console.log(
            `✅ 成功生成 ${finalPosts.length} 篇最新文章到 ${outputPath}`
        );
    } catch (error) {
        console.error(`致命錯誤：無法讀取資料夾 ${absoluteBlogPath}`);
        console.error("錯誤詳情:", error.message);
        fs.writeFileSync(outputPath, JSON.stringify([], null, 2));
    }
}

// 執行生成
generateLatestPostList(blogPath, latestBlogPostListPath);
