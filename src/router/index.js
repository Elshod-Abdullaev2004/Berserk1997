import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'HomePage', component: () => import('@/pages/HomePage.vue') },

    { path: '/series', name: 'series', component: () => import('@/pages/SeriesPage.vue') },
    {
      path: '/characters',
      name: 'characters',
      component: () => import('@/pages/CharactersPage.vue')
    },
    { path: '/history', name: 'history', component: () => import('@/pages/HistoryPage.vue') },
    { path: '/quotes', name: 'quotes', component: () => import('@/pages/QuotesPage.vue') },
    {
      path: '/wallpapers',
      name: 'wallpapers',
      component: () => import('@/pages/WallpaperPage.vue')
    }
  ]
})

export default router
