import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import About from '../views/About.vue'
import Experience from '../views/Experience.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    { path: '/', component: Dashboard },
    { path: '/about', component: About },
    { path: '/experience', component: Experience },
    { path: '/contact', component: Contact },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
