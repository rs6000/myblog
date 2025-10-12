const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

// blog 文章資料夾
const BLOG_DIR = path.join(__dirname, "../blog");

// JSON 輸出路徑
const OUTPUT_FILE = path.join(__dirname, "../src/data/allPosts.json");

// 讀取 blog 目錄
const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"));

const posts = files.map((file) => {
    const content = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
    const { data } = matter(content);

    return {
        title: data.title,
        description: data.description || "",
        date: data.date,
        permalink: `/blog/${file.replace(/\.mdx?$/, "")}`,
        image: data.image || "",
    };
});

// 依日期排序，最新在前
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

// 寫入 JSON
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2));
console.log(`✅ Generated ${posts.length} posts at ${OUTPUT_FILE}`);
