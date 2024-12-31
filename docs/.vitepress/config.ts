import { defineConfig } from 'vitepress';
export default defineConfig({
  lang: 'en-US',
  title: 'Aquestry',
  head: [['link', { rel: 'icon', href: 'https://ams02pap001files.storage.live.com/y4mxLCM3AXgk7BZhDltzQEmeyQskUAQlu2U69Aw_Rr6ftmg4HApkxh_iX0HBeIPnB0kfJna50vBGuYVlIlgstYgcPvlrZtsF1QnHswOoWWyMwRcIH62cjrlAvIQ65MJ238mUCGe0dXWoyPtuL8cDD5QrvFHpTudX2K4fInpNSoF7VIb_czj69gR8y5ENRc_l11DUOcVBXMZFkl-_STavbMANpnWpmNfcg0t6Rc6eUErL8g' }]],
  themeConfig: {
    nav: [{ text: 'Projects', link: '/projects' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Anton K.'
    },
    search: {
      provider: 'local'
    },
    logo: 'https://ams02pap001files.storage.live.com/y4mxLCM3AXgk7BZhDltzQEmeyQskUAQlu2U69Aw_Rr6ftmg4HApkxh_iX0HBeIPnB0kfJna50vBGuYVlIlgstYgcPvlrZtsF1QnHswOoWWyMwRcIH62cjrlAvIQ65MJ238mUCGe0dXWoyPtuL8cDD5QrvFHpTudX2K4fInpNSoF7VIb_czj69gR8y5ENRc_l11DUOcVBXMZFkl-_STavbMANpnWpmNfcg0t6Rc6eUErL8g',
    cleanUrls: true
  },
});
