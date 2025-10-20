// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "My Site",
    tagline: "Dinosaurs are cool",
    favicon: "img/favicon.ico",

    //新增的部分
    plugins: ["./src/plugins/tailwind-config.js"],

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    // 新增修改的部分
    url: "https://rs6000.github.io", // 你的 GitHub Pages 網址
    baseUrl: "/myblog/", // repo 名稱，前後都要加斜線

    organizationName: "rs6000", // GitHub 帳號
    projectName: "myblog", // repo 名稱
    deploymentBranch: "gh-pages",
    trailingSlash: false, // 建議加上

    onBrokenLinks: "throw",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                // docs: {
                //     sidebarPath: "./sidebars.js",
                //     // Please change this to your repo.
                //     // Remove this to remove the "edit this page" links.
                //     editUrl:
                //         "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                // },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ["rss", "atom"],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                    // Useful options to enforce blogging best practices
                    onInlineTags: "warn",
                    onInlineAuthors: "warn",
                    onUntruncatedBlogPosts: "warn",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: "img/docusaurus-social-card.jpg",
            colorMode: {
                respectPrefersColorScheme: true,
            },
            navbar: {
                title: "My Site",
                logo: {
                    alt: "My Site Logo",
                    src: "img/logo.svg",
                },
                items: [
                    // {
                    //     type: "docSidebar",
                    //     sidebarId: "tutorialSidebar",
                    //     position: "left",
                    //     label: "Tutorial",
                    // },
                    { to: "/blog", label: "Blog", position: "left" },
                    {
                        href: "https://github.com/facebook/docusaurus",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            // footer: {
            //     style: "dark",
            //     links: [
            //         {
            //             title: "Docs",
            //             items: [
            //                 {
            //                     label: "Tutorial",
            //                     to: "/docs/intro",
            //                 },
            //             ],
            //         },
            //         {
            //             title: "Community",
            //             items: [
            //                 {
            //                     label: "Stack Overflow",
            //                     href: "https://stackoverflow.com/questions/tagged/docusaurus",
            //                 },
            //                 {
            //                     label: "Discord",
            //                     href: "https://discordapp.com/invite/docusaurus",
            //                 },
            //                 {
            //                     label: "X",
            //                     href: "https://x.com/docusaurus",
            //                 },
            //             ],
            //         },
            //         {
            //             title: "More",
            //             items: [
            //                 {
            //                     label: "Blog",
            //                     to: "/blog",
            //                 },
            //                 {
            //                     label: "GitHub",
            //                     href: "https://github.com/facebook/docusaurus",
            //                 },
            //             ],
            //         },
            //     ],
            //     copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
            // },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
