import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Archive from '../views/Archive'
import Obr from '../views/Obr'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Главная',
    component: Main
  },
  {
    path: '/archive',
    name: 'Архив',
    component: Archive
  },
  {
    path: '/obr',
    name: 'Страница обращения',
    component: Obr
  },
]

const router = new VueRouter({
  routes
})

export default router