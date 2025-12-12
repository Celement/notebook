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
      // 预处理 Markdown：转义 Java 泛型尖括号（保留合法 HTML），并在 Java 代码块内也安全转义
      ({
        name: "markdown-generics-escaper",
        enforce: "pre",
        transform(code, id) {
          if (!id.endsWith(".md")) return null;
          const idUnix = id.replace(/\\/g, "/");
          if (idUnix.includes("/01.指南/")) return null;
          if (idUnix.includes("/python文档/")) return null;
          // 针对包含大量 Vue 模板示例的文档，直接整体转义，避免被 Vue 编译器解析
          if (idUnix.endsWith("/15.主题开发/01.开发思路.md")) {
            return code.replace(/</g, "&lt;").replace(/>/g, "&gt;");
          }
          if (idUnix.endsWith("/31.java课件/61.Spring Boot.md")) {
            return code.replace(/</g, "&lt;").replace(/>/g, "&gt;");
          }
          // 先处理三引号代码块，严格按同长度围栏匹配，随后用占位保护
          const fencedBlockRe = /^(`{3,})([^\n\r]*)\r?\n([\s\S]*?)\r?\n\1$/gm;
          const processedBlocks: string[] = [];
          let withFencedPlaceholders = code.replace(fencedBlockRe, (_full, ticks: string, info: string, body: string) => {
            const escapedBody = body.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            const cooked = `${ticks}${info}\n${escapedBody}\n${ticks}`;
            processedBlocks.push(cooked);
            return `__MD_BLOCK_${processedBlocks.length - 1}__`;
          });
          // 再处理行内反引号代码，使用占位保护
          const inlineCodeRe = /`([^`]*?)`/g;
          withFencedPlaceholders = withFencedPlaceholders.replace(inlineCodeRe, (_m, inner: string) => {
            const cooked = "`" + inner.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "`";
            processedBlocks.push(cooked);
            return `__MD_BLOCK_${processedBlocks.length - 1}__`;
          });
          // 保护 <script>/<style> SFC 片段
          const sfcBlockPattern = /<script[\s\S]*?>[\s\S]*?<\/script>|<style[\s\S]*?>[\s\S]*?<\/style>/gi;
          let contentWithoutBlocks = withFencedPlaceholders.replace(sfcBlockPattern, (m: string) => {
            processedBlocks.push(m);
            return `__MD_BLOCK_${processedBlocks.length - 1}__`;
          });
          // 只转义 Java 泛型相关的尖括号与 javadoc <p>，不影响小写 html 标签（如 <img>）
          const escapeJavaGenerics = (src: string) =>
            src
              // 无界通配符 <?>
              .replace(/<\s*\?\s*>/g, "&lt;?&gt;")
              // 上界通配符 <? extends X>
              .replace(/<\s*\?\s+extends\s+([A-Za-z0-9_]+)\s*>/g, "&lt;? extends $1&gt;")
              // 下界通配符 <? super X>
              .replace(/<\s*\?\s+super\s+([A-Za-z0-9_]+)\s*>/g, "&lt;? super $1&gt;")
              // 单类型变量 <T>、<E>、<K>、<V>、<U>
              .replace(/<\s*([TEKVU])\s*>/g, "&lt;$1&gt;")
              // 多类型变量 <T, V> 等
              .replace(/<\s*([A-Z])\s*(?:,\s*[A-Z]\s*)+\s*>/g, s => s.replace(/</g, "&lt;").replace(/>/g, "&gt;"))
              // 具体类型 <String>、<Integer>、<List> …（首字母大写）
              .replace(/<\s*([A-Z][A-Za-z0-9_]+)\s*>/g, "&lt;$1&gt;");
          const escapedOutside = escapeJavaGenerics(
            contentWithoutBlocks
              // javadoc 段落标签 <p> 与 </p>
              .replace(/<\s*p\s*>/g, "&lt;p&gt;")
              .replace(/<\s*\/\s*p\s*>/g, "&lt;/p&gt;"),
          );
          // 进一步处理自然文本中的比较符 x<y / x>y，避免被当作 HTML 起始标签
          let escapedOutside2 = escapedOutside
            .replace(/([A-Za-z0-9_])\s*<\s*([A-Za-z0-9_])/g, "$1&lt;$2")
            .replace(/([A-Za-z0-9_])\s*>\s*([A-Za-z0-9_])/g, "$1&gt;$2");
          // 保护潜在模板标签以防误解析
          escapedOutside2 = escapedOutside2
            .replace(/<\s*template(?=[\s>])/g, "&lt;template")
            .replace(/<\s*\/\s*template\s*>/g, "&lt;/template&gt;");
          // 还原占位（代码与 SFC 已经在生成时完成转义）
          const restored = escapedOutside2.replace(/__MD_BLOCK_(\d+)__/g, (_, i) => processedBlocks[Number(i)]);
          return restored;
        },
      } satisfies Plugin),
      llmstxt() as any,
    ],
  },
  // transformHtml: (code, id, context) => {
  //   if (context.page !== "404.md") return code;
  //   return code.replace("404 | ", "");
  // },
});
