import { createRouter, createWebHistory } from 'vue-router'

const Dashboard = () => import('../views/Dashboard.vue')
const About = () => import('../views/About.vue')
const Experience = () => import('../views/Experience.vue')
const Contact = () => import('../views/Contact.vue')

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
