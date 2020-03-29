import { ls, ss } from '@/utils/storage'
import Router from '@/router'

const state = {
  token: ss.get('token', 'string') || '',
  user: ss.get('UI') || {},
  isLogin: Boolean(ss.get('isLogin', 'boolean')) || false,
  userEmail: ls.get('UE', 'string') || '',
  userPwd: ls.get('UP', 'string') || '',
  saveUI: Boolean(ls.get('saveUI', 'boolean')) || false
}

const mutations = {
  setUser (state, user = {}) {
    state.isLogin = true
    state.user = user
    ss.set('UI', user)
    ss.set('isLogin', true, 'boolean')
  },
  setUserInfo (state, { userEmail = '', userPwd = '' }) {
    state.saveUI = true
    state.userEmail = userEmail
    state.userPwd = userPwd
    ls.set('saveUI', true, 'boolean')
    ls.set('UE', userEmail, 'string')
    ls.set('UP', userPwd, 'string')
  },
  loginOut (state) {
    state.token = ''
    state.user = {}
    state.isLogin = false
    ss.remove('token', 'UI', 'isLogin', 'menuList', 'openedTabs', 'activeTab',
      'cacheTabs')
    this.commit('setOpenedTabs')
    this.commit('setActiveTab')
    Router.push({ name: 'login' })
  },
  setToken (state, token = '') {
    state.token = token
    ss.set('token', token, 'string')
  }
}

const actions = {}

export default {
  state,
  mutations,
  actions
}
