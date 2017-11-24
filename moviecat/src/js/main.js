import Vue from 'vue';
import VueRouter from 'vue-router';
import VueJsonp from 'vue-jsonp';
import Common from '../components/common'
import api from '../js/api';

Vue.use(VueRouter);
Vue.use(VueJsonp);
Vue.use(Common);

import App from '../components/App.vue';
import routerCfg from '../route';

Vue.prototype.api = api;

new Vue({
    el: '#App',
    render: c => c(App),
    router: new VueRouter(routerCfg)
})