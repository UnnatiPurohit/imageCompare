import Vue from 'vue'
import App from './App.vue'
import router from "./router/routes";
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
Vue.use(ToastService);

Vue.use(PrimeVue);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');


import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons