import './bootstrap';
import { createApp } from 'vue';
import app from './components/app.vue'
import router from './router/routes';

createApp(app).use(router).mount("#app")
