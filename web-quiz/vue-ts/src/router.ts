import { createWebHistory, createRouter } from 'vue-router';

import Start from '@/views/Start.vue';

const routes = [{ path: '/', component: Start }];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
