<script setup lang="ts">
import {ref, computed} from 'vue';
import availableAppRoutes, {headerRoutes} from "~/constants/availableAppRoutes.js";
import {useRoute} from 'vue-router';
import {useDeviceDetector} from "~/composables/useWindowSize";
import DefaultSearchComponent from "~/components/layouts/default/DefaultSearchComponent.vue";

const route = useRoute();
const {deviceType} = useDeviceDetector();
const {isAuthenticated} = useAuthStore();
const currentPath = computed(() => route.path);
const readyForView = computed(() => deviceType.value !== undefined && deviceType.value !== null);
const deviceTypeSafe = computed(() => deviceType.value || 'unknown');
</script>

<template>
  <header :id="`header-component-default-${deviceTypeSafe}`" class="flex-row-between-center" v-show="readyForView">
    <section class="left-side flex-row-between-center">
      <div class="logo-area">
        <logo-component/>
      </div>
      <nav class="header-navigation-area">
        <nuxt-link
            v-for="nav in headerRoutes.defaultLayoutHeaderNavLinks"
            class="type_1"
            :class="{
                'active': currentPath === nav.url,
              }"
            :to="nav.url"
        >
          {{ $t(nav.label) }}
        </nuxt-link>
      </nav>
    </section>
    <section class="right-side flex-row-between-center">
      <div class="search-area">
        <default-search-component/>
      </div>
      <div class="lang-switcher-area">
        <lang-switcher-component/>
      </div>
      <div class="auth-area flex-row-start-center" v-if="!isAuthenticated">
        <nuxt-link :to="availableAppRoutes.login" class="type_4">
          {{ $t('pages.log_in') }}
        </nuxt-link>
        <nuxt-link :to="availableAppRoutes.signup" class="type_3">
          {{ $t('pages.sign_up') }}
        </nuxt-link>
      </div>
      <div v-else>
        <account-dropdown/>
      </div>
    </section>
  </header>
</template>


<style scoped lang="scss">
// Global:
header {
  width: 100%;
  overflow: hidden;
}

// Mobile size:
@include for-size($small-mobile-size, $tablet-size) {
  header#header-component-default-mobil {
    background-color: lime;
  }
}

// Tablet size:
@include for-size($tablet-size) {
  header#header-component-default-tablet {
    background-color: blue;
  }
}

// Desktop size:
@include for-size($tablet-size, 100vw) {
  header#header-component-default-desktop {
      height: $default-layout-header-height;

      section {
      }

      section.left-side {
        gap: 10%;

        nav.header-navigation-area {
          display: flex;
          align-items: center;
          gap: 6%;
        }
      }

      section.right-side {
        gap: 1.5rem;

        .auth-area {
          gap: .5rem;

          .special-button-area {
            background-color: $warning_color;
            border-radius: 10rem;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: .2rem;

            & > div {
              position: relative;
              top: -1px;
            }
          }
        }

        .search-area {
        }
      }
    }
}
</style>