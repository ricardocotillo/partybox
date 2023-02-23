import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGtag from 'vue-gtag'

import 'vue3-toastify/dist/index.css'
import './index.css'

const app = createApp(App)

app.provide('store', store)

app.use(router)
app.use(VueGtag, {
  appName: 'PartyBox',
  config: {
    id: 'G-FXQN0JNZ47',
  },
}, router)

app.mount('#app')
