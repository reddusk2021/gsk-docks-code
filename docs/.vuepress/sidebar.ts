import { sidebar } from "vuepress-theme-hope";

export default sidebar([
  "/",
   { text: "部署", icon: "install", link: "https://www.yuque.com/km57bt/hlhnxg/hoxlh53gg11h7r3l" },
    { text: "配置", icon: "config", link: "https://www.yuque.com/km57bt/hlhnxg/cr4ongt8qr7yqvdq" },
  {
    text: "项目地址",
    icon: "cycle",
    children: [
      {
        text: "Github",
        icon: "install",
        link: "https://github.com/Hoshinonyaruko/Gensokyo",
      },
      {
        text: "Gitee",
        icon: "plugin",
        link: "https://gitee.com/sanaefox/Gensokyo?_from=gitee_search",
      },
    ],
  },
   { text: "版权声明", icon: "copyright", link: "https://github.com/Hoshinonyaruko/Gensokyo/blob/main/LICENSE" },
],);
