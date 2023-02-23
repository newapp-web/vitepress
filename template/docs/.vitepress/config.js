import { sideBar } from 'vitepress-plugin-sidebar';

const side = sideBar('docs', {
  ignoreDirectory: ['NavBar', 'index'],
  ignoreFiles: ['index'],
  collapsed: false,
  collapsible: true,
});
export default {
  title: '移动平台手册',
  description:
    '（Mobile PaaS，简称 mPaaS），以赋能研发效能和产品运营场景为核心目标，为业务提供一站式应用服务管理解决方案和基础运营解决方案。',
  // srcDir: './docs',
  outDir: '../dist',
  cacheDir: '../.cache',
  themeConfig: {
    logo: {
      light: 'https://portal-file.ushareit.org/f420fab37a4346f5b8a7a7a084f0bfbb',
      dark: '',
    },
    nav: [
      // { text: 'Guide', link: '/guide' },
      {
        text: '帮助中心',
        items: [
          { text: '平台使用问题', link: '/NavBar/help' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' },
        ],
      },
    ],
    // algolia: {
    //   appId: 'MX4SWKR8T0',
    //   apiKey: '87f4aeb564a2a98fed7b6e0f1d9bb93b',
    //   indexName: 'prod'
    // },
    sidebar: side,
    footer: {
      copyright: 'Copyright © 2021-present SHAREit group',
    },
    lastUpdated: true,
    markdown: {
      headers: {
        level: 5,
      },
    },
    outline: [1, 4],
    outlineTitle: '文档目录',
    editLink: {
      pattern: 'https://gitlab.ushareit.me/web/gaia-mpaas/gaia-docs/edit/main/docs/:path',
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
  },
};
