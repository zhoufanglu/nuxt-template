<template>
  <div class="p-login">
    user
    <div class="main">main</div>
  </div>
</template>
<script>
export default {
  name: 'UserIndex',
  data() {
    return {}
  },
  head() {
    return {
      title: '用户',
      meta: [{
        hid: "description",
        name: "description",
        content: '用户首页'
      },
        {
          hid: "keywords",
          content: '用户'
        }
      ]
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.p-login {
  color: $theme;
  .main{
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
