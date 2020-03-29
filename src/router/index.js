import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import Store from '@/store'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.noAuth) {
    next()
  } else {
    if (Store.state.user.isLogin) {
      if (to.name === 'login') {
        next({ name: 'home' })
      } else {
        next()
      }
    } else {
      if (to.name === 'login') {
        next()
      } else {
        next({ name: 'login' })
      }
    }
  }
})

export default router
