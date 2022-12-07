import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ejercicioVue from '../components/ejercicioVue'
import Juego from '../components/Juego.vue'
import Figuras from '../components/Figuras.vue'
import Promedio from '../components/Promedio.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ejercicio',
    name: 'ejercicioVue',
    component: ejercicioVue
  },
  {
    path: '/juego',
    name: 'Juego',
    component: Juego
  },
  {
    path: '/figuras',
    name: 'Figuras',
    component: Figuras
  },
  {
    path: '/promedio',
    name: 'Promedio',
    component: Promedio
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
