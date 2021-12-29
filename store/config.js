export const state = () => ({
  userInfo: {
    token: "test-token"
  }
})

export const mutations = {
  editUserInfo(state, val) {
    state.userInfo = val
  },
  logout(state, val) {
    state.userInfo = {}
  }
}
