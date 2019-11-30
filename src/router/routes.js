export default [
  { path: '/', component: () => import('../components/page-landing.vue') },
  { path: '/about', component: () => import('../components/page-about.vue')},
]