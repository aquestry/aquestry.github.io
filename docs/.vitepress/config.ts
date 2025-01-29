import { defineConfig } from 'vitepress';
export default defineConfig({
  lang: 'en-US',
  title: 'Aquestry',
  cleanUrls: true,
  themeConfig: {
    nav: [{ text: 'Projects', link: '/projects' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © ' + new Date().getFullYear() + ' Anton K.'
    },
    search: {
      provider: 'local'
    },
    logo: 'favicon.ico'
  },
});