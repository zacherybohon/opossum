import vuex from 'vuex'
import vue from 'vue'
import user from './modules/user'
import feeds from './modules/feeds'

vue.use(vuex)

export default new vuex.Store({
  modules: { user, feeds }
})
