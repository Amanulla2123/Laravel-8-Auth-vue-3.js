require('./bootstrap');
import { createApp } from 'vue'

const app = createApp({});

import router from './router' 

createApp().use(router).mount('#app')