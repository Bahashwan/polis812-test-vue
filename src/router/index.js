import { createRouter, createWebHistory } from 'vue-router';
import UserList from '../components/UserList.vue';
import UserDetails from '../components/UserDetails.vue';
import NotFound from '../components/NotFound.vue';
import UserPosts from '../components/UserPosts.vue';
import UserAlbums from '../components/UserAlbums.vue';

const routes = [
  {
    path: '/',
    name: 'userList',
    component: UserList,
  },
  {
    path: '/user/:id/',
    name: 'userDetails',
    component: UserDetails,
  },
  {
    path: '/user/:id/albums',
    name: 'userAlbums',
    component: UserAlbums,
  },{
    path: '/user/:id/posts',
    name: 'userPosts',
    component: UserPosts,
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
