import Vue from 'vue'
import Vuex from 'vuex'

import mutations from '../store/mutations'
import actions from '../store/actions'
import state from '../store/state'
import getters from '../store/getters'

import tuijian from '../store/module/tuijian'
import yaowen from '../store/module/yaowen'
import yuanchuang from '../store/module/yuanchuang'
Vue.use(Vuex)

const store = new Vuex.Store({
  mutations,
  state,
  actions,
  getters,
  modules: {
    tuijian, yaowen, yuanchuang
  }
})

export default store
