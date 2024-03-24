<template>
  <div id="getstarted-page">
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
<script>
import {defineComponent} from 'vue'
import sign_up from "~/components/views/signUp.vue";
import log_in from "~/components/views/logIn.vue";
import forgot_password from "~/components/views/forgotPassword.vue";

export default defineComponent({
  name: "get-started",
  components: {sign_up, log_in, forgot_password},
  data: () => {
    return {
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
      this.$router.push('?view=log_in');
      return null;
    }
  },
})
</script>
<style lang="scss">

#getstarted-page {
  $layout-width: 35rem;
  $border-radius: 1rem;
  $nav-active-color: $main_color_2;
  $border-style: 2px solid $nav-active-color;
  $border-style-disabled: 1px solid lighten($white_color_6, 3%);

  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  .getstarted-container{
    margin-top: 1rem;
    nav#getstarted-views-nav {
      min-height: 3.2rem;
      max-height: 3.5rem;
      background-color: $main_background_color;
      padding-top: 1px;
      & > a {
        border: $border-style-disabled;
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
          color: darken($white_color_9, 20%);
          border-top-left-radius: $border-radius;
          border-top-right-radius: $border-radius;
          border-top: $border-style-disabled;
          border-bottom: $border-style;
        }
        &.active {
          color: $nav-active-color !important;
          background-color: $white_color !important;
          border-bottom: none !important;
          border-top: $border-style !important;
          font-size: 1.3rem;
          box-shadow: none !important;
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
        height: 3.3rem;
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
  $layout-width: 93vw;
  $border-radius: 1rem;
  #getstarted-page {
    margin: .1vh 0;
    border-radius: $border-radius;
    overflow: hidden;
    .getstarted-container{
      border-radius: $border-radius;
      nav#getstarted-views-nav {
        height: 4vh;
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