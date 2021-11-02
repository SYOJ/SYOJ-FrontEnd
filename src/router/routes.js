const routes = [
  {
    name: 'home',
    redirect: '/home',
    path: '/'
  },
  {
    name: 'register',
    path: '/register',
    component: () => import('@/views/user/Register')
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/HomeView'),
    meta: { title: '首页' }
  }
]

export default routes;
