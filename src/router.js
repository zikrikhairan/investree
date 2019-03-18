import Vue from 'vue';
import Router from 'vue-router';
import store from './store.js';

import Home from './views/Home.vue';
import Post from './views/Post.vue';

import PostList from '@/components/posts/List.vue';
import PostCreate from '@/components/posts/Create.vue';
import PostEdit from '@/components/posts/Edit.vue';
import PostDetail from '@/components/posts/Detail.vue';


import UserDashboard from './views/UserDashboard.vue';
import UserProfile from './views/UserProfile.vue';
import UserLogout from '@/components/user/Logout.vue';


Vue.use(Router);
Vue.component('router-link', Vue.options.components.RouterLink);
Vue.component('router-view', Vue.options.components.RouterView);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        auth: false,
      },
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue'),
      meta: {
        auth: false,
      },
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Register.vue'),
      meta: {
        auth: false,
      },
    },
    {
      path: '/post',
      name: 'post',
      component: Post,
      children: [
        {
          path: 'list',
          component: PostList,
          meta: {
            auth: true,
          },
        },
        {
          path: 'create',
          component: PostCreate,
          meta: {
            auth: true,
          },
        },
        {
          path: 'edit',
          meta: {
            auth: true,
          },
          component: PostEdit,
          children: [
            {
              path: ':id',
              meta: {
                auth: true,
              },
            },
          ],
        },
        {
          path: ':id',
          component: PostDetail,
          meta: {
            auth: true,
          },
        },
      ],
    },
    {
      path: '/user',
      name: 'user',
      component: UserDashboard,
      meta: {
        auth: true,
      },
      children: [
        {
          path: 'profile',
          name: 'user-profile',
          component: UserProfile,
          meta: {
            auth: true,
          },
        },
        {
          path: 'logout',
          name: 'user-logout',
          component: UserLogout,
          meta: {
            auth: true,
          },
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (localStorage.token && localStorage.token !== null) {
      return next();
    }
    return router.push('login');
  }
  return next();
});

export default router;
