export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/web/trystage/TrystageServerModWiki/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"TrystageServer 模组服务器文档"} }],
  ["/Modding/Mechanics.html", { loader: () => import(/* webpackChunkName: "Modding_Mechanics.html" */"E:/web/trystage/TrystageServerModWiki/docs/.vuepress/.temp/pages/Modding/Mechanics.html.js"), meta: {"title":"游戏机制更改"} }],
  ["/Modding/", { loader: () => import(/* webpackChunkName: "Modding_index.html" */"E:/web/trystage/TrystageServerModWiki/docs/.vuepress/.temp/pages/Modding/index.html.js"), meta: {"title":"TrystageServer模组服务器内更改"} }],
  ["/Modding/Recipe.html", { loader: () => import(/* webpackChunkName: "Modding_Recipe.html" */"E:/web/trystage/TrystageServerModWiki/docs/.vuepress/.temp/pages/Modding/Recipe.html.js"), meta: {"title":"物品合成"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/web/trystage/TrystageServerModWiki/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
