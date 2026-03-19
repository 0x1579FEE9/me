import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "0x1579FEE9",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [],
    sidebar: [],
    socialLinks: [{ icon: "github", link: "https://github.com/0x1579FEE9" }],
    footer: {
      message: `<a href="https://beian.miit.gov.cn/" rel="noreferrer" target="_blank">粤ICP备2026007027号-2</a>`,
    },
  },
});
