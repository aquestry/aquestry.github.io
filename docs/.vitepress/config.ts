import { defineConfig } from 'vitepress';
export default defineConfig({
  lang: 'en-US',
  title: 'Aquestry',
  themeConfig: {
    nav: [{ text: 'Projects', link: '/projects' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Anton K.'
    },
    search: {
      provider: 'local'
    },
    logo: 'favicon.ico',
    cleanUrls: true
  },
});