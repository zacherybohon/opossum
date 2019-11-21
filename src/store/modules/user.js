const state = {
  instance: localStorage['instance'] || null,
  token: localStorage['token'] || null
}
const actions = {
  logout ({ commit }) {
    localStorage.removeItem('instance')
    localStorage.removeItem('token')
    commit('setAuthentication', null, null)
  }
}
const getters = {
  getAuthInfo: ({ instance, token }) => ({ instance, token }),
  clientId: () => process.env.VUE_APP_CLIENT_ID,
  clientSecret: () => process.env.VUE_APP_CLIENT_SECRET,
  redirectURI: () => process.env.VUE_APP_REDIRECT_URI,
  loggedIn: ({ token }) => token != null
}
const mutations = {
  setAuthentication: (state, instance, token) => {
    state.instance = instance
    state.token = token
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
