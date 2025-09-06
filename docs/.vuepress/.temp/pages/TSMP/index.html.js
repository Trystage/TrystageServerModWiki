import comp from "E:/web/trystage/TrystageServerModWiki/docs/.vuepress/.temp/pages/TSMP/index.html.vue"
const data = JSON.parse("{\"path\":\"/TSMP/\",\"title\":\"TSMP 服务器\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"updatedTime\":1756145520000,\"contributors\":[{\"name\":\"4C01 t\",\"username\":\"\",\"email\":\"Catcat-jia@foxmail.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"5715b104a0935c09c12f7efd09c1c00ddbbfad84\",\"time\":1756145520000,\"email\":\"Catcat-jia@foxmail.com\",\"author\":\"4C01 t\",\"message\":\"添加TSMP Wiki,添加模组服务器配方与游戏机制修改Wiki\"}]},\"filePathRelative\":\"TSMP/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
