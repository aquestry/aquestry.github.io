import { defineConfig } from 'vitepress';
export default defineConfig({
  lang: 'en-US',
  title: 'Aquestry',
  description: "Developer from Germany.",
  cleanUrls: true,
  themeConfig: {
    nav: [{ text: 'Projects', link: '/projects' }],
    search: {
      provider: 'local'
    },
    logo: 'favicon.ico',
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/aquestry",
      },
      {
        icon: "discord",
        link: "https://discord.gg/jC9azQtJmC",
      },
    ],
  },
});