import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '@/views/Landing.vue'
import Scan from '@/views/Scan.vue'
import Error from '@/views/Error.vue'
import Result from '@/views/Result.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'landing',
    component: Landing
  },
  {
    path: '/scan',
    name: 'scan',
    component: Scan
  },
  {
    path: '/error',
    name: 'error',
    component: Error
  },
  {
    path: '/result',
    name: 'result',
    component: Result
  }
]

const router = new VueRouter({
  routes
})

export default router
