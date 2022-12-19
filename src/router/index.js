import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/login.vue'
import home from '@/views/home.vue'
import bill from '@/views/bill.vue'
import my from '@/views/my.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: login },
  { path: '/home', component: home },
  { path: '/bill', component: bill },
  { path: '/my', component: my }
]

const router = new VueRouter({
  routes
})

export default router
