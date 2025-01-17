import { createRouter, createWebHistory } from 'vue-router';
import IndexView from '../views/index.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView,
      meta: {
        name: '首页',
        requiresAuth: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue'),
      meta: {
        name: '登录页',
      },
    },
  ],
});

// router.beforeEach((to, from, next) => {
// const role = localStorage.getItem('vuems_name');
// const permiss = usePermissStore();
// if (!role && to.meta.noAuth !== true) {
//     next('/login');
// } else if (typeof to.meta.permiss == 'string' && !permiss.key.includes(to.meta.permiss)) {
//     // 如果没有权限，则进入403
//     next('/403');
// } else {
//     next();
// }
// });

export default router;
