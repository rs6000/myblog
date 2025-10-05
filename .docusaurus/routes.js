import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/myblog/blog',
    component: ComponentCreator('/myblog/blog', '0a0'),
    exact: true
  },
  {
    path: '/myblog/blog/archive',
    component: ComponentCreator('/myblog/blog/archive', '0c1'),
    exact: true
  },
  {
    path: '/myblog/blog/authors',
    component: ComponentCreator('/myblog/blog/authors', '398'),
    exact: true
  },
  {
    path: '/myblog/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/myblog/blog/authors/all-sebastien-lorber-articles', 'a81'),
    exact: true
  },
  {
    path: '/myblog/blog/authors/yangshun',
    component: ComponentCreator('/myblog/blog/authors/yangshun', 'd12'),
    exact: true
  },
  {
    path: '/myblog/blog/first-blog-post',
    component: ComponentCreator('/myblog/blog/first-blog-post', 'df1'),
    exact: true
  },
  {
    path: '/myblog/blog/long-blog-post',
    component: ComponentCreator('/myblog/blog/long-blog-post', '36a'),
    exact: true
  },
  {
    path: '/myblog/blog/mdx-blog-post',
    component: ComponentCreator('/myblog/blog/mdx-blog-post', 'd1e'),
    exact: true
  },
  {
    path: '/myblog/blog/tags',
    component: ComponentCreator('/myblog/blog/tags', '68d'),
    exact: true
  },
  {
    path: '/myblog/blog/tags/docusaurus',
    component: ComponentCreator('/myblog/blog/tags/docusaurus', '8b5'),
    exact: true
  },
  {
    path: '/myblog/blog/tags/facebook',
    component: ComponentCreator('/myblog/blog/tags/facebook', 'ce7'),
    exact: true
  },
  {
    path: '/myblog/blog/tags/hello',
    component: ComponentCreator('/myblog/blog/tags/hello', '8a9'),
    exact: true
  },
  {
    path: '/myblog/blog/tags/hola',
    component: ComponentCreator('/myblog/blog/tags/hola', '1eb'),
    exact: true
  },
  {
    path: '/myblog/blog/welcome',
    component: ComponentCreator('/myblog/blog/welcome', 'b1a'),
    exact: true
  },
  {
    path: '/myblog/markdown-page',
    component: ComponentCreator('/myblog/markdown-page', '04e'),
    exact: true
  },
  {
    path: '/myblog/docs',
    component: ComponentCreator('/myblog/docs', '090'),
    routes: [
      {
        path: '/myblog/docs',
        component: ComponentCreator('/myblog/docs', '323'),
        routes: [
          {
            path: '/myblog/docs',
            component: ComponentCreator('/myblog/docs', '37f'),
            routes: [
              {
                path: '/myblog/docs/category/2021-ithome鐵人賽',
                component: ComponentCreator('/myblog/docs/category/2021-ithome鐵人賽', '223'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/category/我的博客',
                component: ComponentCreator('/myblog/docs/category/我的博客', '1d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/category/docusaurus-筆記',
                component: ComponentCreator('/myblog/docs/category/docusaurus-筆記', '8d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/category/linux-筆記',
                component: ComponentCreator('/myblog/docs/category/linux-筆記', '8a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/category/tutorial---basics',
                component: ComponentCreator('/myblog/docs/category/tutorial---basics', 'e79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/category/tutorial---extras',
                component: ComponentCreator('/myblog/docs/category/tutorial---extras', '30d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/Docusaurus/Deploy-your-site',
                component: ComponentCreator('/myblog/docs/Docusaurus/Deploy-your-site', '32f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/Docusaurus/docusaurus-qa',
                component: ComponentCreator('/myblog/docs/Docusaurus/docusaurus-qa', '44d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/Docusaurus/goodlink',
                component: ComponentCreator('/myblog/docs/Docusaurus/goodlink', 'de0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/intro',
                component: ComponentCreator('/myblog/docs/intro', 'b96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/iThome_2021/iThome_2021_Day01',
                component: ComponentCreator('/myblog/docs/iThome_2021/iThome_2021_Day01', 'c49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/iThome_2021/iThome_2021_Day02',
                component: ComponentCreator('/myblog/docs/iThome_2021/iThome_2021_Day02', 'd0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/iThome_2021/iThome_2021_Day03',
                component: ComponentCreator('/myblog/docs/iThome_2021/iThome_2021_Day03', '136'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/iThome_2021/iThome_2021_Day04',
                component: ComponentCreator('/myblog/docs/iThome_2021/iThome_2021_Day04', 'bad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/iThome_2021/iThome_2021_Day05',
                component: ComponentCreator('/myblog/docs/iThome_2021/iThome_2021_Day05', 'f94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/iThome_2021/iThome_2021_Day06',
                component: ComponentCreator('/myblog/docs/iThome_2021/iThome_2021_Day06', 'a4a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/iThome_2021/iThome_2021_Day07',
                component: ComponentCreator('/myblog/docs/iThome_2021/iThome_2021_Day07', 'ac6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/iThome_2021/iThome_2021_Day08',
                component: ComponentCreator('/myblog/docs/iThome_2021/iThome_2021_Day08', '670'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/iThome_2021/iThome_2021_Day09',
                component: ComponentCreator('/myblog/docs/iThome_2021/iThome_2021_Day09', 'd37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/iThome_2021/iThome_2021_Day10',
                component: ComponentCreator('/myblog/docs/iThome_2021/iThome_2021_Day10', '4f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/iThome_2021/iThome_2021_Day11',
                component: ComponentCreator('/myblog/docs/iThome_2021/iThome_2021_Day11', '698'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/iThome_2021/iThome_2021_Day12',
                component: ComponentCreator('/myblog/docs/iThome_2021/iThome_2021_Day12', 'a0f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/iThome_2021/iThome_2021_Day13',
                component: ComponentCreator('/myblog/docs/iThome_2021/iThome_2021_Day13', 'd6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/iThome_2021/iThome_2021_Day14',
                component: ComponentCreator('/myblog/docs/iThome_2021/iThome_2021_Day14', 'fb5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/iThome_2021/iThome_2021_Day15',
                component: ComponentCreator('/myblog/docs/iThome_2021/iThome_2021_Day15', '9e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/iThome_2021/iThome_2021_Day16',
                component: ComponentCreator('/myblog/docs/iThome_2021/iThome_2021_Day16', 'fd6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/iThome_2021/iThome_2021_Day17',
                component: ComponentCreator('/myblog/docs/iThome_2021/iThome_2021_Day17', '683'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/iThome_2021/iThome_2021_Day18',
                component: ComponentCreator('/myblog/docs/iThome_2021/iThome_2021_Day18', '221'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/iThome_2021/iThome_2021_Day19',
                component: ComponentCreator('/myblog/docs/iThome_2021/iThome_2021_Day19', 'e78'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/iThome_2021/iThome_2021_Day20',
                component: ComponentCreator('/myblog/docs/iThome_2021/iThome_2021_Day20', '8a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/iThome_2021/iThome_2021_Day21',
                component: ComponentCreator('/myblog/docs/iThome_2021/iThome_2021_Day21', '5d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/iThome_2021/iThome_2021_Day22',
                component: ComponentCreator('/myblog/docs/iThome_2021/iThome_2021_Day22', 'cbf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/iThome_2021/iThome_2021_Day23',
                component: ComponentCreator('/myblog/docs/iThome_2021/iThome_2021_Day23', 'c5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/iThome_2021/iThome_2021_Day24',
                component: ComponentCreator('/myblog/docs/iThome_2021/iThome_2021_Day24', 'f68'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/iThome_2021/iThome_2021_Day25',
                component: ComponentCreator('/myblog/docs/iThome_2021/iThome_2021_Day25', 'f52'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/iThome_2021/iThome_2021_Day26',
                component: ComponentCreator('/myblog/docs/iThome_2021/iThome_2021_Day26', 'e22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/iThome_2021/iThome_2021_Day27',
                component: ComponentCreator('/myblog/docs/iThome_2021/iThome_2021_Day27', '65c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/iThome_2021/iThome_2021_Day28',
                component: ComponentCreator('/myblog/docs/iThome_2021/iThome_2021_Day28', '078'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/iThome_2021/iThome_2021_Day29',
                component: ComponentCreator('/myblog/docs/iThome_2021/iThome_2021_Day29', '6ec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/iThome_2021/iThome_2021_Day30',
                component: ComponentCreator('/myblog/docs/iThome_2021/iThome_2021_Day30', 'e38'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/iThome_2021/iThome_2021_Day31',
                component: ComponentCreator('/myblog/docs/iThome_2021/iThome_2021_Day31', 'f84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/linux/linux_tips',
                component: ComponentCreator('/myblog/docs/linux/linux_tips', '8db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/mylab/translate-your-site',
                component: ComponentCreator('/myblog/docs/mylab/translate-your-site', 'd9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/myblog/docs/tutorial-basics/congratulations', 'a22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/myblog/docs/tutorial-basics/create-a-blog-post', '7b1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/myblog/docs/tutorial-basics/create-a-document', 'fa6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/myblog/docs/tutorial-basics/create-a-page', '05f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/myblog/docs/tutorial-basics/deploy-your-site', 'a71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/myblog/docs/tutorial-basics/markdown-features', 'edd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/myblog/docs/tutorial-extras/manage-docs-versions', '519'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/myblog/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/myblog/docs/tutorial-extras/translate-your-site', 'c59'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/myblog/',
    component: ComponentCreator('/myblog/', '7e3'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
