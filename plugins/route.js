export default ({ app }) => {
  const whitePage = ["/login"]
  app.router.beforeEach((to, from, next) => {
    const { token } = app.store.state.config.userInfo
    // 没有token，并且不是白名单
    if (!token && !whitePage.includes(to.path)) {
      console.log("登陆token失效")
      next({
        path: "/login"
      })
      return
    }
    console.log(3, token)
    // console.log("路由全局钩子函数")
    next()
  })
}
