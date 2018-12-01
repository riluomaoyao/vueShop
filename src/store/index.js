//vuex最核心的管理模块
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex)

//store要先暴露，在配置
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
