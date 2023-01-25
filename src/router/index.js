import { createWebHistory, createRouter } from 'vue-router'
import Splash from '../views/splash.vue'
import Roulette from '../views/roulette.vue'
import Mode from '../views/mode.vue'
import FlavorRoulette from '../views/flavor/roulette.vue'
import FlavorSplash from '../views/flavor/splash.vue'
import FlavorMode from '../views/flavor/mode.vue'
import VeranoDanger from '../views/promociones/veranoDanger.vue'
import VeranoDangerRegistro from '../views/promociones/veranoDangerRegistro.vue'

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
  {
    path: '/promociones',
    name: 'promociones',
    children: [
      {
        path: 'verano-danger/',
        name: 'verano-danger',
        component: VeranoDanger,
      },
      {
        path: 'verano-danger/registro/',
        name: 'verano-danger-registro',
        component: VeranoDangerRegistro
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;