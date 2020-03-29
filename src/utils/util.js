import { isEqualObj } from '@/utils/object'

/**
 * 路由是否存在
 * @param list
 * @param route
 * @returns {boolean}
 */
export const routeExist = (list, route) => (list.findIndex(
  item => item.path === route.path) > -1)
/**
 * 路由是否相等
 * @param route1
 * @param route2
 * @returns {boolean|boolean}
 */
export const routeEqual = (route1, route2) => {
  const params1 = route1.params
  const params2 = route2.params

  const query1 = route2.query
  const query2 = route2.query

  return isEqualObj(params1, params2) && isEqualObj(query1, query2)
}
/**
 * 获取路由名
 * @param route
 * @returns {*|string}
 */
export const routeTitle = (route = {}) => route.meta && (route.meta.title || '')
/**
 * 获取下一个路由
 * @param state
 * @param tab
 * @returns {null|*|{path: string, closable: boolean, name: string}}
 */
export const getNextRoute = (state, tab) => {
  const activeTab = state.activeTab
  const index = state.openedTabs.findIndex(t => t.path === tab)
  if (index > 0) {
    if (activeTab === tab) {
      return state.openedTabs[index - 1]
    }
  }
  return null
}
/**
 * 根据路由path找路由
 * @param routes
 * @param path
 * @returns {*}
 */
export const findRouteByPath = (routes = [], path) => {
  const children = []
  for (const route of routes) {
    if (route.path === path) {
      return route
    }
    if (route.children && route.children.length > 0) {
      children.push(...route.children)
    }
  }
  if (children.length > 0) {
    return findRouteByPath(children, path)
  } else {
    return {}
  }
}
/**
 * 将对象转换成formData
 * @param obj
 * @param keys
 */
export const transferToFormData = (obj, ...keys) => {
  const fd = new FormData()

  if (keys.length > 0) {
    for (const k of keys) fd.append(k, obj[k])
  } else {
    for (const k in obj) fd.append(k, obj[k])
  }

  return fd
}
