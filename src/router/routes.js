export default [
  // redirects
  {
    path: "/steps-education",
    redirect: "/work/steps-education",
  },
  {
    path: "/math-test-ninja",
    redirect: "/work/steps-education",
  },

  // regular paths
  { path: "/", component: () => import("../components/page-landing.vue") },
  { path: "/about", component: () => import("../components/page-about.vue") },
  {
    path: "/timeline",
    component: () => import("../components/page-timeline.vue"),
  },
  {
    path: "/sketches",
    component: () => import("../components/page-sketches.vue"),
  },
  {
    path: "/sketches/:sketches",
    component: () => import("../components/page-sketches.vue"),
    props: true,
  },
  {
    path: "/projects/",
    component: () => import("../components/page-projects.vue"),
  },
  {
    path: "/projects/:project",
    component: () => import("../components/page-projects.vue"),
    props: true,
  },
  { path: "/work", component: () => import("../components/page-work.vue") },
  {
    path: "/work/:work",
    component: () => import("../components/page-work.vue"),
    props: true,
  },
  {
    path: "/thoughts",
    component: () => import("../components/page-thoughts.vue"),
  },
  {
    path: "/links-contacts",
    component: () => import("../components/page-links-contacts.vue"),
  },
]
