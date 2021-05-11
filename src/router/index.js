import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import viewDetails from '@/views/viewDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/viewDetails',
    name: 'viewDetails',
    component: viewDetails,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
