import { createWebHistory, createRouter } from 'vue-router'
import { pageview } from 'vue-gtag'
import Splash from '../views/splash.vue'
import Roulette from '../views/roulette.vue'
import Mode from '../views/mode.vue'
import FlavorRoulette from '../views/flavor/roulette.vue'
import FlavorSplash from '../views/flavor/splash.vue'
import FlavorMode from '../views/flavor/mode.vue'
import VeranoDanger from '../views/promociones/veranoDanger.vue'
import VeranoDangerRegistro from '../views/promociones/veranoDangerRegistro.vue'
import VeranoDangerRuleta from '../views/promociones/veranoDangerRuleta.vue'
import VeranoDangerResultado from '../views/promociones/veranoDangerResultado.vue'
import VeranoDangerRevisa from '../views/promociones/veranoDangerRevisa.vue'
import VeranoDangerTerminos from '../views/promociones/veranoDangerTerminos.vue'

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
    path: '/promo',
    name: 'promo',
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
      },
      {
        path: 'verano-danger/terminos/',
        name: 'verano-danger-terminos',
        component: VeranoDangerTerminos,
      },
      {
        path: 'verano-danger/ruleta/',
        name: 'verano-danger-ruleta',
        component: VeranoDangerRuleta,
        props: true,
      },
      {
        path: 'verano-danger/resultado/:index/',
        name: 'verano-danger-resultado',
        component: VeranoDangerResultado,
        props: true,
      },
      {
        path: 'verano-danger/revisa/:index/',
        name: 'verano-danger-revisa',
        component: VeranoDangerRevisa,
        props: true,
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   pageview(to.fullPath)
//   next()
// })

export default router;