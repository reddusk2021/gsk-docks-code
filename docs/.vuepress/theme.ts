import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://gensokyo.bot",
  themeColor: {
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },
  iconAssets: "iconfont",
  logo: "/head.ico",
  repo: "",
  docsRepo: "",
  docsDir: "docs",
  docsBranch: "master",
  // navbar
  navbar: navbar,
  // sidebar
  sidebar: sidebar,
  footer: 'GPL3.0 Licensed | Copyright © 2023 gensokyo | <a href="" target="_blank">文档地址</a>',
  displayFooter: true,
  pageInfo: ["Date", "Word", "PageView"],
  plugins: {
    comment: {
      provider: "Waline",
      serverURL: "https://vuepress-theme-hope-comment.vercel.app",
      emoji: [
        "//unpkg.com/@waline/emojis@1.0.1/alus",
        "//unpkg.com/@waline/emojis@1.0.1/bilibili",
        "//unpkg.com/@waline/emojis@1.0.1/weibo",
        "//unpkg.com/@waline/emojis@1.0.1/tw-emoji",
        "//unpkg.com/@waline/emojis@1.0.1/tieba",
      ],
      meta: ['nick', 'mail'],
      requiredMeta: ['nick', 'mail'],
      login: 'enable',
      copyright: false,
    },
    mdEnhance: {
      enableAll: false,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      gfm: true,
      container: true,
      tabs: true,
      codetabs: true,
    },
    copyCode: {
      showInMobile: true,
    },
  },
});
