import comp from "E:/web/trystage/TrystageServerModWiki/docs/.vuepress/.temp/pages/Modding/index.html.vue"
const data = JSON.parse("{\"path\":\"/Modding/\",\"title\":\"TrystageServer模组服务器内更改\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"updatedTime\":1756140350000,\"contributors\":[{\"name\":\"4C01 t\",\"username\":\"\",\"email\":\"Catcat-jia@foxmail.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"71dae85f0557a7ed9ce46feb13d6af27dde54721\",\"time\":1756140350000,\"email\":\"Catcat-jia@foxmail.com\",\"author\":\"4C01 t\",\"message\":\"initial commit(added recipe)\"}]},\"filePathRelative\":\"Modding/README.md\"}")
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
