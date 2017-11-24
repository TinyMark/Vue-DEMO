<template>
    <div class="warp">
        <mc-header></mc-header>
        <mc-container></mc-container>
        <mc-footer></mc-footer>
    </div>
</template>

<script>
    import mcHeader from "../components/common/mcHeader.vue";
    import mcContainer from "../components/common/mcContainer.vue";
    import mcFooter from "../components/common/mcFooter.vue";
    export default {
      data() {
        return {};
      },
      components: {
        "mc-header": mcHeader,
        "mc-container": mcContainer,
        "mc-footer": mcFooter
      }
    };
</script>

<style>
    @import "../assets/css/reset.css";
    @import "../assets/css/wap.css";
</style>
