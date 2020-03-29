import axios from 'axios'
import { Loading, Message, MessageBox } from 'element-ui'
import Store from '@/store'
import { noLoadingApi, noTokenApi } from '@/api/url'
import { throwErr } from '@/utils/throwErr'

const baseURL = process.env.VUE_APP_API

let loadingInstance
const closeLoading = () => {
  (loadingInstance !== null && loadingInstance.close() &&
    (loadingInstance = null))
}

const http = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  // withCredentials: true
})

http.interceptors.request.use(config => {
  // 是否开启全屏加载
  if (!noLoadingApi.includes(config.url)) {
    loadingInstance = Loading.service({ fullscreen: true })
  }
  // 是否携带token
  if (!noTokenApi.includes(config.url) && Store.state.user.token) {
    config.headers.Authorization = `token ${Store.state.user.token}`
  } else {
    delete config.headers.Authorization
  }

  return config
}, err => {
  // 先关闭全屏加载
  closeLoading()
  Message.error('服务器异常，请联系管理员！')
  return Promise.reject(err)
})

http.interceptors.response.use(resp => {
  // 先关闭全屏加载
  closeLoading()

  if (resp.data.token) {
    Store.commit('setToken', resp.data.token)
  }

  return resp.data
}, err => {
  // 先关闭全屏加载
  closeLoading()
  // 对响应做点儿什么
  if (err && err.response) {
    const res = {}
    const options = {
      type: 'warning',
      showCancelButton: false,
      showClose: false,
      closeOnClickModal: false,
      closeOnPressEscape: false
    }

    res.code = err.response.status
    res.msg = throwErr(res.code, err.response)
    // 若响应码为 401 时则退出登录状态
    if (res.code === 401) {
      options.callback = (action) => {
        Store.commit('loginOut')
      }
    }

    MessageBox.confirm(res.msg, options)
  }

  return Promise.reject(err)
})

export default http
