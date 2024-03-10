<template>
  <div id="fullscreen-modal" v-if="status && view">
    <header-component/>
    <component :is="view"/>
  </div>
</template>

<script lang="ts" setup>
import HeaderComponent from "~/components/fullscreens/FullscreenHeaderComponent.vue";

const { status, view } = useFullscreenModal();
</script>

<style scoped lang="scss">
#fullscreen-modal{
  position: absolute;
  top: 0;
  left: 0;
  background: $main_background_color;
  width: 100vw;
  height: 100vh;
}
</style>