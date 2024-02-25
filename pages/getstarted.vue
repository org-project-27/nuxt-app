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

export default defineComponent({
  name: "get-started",
  components: {sign_up, log_in},
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
      }
      this.$router.push('?view=log_in');
      return null;
    }
  },
})
</script>
<style lang="scss">
$layout-width: 35rem;
$border-style: .1rem solid $black_color_6;
$border-radius: 1.5rem;

#getstarted-page {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  .getstarted-container{
    border-radius: $border-radius;
    overflow: hidden;
    box-shadow: $box-shadow-1;
    nav#getstarted-views-nav {
      width: $layout-width;
      height: 3.5rem;
      background-color: lighten($white_color_1, 3%);
      position: relative;
      //overflow: hidden;

      & > a {
        width: calc($layout-width/2);
        height: 100%;
        font-size: 1.3rem;
        &#sign_up, &#log_in {
          color: $main_color;
          border-bottom: 2px solid $main_color;
        }
        &.active {
          color: $black_color_1 !important;
          background-color: $white_color !important;
          border: none !important;
          font-size: 1.2rem;
        }
      }
    }
    section#getstarted-layout {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: $layout-width;
      height: 100%;
      overflow: hidden;
      #sign-up-page,
      #log-in-page {
        width: 100%;
        padding: 1.5rem 0 2.5rem 0;
      }
    }
  }
}
</style>