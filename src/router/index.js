import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Car from '../components/pages/Car.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/car',
      name: 'Car',
      component: Car
    }
  ]
})
