import Vue from 'vue';

const exampleAPI = (body) => Vue.axios.post('/example', body);

export default {
  exampleAPI,
};
