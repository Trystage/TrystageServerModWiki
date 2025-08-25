import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  // 源目录 - 注意这里应该是相对于配置文件的路径
  source: '.', // 如果配置文件在 .vuepress 目录，而内容在父级目录
  
  title: 'TrystageServer文档',
  description: "",
  base: '/',
  
  // 打包器配置
  bundler: viteBundler({}),
  
  // 主题配置
  theme: defaultTheme({
    // 顶部导航栏
    navbar: [
      { text: '首页', link: '/' },
      { text: '模组服文档', link: '/Modding/' }
    ],

    // 侧边栏配置
    sidebar: {
      '/Modding/': [
        '', // 对应 Modding/README.md
        'Recipe',
        'Mechanics'
      ]
    }
  })
})