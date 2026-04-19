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
      { text: '模组服文档', link: '/Modding/' },
      { text: 'TSMP文档', link: '/TSMP/' },
      { text: '2B2T文档', link: '/2B2T/' }
    ],

    // 侧边栏配置
    sidebar: {
      '/Modding/': [
        {
          text: '模组服指南',
          children: ['', 'Recipe', 'Mechanics']
        }
      ],
      '/TSMP/': [
        {
          text: 'TSMP 生存服',
          children: ['']
        }
      ],
      '/2B2T/': [
        {
          text: '2B2T 无政府服',
          collapsible: false,
          children: [
            '',
            'Recipe',
            {
              text: '特殊物品',
              collapsible: true,
              link: '/2B2T/items/',
              children: [
                'items/fire-charge',
                'items/hardened-diamond-sword',
                'items/viking-axe',
                'items/hardened-diamond-chestplate',
                'items/heavy-netherite-boots',
                'items/sharp-helmet',
                'items/lucky-pickaxe',
                'items/smelter-pickaxe',
                'items/world-devourer-pickaxe',
                'items/worker-shovel',
              ]
            }
          ]
        }
      ]
  }
  })
})