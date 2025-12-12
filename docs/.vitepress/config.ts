import { defineConfig } from "vitepress";
import type { Plugin } from "vite";
import llmstxt from "vitepress-plugin-llms";
import { teekConfig } from "./teekConfig";
// 本地 Teek 主题包引用（与 Teek 在线主题包引用 二选一）
import { version } from "../../packages/teek/version";

// Teek 在线主题包引用（需安装 Teek 在线版本）
// import { version } from "vitepress-theme-teek/es/version";

const description = [
  "欢迎来到 vitepress-theme-teek 使用文档",
  "Teek 是一个基于 VitePress 构建的主题，是在默认主题的基础上进行拓展，支持 VitePress 的所有功能、配置",
  "Teek 拥有三种典型的知识管理形态：结构化、碎片化、体系化，可以轻松构建一个结构化知识库，适用个人博客、文档站、知识库等场景",
].toString();

// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: teekConfig,
  title: "Vitepress Theme Teek",
  description: description,
  base: process.env.BASE ?? "/",
  cleanUrls: true,
  lastUpdated: true,
  lang: "zh-CN",
  rewrites: {
    "31.java课件/:rest*": "java/:rest*",
    "32.netty笔记/:rest*": "netty/:rest*",
    "33.JUC笔记/:rest*": "juc/:rest*",
    "34.收藏的博客/:rest*": "blogs/:rest*",
    "性能测试/:rest*": "性能测试/:rest*",
    "python文档/:rest*": "python文档/:rest*",
    "vue3/:rest*": "vue3/:rest*",
  },
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/teek-logo-mini.svg" }],
    ["link", { rel: "icon", type: "image/png", href: "/teek-logo-mini.png" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "zh-CN" }],
    ["meta", { property: "og:title", content: "Teek | Vitepress Theme Teek" }],
    ["meta", { property: "og:site_name", content: "VitePress Theme Teek" }],
    ["meta", { property: "og:image", content: "https://vp.teek.top/teek-logo-large.png" }],
    ["meta", { property: "og:url", content: "https://vp.teek.top" }],
    ["meta", { property: "og:description", description }],
    ["meta", { name: "description", description }],
    ["meta", { name: "author", content: "Teeker" }],
    // 禁止浏览器缩放
    // [
    //   "meta",
    //   {
    //     name: "viewport",
    //     content: "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
    //   },
    // ],
    ["meta", { name: "keywords", description }],
    ["meta", { name: "baidu-site-verification", content: "codeva-GdK2q9MO1i" }], // 百度收录
    ["meta", { name: "msvalidate.01", content: "48CABE70F538B8D117567176ABF325AF" }], // Bing 收录验证
    ["script", { charset: "UTF-8", id: "LA_COLLECT", src: "//sdk.51.la/js-sdk-pro.min.js" }], // 51.la
    [
      "script",
      {},
      `typeof LA !== 'undefined' && LA.init({ id: "3LqfP8Icg0GeEvtn", ck: "3LqfP8Icg0GeEvtn", hashMode: true })`,
    ], // 51.la
  ],
  markdown: {
    // 开启行号
    lineNumbers: true,
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true,
    },
    // 更改容器默认值标题
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
  sitemap: {
    hostname: "https://vp.teek.top",
    transformItems: items => {
      const permalinkItemBak: typeof items = [];
      // 使用永久链接生成 sitemap
      const permalinks = (globalThis as any).VITEPRESS_CONFIG.site.themeConfig.permalinks;
      items.forEach(item => {
        const permalink = permalinks?.map[item.url];
        if (permalink) permalinkItemBak.push({ url: permalink, lastmod: item.lastmod });
      });
      return [...items, ...permalinkItemBak];
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/teek-logo-mini.svg",
    darkModeSwitchLabel: "主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    lastUpdatedText: "上次更新时间",
    outline: {
      level: [2, 4],
      label: "本页导航",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "Java课件", link: "/java", activeMatch: "/java/" },
      { text: "Netty笔记", link: "/netty", activeMatch: "/netty/" },
      { text: "JUC笔记", link: "/juc", activeMatch: "/juc/" },
      { text: "收藏的博客", link: "/blogs", activeMatch: "/blogs/" },
      { text: "性能测试", link: "/性能测试", activeMatch: "/性能测试/" },
      { text: "Python文档", link: "/python文档", activeMatch: "/python文档/" },
      { text: "Vue3", link: "/vue3", activeMatch: "/vue3/" },
      {
        text: "功能页",
        items: [
          { text: "归档页", link: "/archives" },
          { text: "清单页", link: "/articleOverview" },
          { text: "登录页", link: "/login" },
          { text: "风险链接提示页", link: "/risk-link?target=https://vp.teek.top" },
          { text: "分类页", link: "/categories" },
          { text: "标签页", link: "/tags" },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/Kele-Bingtang/vitepress-theme-teek" }],
    search: {
      provider: "algolia",
      options: {
        appId: "2LFTZ9LKO9",
        apiKey: "017332fa7dc0bbe5e1637b215f92a5d1",
        indexName: "vitepress_theme_teek",
      },
    },
    editLink: {
      text: "在 GitHub 上编辑此页",
      pattern: "https://github.com/Kele-Bingtang/vitepress-theme-teek/edit/master/docs/:path",
    },
  },
  vite: {
    plugins: [
      llmstxt() as any,
    ],
  },
  // transformHtml: (code, id, context) => {
  //   if (context.page !== "404.md") return code;
  //   return code.replace("404 | ", "");
  // },
});
