<template>
  <header id="fullscreeen-header-default-layout">
    <section class="responsive-width responsive-visibility-2">
      <NuxtLink to="/" class="brand-area cannot-select" @click="setFullscreenModal">
        <span>&nbsp;{{ brandName }}</span>
      </NuxtLink>
      <NuxtLink :to="currentPath" @click="setFullscreenModal">
        <icon-component
            :icon-name="status ? 'close' : 'menu'"
            :color="colorUtilities.$white_color_9"
            icon-size="30"/>
      </NuxtLink>
    </section>
  </header>

</template>

<script setup lang="js">
import {useRoute} from 'vue-router';
import menu1 from "~/components/fullscreens/menu1.vue";

const {brandName} = useAppConfig();

const currentPath = useRoute();
const colorUtilities = useNuxtApp().$colorUtilities;

const {status, setStatus, setView} = useFullscreenModal();

function setFullscreenModal() {
  setStatus(!status);
  if(status){
    setView(null);
  } else {
    setView(menu1);
  }
}

</script>

<style scoped lang="scss">
@include for-size($small-mobile-size, $tablet-size) {
  $layout-width: 100%;
  header#fullscreeen-header-default-layout {
    @include animate-fade-in();
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: $header-background-color;
    height: $default-layout-header-height-mobile;
    width: 100%;
    border-bottom: 2px solid $white-color-6;

    section {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .brand-area {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        font-weight: bolder;

        span {
          color: $black_color;
          text-transform: lowercase;
        }
      }

      & > * {
        min-width: 50px;
      }
    }
  }
}
</style>