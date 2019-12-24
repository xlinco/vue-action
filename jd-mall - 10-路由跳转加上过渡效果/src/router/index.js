import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
// import Login from '../views/Login.vue'
// import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'login',
  //   component: Login
  // },
  // {
  //   path: '/register',
  //   name: 'Register',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  // },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  // },
  {
    path: '/',
    name: 'register',
    redirect:'/login'
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }, 
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/botnav',
    name: 'botnav',
    component: () => import('../views/BottomNav.vue'),
    redirect: '/botnav/index',
    // 嵌套路由，嵌套路由的path不用再加'/'
    children:[
      {
        path: 'index',
        name: 'index',
        component: () => import('../views/Index.vue')
      },
      {
        path: 'list',
        name: 'list',
        component: () => import('../views/List.vue')
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('../views/Search.vue')
      },
      {
        path: 'car',
        name: 'car',
        component: () => import('../views/Car.vue')
      },
      {
        path: 'mine',
        name: 'mine',
        component: () => import('../views/Mine.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
