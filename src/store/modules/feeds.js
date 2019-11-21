import Axios from 'axios'
import Vue from 'vue'

const state = {
  feeds: {},
  feedNames: (localStorage['feedNames'] || '').split(',')
}

const getters = {
  feeds: state => state.feeds,
  feedNames: state => state.feedNames
}

const actions = {
  async fetchFeeds ({ rootState, commit, state }) {
    const config = {
      headers: { Authorization: 'bearer ' + rootState.user.token }
    }
    state.feedNames.forEach(async feedName => {
      const instance = rootState.user.instance
      const url = `https://${instance}/api/v1/timelines/tag/${feedName}`
      const res = await Axios.get(url, config)
      commit('createFeed', { feedName, feed: res.data })
    })
  },
  addFeed ({ commit }, feedName) {
    commit('addFeedName', feedName)
  },
  async favouriteToot ({ commit, rootState }, id) {
    const config = {
      headers: { Authorization: 'bearer ' + rootState.user.token }
    }
    const instance = rootState.user.instance
    const url = `https://${instance}/api/v1/status/${id}/favourite`
    await Axios.post(url, config)
    commit('updateToot', { id, field: 'favourited', value: true })
  },
  async unfavouriteToot ({ commit, rootState }, id) {
    const config = {
      headers: { Authorization: 'bearer ' + rootState.user.token }
    }
    const instance = rootState.user.instance
    const url = `https://${instance}/api/v1/status/${id}/unfavourite`
    await Axios.post(url, config)
    commit('updateToot', { id, field: 'favourited', value: false })
  }
}

const mutations = {
  addFeedName: (state, feedName) => {
    state.feedNames.push(feedName)
    localStorage['feedNames'].push(feedName)
  },
  createFeed: (state, f) => Vue.set(state.feeds, f.feedName, f.feed),
  updateToot: (state, { id, field, value }) => {
    for (const feed in state.feeds) {
      for (const toot in state[feed].filter(t => t.id === id).length > 0) {
        toot[field] = value
      }
    }
  }
}

export default { state, actions, getters, mutations }
