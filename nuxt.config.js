export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-template",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "卢方舟的nuxt" },
      { hid: "keywords", name: "keywords", content: "卢方舟叫tog" },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "卢方舟的nuxt模板测试name",
        content: "卢方舟的nuxt模板测试content"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["element-ui/lib/theme-chalk/index.css"],
  // global sass
  styleResources: {
    scss: ["~assets/scss/entrance.scss"]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/element-ui", "@/plugins/route"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    "@nuxtjs/style-resources"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios"
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/]
  },

  // 配置服务器（主要是这个配置）
  server: {
    // port: 8000, // default: 3000
    host: "0.0.0.0", // default: localhost (推荐)
    // host: '0', // 等于 host: '0.0.0.0' 这样配置，在mac上这么配置没问题，但是在window上这么配置有报错。
    timing: false
  }
}
