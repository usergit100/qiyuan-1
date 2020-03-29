import { ss } from '@/utils/storage'
import Router from '@/router'
import {
  getNextRoute, routeExist, routeTitle
} from '@/utils/util'
import { getUnion } from '@/utils/array'

const initData = () => {
  const cacheTabs = ['home']
  const openedTabs = [
    {
      title: '首页',
      name: 'home',
      path: '/home',
      closable: false
    }]
  const activeTab = '/home'

  ss.set('cacheTabs', cacheTabs)
  ss.set('openedTabs', openedTabs)
  ss.set('activeTab', activeTab)

  return {
    cacheTabs,
    openedTabs,
    activeTab
  }
}

const state = {
  menuList: ss.get('menuList') || [],
  cacheTabs: ss.get('cacheTabs') || initData().cacheTabs,
  openedTabs: ss.get('openedTabs') || initData().openedTabs,
  activeTab: ss.get('activeTab', 'string') || initData().activeTab
}

const mutations = {
  setMenuList (state, menuList = []) {
    state.menuList = menuList
  },
  setOpenedTabs (state, openedTabs = initData().openedTabs) {
    state.openedTabs = openedTabs
    state.cacheTabs = openedTabs.map(tab => tab.name)
    ss.set('openedTabs', openedTabs)
    ss.set('cacheTabs', state.cacheTabs)
  },
  setActiveTab (state, route = {}) {
    const activeTab = route.path || initData().activeTab
    state.activeTab = activeTab
    ss.set('activeTab', activeTab, 'string')
  },
  addOpenedTabs (state, route = {}) {
    if (!routeExist(state.openedTabs, route)) {
      const tab = {
        title: routeTitle(route),
        name: route.name,
        path: route.path,
        params: route.params,
        query: route.query,
        closable: true
      }
      state.openedTabs.push(tab)
      this.commit('setOpenedTabs', state.openedTabs)
      this.commit('addCacheTab', route)
    }
    this.commit('setActiveTab', route)
  },
  removeTab (state, tab) {
    const openedTabs = state.openedTabs.filter(
      insideTab => insideTab.path !== tab)
    const nextRoute = getNextRoute(state, tab)

    if (nextRoute) {
      this.commit('setActiveTab', nextRoute)
      Router.push(state.activeTab)
    }

    this.commit('setOpenedTabs', openedTabs)
  },
  addCacheTab (state, route = {}) {
    if (route.meta && route.meta.noCache) return
    state.cacheTabs = getUnion(state.cacheTabs, [route.name])
    ss.set('cacheTabs', state.cacheTabs)
  }
}

const actions = {}

export default {
  state,
  mutations,
  actions
}
