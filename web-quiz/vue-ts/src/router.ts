import { createWebHistory, createRouter } from 'vue-router';

import Start from '@/views/Start.vue';
import Game from '@/views/Game.vue';
import Error from '@/views/Error.vue';

const routes = [
  { path: '/', name: 'start', component: Start },
  { path: '/game', name: 'game', component: Game },
  { path: '/error', name: 'error', component: Error }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
