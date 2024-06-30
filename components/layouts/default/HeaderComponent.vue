<template>
  <header id="header-default-layout">
    <section class="responsive-width responsive-visibility-1">
      <div class="wrapper-area">
        <nuxt-link
            v-for="i in 4" :key="i"
            :to="'/posts/link'+i"
            class="child cannot-select flex-column-center">
          Link {{ i }}
        </nuxt-link>
        <lang-switcher-component/>
      </div>
      <div class="main-area">
        <logo-component/>
        <div class="search-area">
          Search the product, category or brand you are looking for
        </div>
        <nav class="auth-area">
          <nuxt-link v-for="navigation in headerRoutes.authRoutes"
                     :key="navigation.url"
                     :to="navigation.url">
            <icon-component
                :icon-name="navigation.icon"
                icon-size="1.7rem"/>
            <span>{{ $t(navigation.label) }}</span>
          </nuxt-link>
        </nav>
      </div>
      <div class="navigation-area hide-for-tablet">
        <nav>
          <nuxt-link
              class="type_1"
              v-for="i in categories.length"
              :class="{'active': i == currentPath.params.id}"
              :to="'/categories/'+i" :key=i>
            {{ categories[i - 1] }}
          </nuxt-link>
        </nav>
      </div>
    </section>
    <section class="responsive-width responsive-visibility-2">
      <logo-component/>
      <div style="display: flex; align-items: center; gap: 10px">
        <lang-switcher-component/>
        <NuxtLink :to="currentPath" @click="setFullscreenModal">
          <icon-component
              :icon-name="status ? 'close' : 'menu'"
              :color="colorUtilities.$second_white_color"
              icon-size="30"/>
        </NuxtLink>
      </div>
    </section>
  </header>

</template>

<script setup lang="js">
import {useRoute} from 'vue-router';
import menu1 from "~/components/fullscreens/menu1.vue";
import {headerRoutes} from "assets/scripts/constants/availableAppRoutes.js";

const {getCategories} = usePostsStore();
const categories = getCategories(10);
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
@include for-size($tablet-size, 100vw) {
  header#header-default-layout {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background-color: $header-background-color;
    min-height: $default-layout-header-height;
    width: 100%;
    box-shadow: $box_shadow_1;

    section {
      margin-top: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: .1rem;

      & > * {
        width: 100%;
        display: flex;
        align-items: center;
        color: $header_font_color !important;
      }

      .wrapper-area {
        height: calc($default-layout-header-height * (1 / 6));
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        gap: 2rem;

        a {
          font-size: 1.1rem;
          color: $header_font_color !important;
        }
      }

      .main-area {
        height: calc($default-layout-header-height * (3 / 6));
        gap: 2rem;

        .search-area {
          background-color: $main_background_color;
          width: 90%;
          height: 40px;
          display: flex;
          align-items: center;
          border-radius: .8rem;
          padding: 0 20px;
          color: $main_black_color;
        }

        .auth-area {
          display: flex;
          gap: 1.5rem;

          a {
            white-space: nowrap;
            color: unset !important;
            display: flex;
            align-items: center;
            gap: .2rem;
          }
        }
      }

      .navigation-area {
        display: flex;
        align-items: center !important;
        justify-content: center !important;
        margin-top: 1.2rem;

        nav {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1.1rem;
        }
      }
    }
  }
}

@include for-size($small-mobile-size, $tablet-size) {
  $layout-width: 100%;
  header#header-default-layout {
    overflow: hidden;
    display: flex;
    position: fixed;
    top: 0;
    z-index: 1000;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: $header-background-color;
    min-height: $default-layout-header-height-mobile;
    width: 100%;
    border-bottom: 2px solid $main_white_color;

    section {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      & > * {
        min-width: 50px;
      }
    }
  }
}
</style>