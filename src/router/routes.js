export default [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
      noAuth: true
    },
    component: () => import(/* webpackChunkName: "home" */'@/views/home/home')
  }, {
    path: '*',
    name: 'error404',
    component: () => import(/* webpackChunkName: "error404" */'@/views/error/error404')
  }]
