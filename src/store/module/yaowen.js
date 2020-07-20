import $ from 'jquery'
const state = {
  list: []
}

const actions = {
  yaowen: ({commit, state}, payload) => {
    $.getJSON(
      'http://3g.163.com/touch/jsonp/sy/recommend/0-9.html?miss=30&refresh=B02&callback=?',
      data => {
        // this.list = data.news
        commit('yaowen', data.list)
      }
    )
  }
}

const mutations = {
  yaowen: (state, payload) => {
    state.list = payload
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
