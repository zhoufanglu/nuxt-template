export default ({ app }) => {
  app.router.beforeEach((to, from, next) => {
    // console.log("路由全局钩子函数")
    next()
  })
}
