import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VeeValidate from 'vee-validate';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(VeeValidate);

// Setup baseURL axios pathname here
Vue.axios.baseURL = Vue.axios.create({
  baseURL: process.env.BASE_URL,
});

// const isProduction = process.env.NODE_ENV === 'production';

// const errorInterceptor = (error) => {
//   // For normal API responses assign here
//   const errorStatus = error.response.status;
//   let pushMessage = error.response.statusText;
//   // Sentry error tracking
//   if (isProduction && errorStatus >= 400) {
//     Sentry.captureMessage(new Error(JSON.stringify(error.response)), 'error');
//   }

//   // Respond to 500-level errors
//   if (errorStatus >= 500) {
//     app.$$response.formatServerError(error.response, pushMessage);
//   }

//   // Respond to 400-level errors
//   if (errorStatus >= 400 && errorStatus < 500) {
//     const [topError] = error.response.data.error.errors;
//     pushMessage = topError.message;
//   }

//   // Fire off an event to show the alert at top level
//   app.$store.dispatch('pushMessageAlert', { message: pushMessage });
//   return Promise.reject(error);
// };

// Vue.axios.interceptors.response.use((response) => response, errorInterceptor);

// // Registers helper util functions to prototype to make available to all Vue components.
// Object.entries(utils).forEach(([key, value]) => {
//   Object.defineProperty(Vue.prototype, `$$${key}`, { value });
// });

// // Registers all filters under filter folder.
// Object.keys(filters).forEach((helperFilter) => {
//   Object.keys(filters[helperFilter]).forEach((functionName) => {
//     Vue.filter(
//       `${helperFilter}_${functionName}`,
//       filters[helperFilter][functionName],
//     );
//   });
// });

// if (isProduction) {
//   //SETUP SENTRY HERE
// }

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount('#app');
