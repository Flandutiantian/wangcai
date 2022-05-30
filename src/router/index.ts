import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import Money from '@/views/Money.vue'
import labels from '@/views/Labels.vue'
import statistics from '@/views/Statistics.vue'
import Notfound from '@/views/Notfound.vue'
import EditLabel from '@/views/EditLabel.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/money'
  },
  {
    path: '/money',
    name: 'Money',
    component: Money
  },
  {
    path: '/Labels',
    name:'labels',
    component:labels
  },
  {
    path: '/labels/edit/:id',
    component:EditLabel
  },
  {
    path: '/Statistics',
    component:statistics
  },
  {
    path: '*',
    component:Notfound
  }, 
]

const router = new VueRouter({
  routes
})

export default router
