import { createRouter, createWebHistory } from 'vue-router'
import { ALL_PAGES } from './constants'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: ALL_PAGES.map((item) => {
    return {
      path: `/${item.name}/:id`,
      name: item.name,
      component: () => import(`../pages/${item.componentName}.vue`),
      meta: {
        title: item.title,
      },
    }
  }),
})

export default router
