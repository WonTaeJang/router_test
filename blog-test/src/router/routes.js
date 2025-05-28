const routes = [
  {
    path: '',
    component: () => import('../components/LayoutComponent.vue'),
    children: [
      {
        path: '',
        component: () => import('../components/Index.vue'),
      },
      {
        path: 'hello-world',
        component: () => import('../components/HelloWorld.vue'),
      },
      {
        path: '',
        component: () => import('../components/Index.vue'),
      },
    ]
  }
]

export default routes