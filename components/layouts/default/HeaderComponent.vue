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
      </div>
      <div class="main-area">
        <NuxtLink to="/" class="brand-area cannot-select">
          <span>&nbsp;{{ brandName }}</span>
        </NuxtLink>
        <div class="search-area">
          Search the product, category or brand you are looking for
        </div>
        <nav class="auth-area">
          <nuxt-link to="/account/user">
            <icon-component
                icon-name="person"
                icon-size="1.7rem"/>
            <span>{{ $t('pages.profile') }}</span>
          </nuxt-link>
          <nuxt-link to="/account/favorites">
            <icon-component
                icon-name="favorite"
                icon-size="1.7rem"/>
            <span>{{ $t('pages.favorites') }}</span>
          </nuxt-link>
          <nuxt-link to="/account/cart">
            <icon-component
                icon-name="shopping_cart"
                icon-size="1.7rem"/>
            <span>{{ $t('pages.cart') }}</span>
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
      <NuxtLink to="/" class="brand-area cannot-select">
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

const {getCategories} = usePostsStore();
const {brandName} = useAppConfig();

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
    @include animate-fade-in();
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
        flex-direction: row-reverse;
        gap: 2rem;

        a {
          font-size: 1.1rem;
          color: $header_font_color !important;
        }
      }

      .main-area {
        height: calc($default-layout-header-height * (3 / 6));
        gap: 2rem;

        .brand-area {
          display: flex;
          align-items: center;
          font-size: 2.5rem;
          font-family: Arial, sans-serif;
          font-weight: bolder;
          color: $main_color !important;

          span {
            text-transform: lowercase;
          }
        }

        .search-area {
          background-color: $main_background_color;
          width: 90%;
          height: 40px;
          display: flex;
          align-items: center;
          border-radius: .8rem;
          padding: 0 20px;
          color: $black_color_4;
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
    @include animate-fade-in();
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: $header-background-color;
    min-height: $default-layout-header-height-mobile;
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