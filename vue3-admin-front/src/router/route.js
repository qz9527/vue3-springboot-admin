import homeRouter from './home-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/about',
    component: () => import('@/views/home/home'),
    children: [...homeRouter],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login'),
  }
  ,
  // {
  //   // redirect: '/404',
  //   path: "/:pathMatch(.*)*",
  //   component: ()=> import('@/views/error-page/404')
  // },
]

export default routes