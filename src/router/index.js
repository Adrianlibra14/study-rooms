import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '@/views/Inicio.vue'
import Nosotros from '@/views/Nosotros.vue'
import Academia from '@/views/Academia.vue'
import Cursos from '@/views/Cursos.vue'
import Datos from '@/views/Datos.vue'
import Comentarios from '@/views/Comentarios.vue'
import Footer from '@/views/Footer.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/Nosotros',
    name: 'Nosotros',
    component: Nosotros
  },
  {
    path: '/Academia',
    name: 'Academia',
    component: Academia
  },
  {
    path: '/Cursos',
    name: 'Cursos',
    component: Cursos
  },
  {
    path: '/Datos',
    name: 'Datos',
    component: Datos
  },
  {
    path: '/Comentarios',
    name: 'Comentarios',
    component: Comentarios
  },
  {
    path: '/Pie-de-pagina',
    name: 'Pie-de-pagina',
    component: Footer
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
