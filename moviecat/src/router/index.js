import home_page from '../components/pages/home_page.vue';
import in_theaters from '../components/pages/in_theaters.vue';
import coming_soon from '../components/pages/coming_soon.vue';
import top250 from '../components/pages/top250.vue';
import detail from '../components/pages/detail.vue';
import search from '../components/pages/search.vue';

export default {
    routes: [
        { path: '/', redirect: '/home_page' },
        { path: '/home_page', component: home_page },
        { path: '/in_theaters', component: in_theaters },
        { path: '/coming_soon', component: coming_soon },
        { path: '/top250', component: top250 },
        { path: '/detail/:id', component: detail },
        { path: '/search', component: search }        
    ],
    linkActiveClass: 'active'
}