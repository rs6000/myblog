import React from "react";
import Link from "@docusaurus/Link";
import styles from "./LatestPosts.module.css";
// 這裡直接匯入了步驟 1 腳本生成的資料
import latestBlogPostList from "./latest-blog-posts.json";

function PostItem({ title, permalink, formattedDate }) {
    return (
        <li className={styles.postItem}>
            <span className={styles.postDate}>{formattedDate}</span>
            <Link to={permalink} className={styles.postLink}>
                {title}
            </Link>
        </li>
    );
}

export default function LatestPosts() {
    if (!latestBlogPostList || latestBlogPostList.length === 0) {
        return null; // 如果沒有文章，則不顯示
    }

    return (
        <section className={styles.latestPostsSection}>
            <div className="container">
                <h2 className={styles.sectionTitle}>最新部落格文章</h2>
                <ul className={styles.postList}>
                    {latestBlogPostList.map((post, idx) => (
                        <PostItem key={idx} {...post} />
                    ))}
                </ul>
                <div style={{ marginTop: "30px" }}>
                    <Link
                        to="/blog"
                        className="button button--primary button--lg"
                    >
                        查看所有文章
                    </Link>
                </div>
            </div>
        </section>
    );
}
