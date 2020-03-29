import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const files = require.context('./modules', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
  const k = key.substr(key.lastIndexOf('/') + 1).replace(/\.js$/, '')
  modules[k] = files(key).default
})

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules
})
