import Vue from 'vue'
import Money from '@/views/Money.vue'
import labels from '@/views/Labels.vue'
import statistics from '@/views/Statistics.vue'
import Notfound from '@/views/Notfound.vue'
import EditLabel from '@/views/EditLabel.vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes = [
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
    name: 'labels',
    component: labels
  },
  {
    path: '/labels/edit/:id',
    component: EditLabel
  },
  {
    path: '/Statistics',
    component: statistics
  },
  {
    path: '*',
    component: Notfound
  },
]

const router = new VueRouter({
  routes
})

export default router
