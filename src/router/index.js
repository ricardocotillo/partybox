import { createWebHistory, createRouter } from 'vue-router'
import Splash from '../views/splash.vue'
import Roulette from '../views/roulette.vue'
import Mode from '../views/mode.vue'
import FlavorSplash from '../views/flavor/roulette.vue'
import FlavorRoulette from '../views/flavor/splash.vue'
import FlavorMode from '../views/flavor/mode.vue'

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
    path: '/mode/:flavor',
    component: FlavorMode,
    children: [
      {
        path: 'splash/',
        name: 'flavor-splash',
        component: FlavorSplash,
      },
      {
        path: 'roulette/',
        name: 'flavor-roulette',
        component: FlavorRoulette,
      },
    ],
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