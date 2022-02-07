import { createWebHistory, createRouter } from 'vue-router'
import Splash from '../views/splash.vue'
import Roulette from '../views/roulette.vue'
import Mode from '../views/mode.vue'

const routes = [
  {
    path: '/',
    name: "splash",
    component: Splash,
  },
  {
    path: '/mode/',
    name: 'mode',
    component: Mode,
  },
  {
    path: '/roulette/',
    name: 'roulette',
    component: Roulette,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;