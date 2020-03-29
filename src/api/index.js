import http from '@/utils/axios'
import Qs from 'qs'
import Interface from './interface'
import { checkType } from '@/utils/object'

const api = {
  install (Vue) {
    Vue.prototype.$api = this
  }
}
// 遍历接口
for (const moduleName in Interface) {
  const module = {} // 每个模块绑定各自下的方法
  for (const item of Interface[moduleName]) {
    module[item.name] = (params) => {
      let strPath = ''

      if (item.method === 'get' && params) {
        for (const k in params) {
          strPath += `&${k}=${params[k]}`
        }
      }

      if (item.method === 'post') {
        const options = { headers: { 'content-type': 'application/x-www-form-urlencoded' } }
        // post请求时数组需使用 JSON 带的转换方法进行转换且需改变请求头，否则使用 Qs 的
        if (checkType.isArray(params)) {
          params = JSON.stringify(params)
          options.headers['content-type'] = 'application/json'
        } else if (checkType.isFormData(params)) {
          options.headers['content-type'] = 'multipart/form-data'
        } else {
          params = Qs.stringify(params)
        }
        return http.post(item.url, params, options)
      } else if (item.method === 'get') {
        return http.get(item.url + strPath)
      }
    }
  }
  // 为 api 绑定上模块
  api[moduleName] = module
}

export default api
