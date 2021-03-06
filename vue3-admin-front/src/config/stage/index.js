import adminConfig from './admin'
import bookConfig from './book' // 引入图书管理路由文件


let homeRouter = [
  {
    title: '首页', 
    type: 'view',
    name: 'about',
    route: '/about',
    filePath: 'views/about/about.vue',
    inNav: true,
    icon: 'iconfont icon-iconset0103',
    order: 1,
  },
  {
    title: "国际化", 
    type: 'view',
    name: 'i18n',
    route: '/i18n',
    filePath: 'views/i18n-page/i18n.vue',
    inNav: true,
    icon: 'iconfont icon-iconset0103',
    order: 2,
  },
  {
    title: '日志管理',
    type: 'view',
    name: Symbol('log'),
    route: '/log',
    filePath: 'views/log/log.vue',
    inNav: true,
    icon: 'iconfont icon-rizhiguanli',
    order: 2,
    permission: ['查询所有日志'],
  },
  {
    title: '个人中心',
    type: 'view',
    name: Symbol('center'),
    route: '/center',
    filePath: 'views/center/center.vue',
    inNav: false,
    icon: 'iconfont icon-rizhiguanli',
  },
  {
    title: '404',
    type: 'view',
    name: Symbol('404'),
    route: '/404',
    filePath: 'views/error-page/404.vue',
    inNav: false,
    icon: 'iconfont icon-rizhiguanli',
  },
  bookConfig,
  adminConfig,
]

export default homeRouter