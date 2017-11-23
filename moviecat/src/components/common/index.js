import mcHeader from './header.vue';
import mcContent from './content.vue';
import mcFooter from './footer.vue';

export default {
    install(Vue) {
        Vue.component('mc-header', mcHeader);
        Vue.component('mc-content', mcContent);
        Vue.component('mc-footer', mcFooter);
    }
}