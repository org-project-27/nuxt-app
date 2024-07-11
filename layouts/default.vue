<script setup lang="ts">
import { ref, computed } from 'vue';
import availableAppRoutes from "~/constants/availableAppRoutes.js";
import { useDeviceDetector } from '~/composables/useWindowSize';

const { deviceType } = useDeviceDetector();
const readyForView = computed(() => deviceType.value !== undefined && deviceType.value !== null);

const deviceTypeSafe = computed(() => deviceType.value || 'unknown');
</script>

<template>
  <loading-page-component v-if="!readyForView"/>
  <div :id="`default-layout-${deviceTypeSafe}`"
       v-if="readyForView"
       class="container flex-column-start-center">
    <header class="flex-row-between-center">
      <div class="left-side">
        <logo-component/>
      </div>
      <div class="middle">
        search
      </div>
      <div class="right-side">
        <nuxt-link :to="availableAppRoutes.get_started">
          Login
        </nuxt-link>
        <nuxt-link :to="availableAppRoutes.account">
          Signup
        </nuxt-link>
      </div>
    </header>
    <main>
      <slot></slot>
    </main>
  </div>
</template>


<style scoped lang="scss">
// Global:
.container {
  width: 100vw;
  & > *{

  }
  header {

  }
}

// Mobile size:
@include for-size($small-mobile-size, $tablet-size) {
  #default-layout-mobile.container {
    & > *{
      background-color: lime !important;
      width: 100%;
    }
    header {
      background-color: $header-background-color;
      height: $default-layout-header-height;
      box-shadow: $box_shadow_1;
    }
  }
}

// Tablet size:
@include for-size($tablet-size) {
  #default-layout-tablet.container {
    & > *{
      background-color: blue !important;
      width: 100%;
    }
    header {
      background-color: $header-background-color;
      height: $default-layout-header-height;
      box-shadow: $box_shadow_1;
    }
  }
}

// Desktop size:
@include for-size($tablet-size, 100vw) {
  #default-layout-desktop.container {
    & > *{
      background-color: red !important;
      width: 80%;
    }
    header {
      background-color: $header-background-color;
      height: $default-layout-header-height;
      box-shadow: $box_shadow_1;
    }
  }

}
</style>