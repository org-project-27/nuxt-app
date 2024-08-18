<script setup lang="ts">
import {ref, computed} from 'vue';
import {useDeviceDetector} from '~/composables/useWindowSize';
import HeaderComponent from "~/components/layouts/default/DefaultHeaderComponent.vue";

const {deviceType} = useDeviceDetector();
const readyForView = computed(() => deviceType.value !== undefined && deviceType.value !== null);
const deviceTypeSafe = computed(() => deviceType.value || 'unknown');
</script>

<template>
  <loading-page-component v-if="!readyForView"/>
  <div :id="`default-layout-${deviceTypeSafe}`"
       v-if="readyForView"
       class="container flex-column-start-center">
    <header-component/>
    <main>
      <slot></slot>
    </main>
  </div>
</template>


<style scoped lang="scss">
// Global:
.container {
  width: 99vw;

  & > * {
    background-color: $main_background_color;
    width: 100%;
  }
}

// Mobile size:
@include for-size($small-mobile-size, $tablet-size) {
  #default-layout-mobile.container {
    & > * {
      background-color: lime !important;
    }

  }
}

// Tablet size:
@include for-size($tablet-size) {
  #default-layout-tablet.container {
    & > * {
      background-color: blue !important;
    }

  }
}

// Desktop size:
@include for-size($tablet-size, 100vw) {
  #default-layout-desktop.container {
    & > * {
      max-width: 2000px;
      width: 90%;
    }
    gap: 5rem;
  }

}
</style>