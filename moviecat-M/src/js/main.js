import Vue from 'vue';
import VueRouter from 'vue-router';
import vueJsonp from 'vue-jsonp';

import pff from '../assets/js/prefixfree.min.js'

Vue.use(VueRouter);
Vue.use(vueJsonp);
Vue.use(pff)

import App from '../components/App.vue';
import routeConfig from '../route';
import api from './api';


Vue.prototype.api = api;

new Vue({
    el: '#App',
    render: c => c(App),
    router: new VueRouter(routeConfig)
})


