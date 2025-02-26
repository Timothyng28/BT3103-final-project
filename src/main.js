import './assets/main.css'

import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import Particles from 'vue3-particles'

createApp(App).use(router).use(Particles).mount('#app')
