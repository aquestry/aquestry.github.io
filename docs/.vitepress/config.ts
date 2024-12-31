import { defineConfig } from 'vitepress';
export default defineConfig({
  lang: 'en-US',
  title: 'Aquestry',
  head: [['link', { rel: 'icon', href: 'http://188.34.205.94/logo.svg' }]],
  themeConfig: {
    nav: [{ text: 'Projects', link: '/projects' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Anton K.'
    },
    search: {
      provider: 'local'
    },
    logo: 'http://188.34.205.94/logo.svg',
    cleanUrls: true
  },
});
