import comp from "E:/web/trystage/TrystageServerModWiki/docs/.vuepress/.temp/pages/Modding/index.html.vue"
const data = JSON.parse("{\"path\":\"/Modding/\",\"title\":\"TrystageServer模组服务器内更改\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"Modding/README.md\"}")
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
