import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'Vue-resource';
import App from './App.vue';
import { routes } from './routes';

Vue.use(VueRouter);
Vue.use(VueResource)

Vue.http.options.root = 'https://register-of-contractors.firebaseio.com/data.json';

const router = new VueRouter({
    routes
})

new Vue({
  el: '#app',
    router,
  render: h => h(App)
})
