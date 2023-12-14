# xx文档项目

## 编写指南

通过编写 md 文件，自动生成文档页面。
如果要本地预览和打包，需要安装 nodejs。 如果只修改文字可不安装。

## 目录规则

`.vitepress/config.js` 里面通过配置

```js
const side = getSideBar('docs', {
  ignoreDirectory: ['NavBar'], //忽略的目录，一般是不出现在侧边栏的文件夹。
  ignoreFiles: ['index'], // 忽略的文件，一般是不出现在侧边栏的文件。
});
```

## 文件命名

侧边栏会根据目录自动生成。
默认根据字符排序，如果需要手动排序，需要文件名添加`01.` `02.` `11.`等序号。
建议带多个词的文件名，使用-\_字符隔开。文件名可以使用中文。文件名会根据写的内容显示在侧边栏。

```shell

docs
├── Introduction
│   ├── 01.What_is_mPaaS.md
│   └── 02.Quick_Start.md
├── NavBar
│   └── help.md
├── System_Use_Guide
│   └── 构建发布.md
└── index.md
```

## 编写

正常的 markdown 编写即可。注意图片文件，请使用相对路径，不要使用 base64，导致单个文件过长。
更多编写特性参考。 [https://vitepress.vuejs.org/guide/markdown](https://vitepress.vuejs.org/guide/markdown)

## 本地预览

```shell
#需要nodejs

npm i # 安装依赖

npm run dev
# or
npm run preview
```
