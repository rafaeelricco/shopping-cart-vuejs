import './assets/css/base.css'

import App from './App.vue'
import router from './router'

import store from './store'
import { createApp } from 'vue'

const app = createApp(App).use(store).use(store)

app.use(router)

app.mount('#app')
