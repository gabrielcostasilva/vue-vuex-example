import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// global styles
import './assets/main.css'

createApp(App).use(createPinia()).use(router).mount('#app')
