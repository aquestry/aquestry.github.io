import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'Voasis - Nebula',
  description: 'Dynamically managed server network.',
  head: [['link', { rel: 'icon', href: 'https://svgshare.com/i/1BRd.svg' }]],
  themeConfig: {
    nav: [{ text: 'About', link: '/about' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Anton K.'
    },
    search: {
      provider: 'local'
    },
    logo: 'https://svgshare.com/i/1BRd.svg',
    cleanUrls: true
  },
});
