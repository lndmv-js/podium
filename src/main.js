import { createApp } from 'vue'

import App from './App.vue'
import config from '@/config/config';
import VueTheMask from 'vue-the-mask';

import AuthLayout from './components/base/AuthLayout.vue'
import BaseLayout from './components/base/BaseLayout.vue'
import SecondLayout from './components/base/SecondLayout.vue'

import router from './router';
import store from './store';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* @import '@ionic/vue/css/palettes/dark.always.css'; */
/* @import '@ionic/vue/css/palettes/dark.class.css'; */
import '@ionic/vue/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import './theme/core.css';
import './theme/elements.css';

const app = createApp(App)
  .use(IonicVue, {
    rippleEffect: false,
    mode: 'ios',
  })
  .use(router)
  .use(store)
  .use(VueTheMask);

// Устанавливаем конфигурацию как глобальное свойство
app.config.globalProperties.$config = config;

app.component('auth-layout', AuthLayout);
app.component('base-layout', BaseLayout);
app.component('second-layout', SecondLayout);

router.isReady().then(() => {
  app.mount('#app');
});
