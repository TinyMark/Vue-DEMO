import mcHome_page from '../components/pages/home_page.vue';
import mcIn_theaters from '../components/pages/in_theaters.vue';
import mcComing_soon from '../components/pages/coming_soon.vue';
import mcTop250 from '../components/pages/top250.vue';
import mcDetails from '../components/details/details.vue';

export default {
    routes: [
        { path: '/', redirect: '/home_page' },
        { path: '/home_page', component: mcHome_page },
        { path: '/in_theaters', component: mcIn_theaters },
        { path: '/coming_soon', component: mcComing_soon },
        { path: '/top250', component: mcTop250 },
        { path: '/details/:id', component: mcDetails }
    ],
    linkActiveClass: 'active'
}