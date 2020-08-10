import Vue from 'vue';
import Router from 'vue-router';
import Example from 'views/example';
import store from './store';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/example',
      name: 'example',
      component: Example,
    },
  ],
});
