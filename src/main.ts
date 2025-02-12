import { createApp } from 'vue'
import App from './app.vue'
import { router } from "./app/providers/router";


createApp(App)
  .use(router)
  .mount('#app')


