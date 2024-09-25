import { createApp } from 'vue'
import antd from 'ant-design-vue';
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

import App from './App.vue'

const router = createRouter({
    routes: routes,
    history: createWebHistory()
})

createApp(App).use(antd).use(router).mount('#app')
