// 本地 Teek 主题包引用（与 Teek 在线主题包引用 二选一）
import { defineTeekConfig } from "../../packages/config";
import { version } from "../../packages/teek/version";

// Teek 在线主题包引用（需安装 Teek 在线版本）
// import { defineTeekConfig } from "vitepress-theme-teek/config";
// import { version } from "vitepress-theme-teek/es/version";

export const teekConfig = defineTeekConfig({
  sidebarTrigger: true,
  author: { name: "Teeker", link: "https://github.com/Kele-Bingtang" },
  blogger: {
    name: "天客",
    slogan: "朝圣的使徒，正在走向编程的至高殿堂！",
    avatar: "https://testingcf.jsdelivr.net/gh/Kele-Bingtang/static/user/avatar1.png",
    shape: "circle-rotate",
    circleBgImg: "/blog/bg4.webp",
    color: "#ffffff",
    circleSize: 120,
    status: {
      icon: "😪",
      size: 28,
      title: "困",
    },
  },
  footerInfo: {
    theme: {
      name: `Theme By Teek@${version}`,
    },
    copyright: {
      createYear: 2025,
      suffix: "Teek",
    },
  },
  codeBlock: {
    copiedDone: TkMessage => TkMessage.success("复制成功！"),
  },
  post: {
    showCapture: true,
  },
  articleBanner: {
    enabled: true,
  },
  articleShare: { enabled: true },
  vitePlugins: {
    sidebarOption: {
      initItems: false,
      ignoreIndexMd: true,
      ignoreList: ["assets", "media", /\.assets$/],
      resolveRule: "rewrites",
    },
  },
  markdown: {
    demo: {
      githubUrl: "https://github.com/Kele-Bingtang/vitepress-theme-teek/blob/master/docs",
    },
  },
  siteAnalytics: [
    {
      provider: "baidu",
      options: {
        id: "d5ee872d9aa1ef8021f4a3921b2e9c2a",
      },
    },
    {
      provider: "google",
      options: {
        id: "G-K5GNDW3L7K",
      },
    },
  ],
});
