import { path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Gensokyo",
  description: "✨ 基于 OneBot QQ官方机器人Api Golang 原生实现 ✨。",

  base: "/",

  theme,
});
