import { createWebHistory, createRouter } from 'vue-router'
import Date from '../views/date.vue'
import Links from '../views/links.vue'
import LataMode from '../views/flavor/lata/mode.vue'
import LataRuleta from '../views/flavor/lata/ruleta.vue'
import Splash from '../views/splash.vue'
import Roulette from '../views/roulette.vue'
import Mode from '../views/mode.vue'
import FlavorRoulette from '../views/flavor/roulette.vue'
import FlavorSplash from '../views/flavor/splash.vue'
import FlavorMode from '../views/flavor/mode.vue'
import VeranoDanger from '../views/promociones/veranoDanger.vue'
import VeranoDangerRegistro from '../views/promociones/veranoDangerRegistro.vue'

function checkCookie(name) {
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) {
      return match[2];
  }
  else {
      return null;
  }
}

const routes = [
  {
    path: '/',
    name: "splash",
    component: Splash,
  },
  {
    path: '/date/',
    name: 'date',
    component: Date,
  },
  {
    path: '/links/',
    name: 'links',
    component: Links,
  },
  {
    path: '/mode/',
    name: 'mode',
    component: Mode,
  },
  {
    path: '/lata-mode/',
    name: 'lata-mode',
    component: LataMode,
  },
  {
    path: '/lata-ruleta/:mode/',
    name: 'lata-ruleta',
    component: LataRuleta,
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
      // {
      //   path: 'verano-danger/terminos/',
      //   name: 'verano-danger-terminos',
      //   component: VeranoDangerTerminos,
      // },
      // {
      //   path: 'verano-danger/ruleta/',
      //   name: 'verano-danger-ruleta',
      //   component: VeranoDangerRuleta,
      //   props: true,
      // },
      // {
      //   path: 'verano-danger/resultado/:index/',
      //   name: 'verano-danger-resultado',
      //   component: VeranoDangerResultado,
      //   props: true,
      // },
      // {
      //   path: 'verano-danger/revisa/:index/',
      //   name: 'verano-danger-revisa',
      //   component: VeranoDangerRevisa,
      //   props: true,
      // }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from) => {
  const ok = checkCookie('over18')
  if (['lata-ruleta', 'lata-mode'].includes(to.name) && !ok) {
    return { name: 'date' }
  }
})

export default router