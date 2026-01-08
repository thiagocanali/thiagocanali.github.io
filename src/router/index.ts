import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import About from '../views/About.vue'
import Experience from '../views/Experience.vue'
import Contact from '../views/Contact.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/about', component: About },
  { path: '/experience', component: Experience },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
