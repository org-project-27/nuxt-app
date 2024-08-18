<template>
  <div id="getstarted-page">
    <div class="banner-area">
      <banner-component :banner="bannerKey"/>
    </div>
    <div class="getstarted-container default-container">
      <nav id="getstarted-views-nav" class="flex-row-center">
        <nuxt-link
            class="flex-row-center"
            :id="page"
            v-for="page in views"
            :class="{'active': page === currentView}"
            :key="page"
            :to="`?view=${page}`">
          {{ $t(`pages.${page}`) }}
        </nuxt-link>
      </nav>
      <section id="getstarted-layout" :class="`${currentView}-area`" class="default-container">
        <component :is="currentView"/>
      </section>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import sign_up from "~/components/views/signUp.vue";
import log_in from "~/components/views/logIn.vue";
import forgot_password from "~/components/views/forgotPassword.vue";
import colorUtilities from "~/constants/colorUtilities.js";
import type {BannersType} from "assets/images/banners/bannersList.js";

export default defineComponent({
  name: "get-started",
  methods: {},
  components: {sign_up, log_in, forgot_password},
  data: () => {
    return {
      bannerColor: colorUtilities.$main_color,
      views: ['log_in', 'sign_up']
    }
  },
  computed: {
    currentView() {
      let {view} = this.$route.query;
      if (view && this.views.includes(view?.toString())) {
        return view;
      } else if(view === 'forgot_password'){
        return 'forgot_password'
      }
      return this.views[0];
    },
    bannerKey(): BannersType {
      if(this.currentView === 'sign_up'){
        return "user_register";
      } else if(this.currentView === 'log_in') {
        return "user_login"
      } else if(this.currentView === 'forgot_password') {
        return "forgot_password"
      } else if(this.currentView === 'reset_password') {
        return "reset_password"
      }
    }
  },
  mounted(){
    if(this.currentView && !this.$route.query.view){
      this.$router.push(`?view=${this.currentView}`);
    }
  },
})
</script>
<style lang="scss">

#getstarted-page {
  $layout-width: 35rem;
  $border-radius: 1.4rem;
  $nav-active-color: $main_color;
  $border-style: 2px solid $nav-active-color;
  $border-style-disabled: 1px solid lighten($second_white_color, 3%);
  overflow: hidden !important;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10%;
  .banner-area {
    .svg-banner-element > svg{
      @include animate-intro-shifting-x-reverse(1s);
    }
  }
  & > div {
    width: 50%;
    height: 100%;
  }
  .getstarted-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    nav#getstarted-views-nav {
      min-height: calc(1rem + $border-radius / 2);
      max-height: calc(3.5rem + $border-radius / 2);
      padding-top: 1px;
      & > a {
        border: $border-style-disabled;
        font-size: $font-size-big;
        &#sign_up {
          &.active{
            border-right: $border-style;
            border-left: $border-style;
            border-top-left-radius: $border-radius;
            border-top-right-radius: $border-radius;
          }
        }
        &#log_in {
          &.active{
            border-left: $border-style;
            border-right: $border-style;
            border-top-left-radius: $border-radius;
            border-top-right-radius: $border-radius;
          }
        }
        &#sign_up, &#log_in {
          height: 100%;
          color: $main_black_color;
          border-top-left-radius: $border-radius;
          border-top-right-radius: $border-radius;
          border-top: $border-style-disabled;
          border-bottom: $border-style;
        }
        &.active {
          color: $nav-active-color !important;
          background-color: $main_white_color !important;
          border-bottom: none !important;
          border-top: $border-style !important;
          box-shadow: none !important;
          font-size: $font-size-input;
        }
        &:hover{
          opacity: 1;
        }
      }
    }
    section#getstarted-layout {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      overflow: hidden !important;
      border-bottom-left-radius: $border-radius !important;
      border-bottom-right-radius: $border-radius !important;
      box-shadow: $box_shadow_1 !important;
      #sign-up-page,
      #log-in-page,
      #forgot-password-page{
        width: 100%;
        border-bottom-left-radius: $border-radius !important;
        border-bottom-right-radius: $border-radius !important;
        border-bottom: $border-style;
        padding: 1.5rem 0 2.5rem 0;
      }
    }
  }
}

@include for-size($tablet-size, 100vw) {
  $layout-width: 32rem;
  $border-radius: 1.5rem;
  #getstarted-page {
    margin: 1rem 0;
    .getstarted-container{
      border-radius: $border-radius;
      nav#getstarted-views-nav {
        height: 3.7rem;
        width: $layout-width;
        & > a {
          width: calc($layout-width/2);
          &#sign_up, &#log_in {
          }
          &.active {
          }
        }
      }
      section#getstarted-layout {
        width: $layout-width;
        #sign-up-page,
        #log-in-page {
        }
      }
    }
  }
}

@include for-size($small-mobile-size, $tablet-size) {
  $layout-width: 92vw;
  $border-radius: 1rem;
  #getstarted-page {
    margin: .1vh 0;
    border-radius: $border-radius;
    overflow: hidden;
    .getstarted-container{
      border-radius: $border-radius;
      nav#getstarted-views-nav {
        height: 3.6rem;
        width: $layout-width;
        & > a {
          width: calc($layout-width/2);
          &#sign_up, &#log_in {
          }
          &.active {
          }
        }
      }
      section#getstarted-layout {
        width: $layout-width;
        #sign-up-page,
        #log-in-page {
        }
      }
    }
  }
}
</style>