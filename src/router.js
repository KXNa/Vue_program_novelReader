import Vue from 'vue'
import Router from 'vue-router'
import BookShelf from './views/BookShelf'
import ExcellentView from './views/ExcellentView'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/bookshelf',
      name: 'bookshelf',
      component: BookShelf
    },
    {
      path: '/bs',
      name: 'bookshop',
      component: () => import('./views/BookShop.vue'),
      children: [
        {path: 'excellent', name: 'excellent', component: ExcellentView},
        {path: 'female', name: 'female', component: () => import('./views/FemaleView.vue')},
        {path: 'male', name: 'male', component: () => import('./views/MaleView.vue') },
        {path: 'cartoon', name: 'cartoon', component: () => import('./views/CartoonView.vue')},
        {path: 'detail', name: 'detail', component: () => import('./views/BookDetail.vue'),meta:{keepAlive: false}},
      ]
    },
    {
      path: '/read',
      name: 'read',
      component: () => import('./views/ReadingPage/ReadingPage.vue')
    }
  ],
  linkActiveClass: 'link-active'
});

router.beforeEach((to, from, next)=>{
  // console.log(to)
  next()
});

export default router