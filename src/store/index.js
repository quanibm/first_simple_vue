import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './action'
Vue.use(Vuex)





export default new Vuex.Store({
  state: state,
  //除了state其他的单词后面都应该是复数
  mutations: mutations,
  actions: actions
})
