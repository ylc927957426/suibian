import $ from 'jquery'
const state = {
  list: []
}

const actions = {
  yuanchuang: ({commit, state}, payload) => {
    $.getJSON(
      'http://3g.163.com/touch/jsonp/sy/recommend/0-9.html?miss=30&refresh=B02&callback=?',
      data => {
        // this.list = data.news
        commit('yuanchuang', data.list)
      }
    )
  }
}

const mutations = {
  yuanchuang: (state, payload) => {
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
