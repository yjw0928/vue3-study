import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/*',
    //   name: 'nav',
    //   component: HomeView,
    // },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'), //懒加载
    },
  ],
})

export default router
