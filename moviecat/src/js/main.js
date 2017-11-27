import Vue from 'vue';
import VueRouter from 'vue-router';
import VueJsonp from 'vue-jsonp';
import Vuex from 'vuex';

import pff from '../assets/js/prefixfree.min.js'

Vue.use(VueRouter);
Vue.use(VueJsonp);
Vue.use(Vuex);
Vue.use(pff);

import App from '../components/App.vue';
import routerConfig from '../router';
import api from '../js/api.js';

Vue.prototype.api = api;

new Vue({
    el: '#App',
    render: c => c(App),
    router: new VueRouter(routerConfig),
    store: new Vuex.Store({
        state: {
            searchWord: ''
        }
    })
})