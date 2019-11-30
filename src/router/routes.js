export default [
  { path: '/', component: () => import('../components/page-landing.vue') },
  { path: '/about', component: () => import('../components/page-about.vue') },
  { path: '/timeline', component: () => import('../components/page-timeline.vue') },
  { path: '/sketches', component: () => import('../components/page-sketches.vue') },
  { path: '/projects', component: () => import('../components/page-projects.vue') },
  { path: '/thoughts', component: () => import('../components/page-thoughts.vue') },
  { path: '/links-contacts', component: () => import('../components/page-links-contacts.vue') },
]