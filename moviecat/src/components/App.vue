<template>
    <div class="warp">
        <mcHeader></mcHeader>
        <mcContent></mcContent>
        <mcFooter></mcFooter>
    </div>
</template>

<script>
import header from '../components/common/header.vue';
import content from '../components/common/content.vue';
import footer from '../components/common/footer.vue';

export default {
    data() {
        return {

        }
    },
    components: {
        'mcHeader': header,
        'mcContent': content,
        'mcFooter': footer,
    }
}
</script>

<style>
@import "../assets/css/reset.css";
@import "../assets/css/wap.css";
</style>
