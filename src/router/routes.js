import PageMain from '@/components/page-main/page-main'

export default [
  {
    path: '/',
    redirect: '/home',
    alias: 'home'
  }, {
    path: '/homePage',
    name: 'homePage',
    component: PageMain,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: { // meta：路由元信息
          title: '首页', // 页面标题
          noAuth: true, // 不需要登录权限，默认需要权限
          noCache: false // 不缓存页面，默认缓存
        },
        component: () => import(/* webpackChunkName: "home" */'@/views/home/home')
      }, {
        path: '/rank',
        name: 'rank',
        meta: { // meta：路由元信息
          title: '排行榜', // 页面标题
          noAuth: true, // 不需要登录权限，默认需要权限
          noCache: false // 不缓存页面，默认缓存
        },
        component: () => import(/* webpackChunkName: "rank" */'@/views/home/rank')
      }, {
        path: '/finished',
        name: 'finished',
        meta: { // meta：路由元信息
          title: '完本', // 页面标题
          noAuth: true, // 不需要登录权限，默认需要权限
          noCache: false // 不缓存页面，默认缓存
        },
        component: () => import(/* webpackChunkName: "rank" */'@/views/home/finished')
      }, {
        path: '/free',
        name: 'free',
        meta: { // meta：路由元信息
          title: '免费', // 页面标题
          noAuth: true, // 不需要登录权限，默认需要权限
          noCache: false // 不缓存页面，默认缓存
        },
        component: () => import(/* webpackChunkName: "rank" */'@/views/home/free')
      }, {
        path: '/author',
        name: 'author',
        meta: { // meta：路由元信息
          title: '作者中心', // 页面标题
          noAuth: true, // 不需要登录权限，默认需要权限
          noCache: false // 不缓存页面，默认缓存
        },
        component: () => import(/* webpackChunkName: "rank" */'@/views/home/author')
      }, {
        path: '/artist',
        name: 'artist',
        meta: { // meta：路由元信息
          title: '美工专区', // 页面标题
          noAuth: true, // 不需要登录权限，默认需要权限
          noCache: false // 不缓存页面，默认缓存
        },
        component: () => import(/* webpackChunkName: "rank" */'@/views/home/artist')
      }, {
        path: '/reqArticle',
        name: 'reqArticle',
        meta: { // meta：路由元信息
          title: '约稿', // 页面标题
          noAuth: true, // 不需要登录权限，默认需要权限
          noCache: false // 不缓存页面，默认缓存
        },
        component: () => import(/* webpackChunkName: "rank" */'@/views/home/req-article')
      }]
  }, {
    path: '*',
    name: 'error404',
    meta: {
      title: '页面404'
    },
    component: () => import(/* webpackChunkName: "error404" */'@/views/error/error404')
  }]
