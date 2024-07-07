<template>
  <div
      id="default-layout"
      class="container flex-column-between-center">
    <header-component/>
    <main :key="renderKey">
      <div class="responsive-width">
        <slot v-if="waitingForAuthProgress === false"/>
        <loading-page-component v-else/>
      </div>
    </main>
    <footer>
      <slot name="footer">
      </slot>
    </footer>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useAuthStore } from '~/stores/user/auth';
import LoadingPageComponent from '~/components/LoadingPageComponent.vue';
import HeaderComponent from "~/components/layouts/default/HeaderComponent.vue";

export default defineComponent({
  name: "DefaultLayout",
  components: { LoadingPageComponent, HeaderComponent },
  computed: {
    authProgressIsLoading(){
      return useAuthStore().authProgressIsLoading;
    },
    currentPath(){
      return this.$route
    },
    renderKey(){
      return useConfigsStore().renderKey;
    }
  },
  data(){
    return {
      waitingForAuthProgress: null,
    }
  },
  mounted(){
    this.waitingForAuthProgress = this.authProgressIsLoading;
  },
  watch: {
    authProgressIsLoading(val){
      this.waitingForAuthProgress = val;
    }
  }
});
</script>

<style lang="scss">
@include for-size($tablet-size, 100vw) {
  $layout-width: 100%;
  #default-layout.container{
    gap: $default-layout-section-gap;
    main{
      border-radius: 1rem;
      overflow: hidden;
      min-height: 70vh;
    }
    footer{
      min-height: 30rem;
      width: 100%;
      box-shadow: $box_shadow_1;
      background-color: $footer_background_color;
      color: $footer_font_color;
    }
  }
}

@include for-size($small-mobile-size, $tablet-size) {
  $layout-width: 100%;
  #default-layout.container{
    gap: $default-layout-section-gap;
    margin-top: $default-layout-header-height-mobile;
    main{
      margin-top: calc($default-layout-header-height-mobile / 2.5);
      border-radius: 1rem;
      overflow: hidden;
      min-height: 70vh;
    }
    footer{
      min-height: 30rem;
      width: 100%;
      box-shadow: $box_shadow_1;
      background-color: $footer_background_color;
      color: $footer_font_color;
    }
  }
}
</style>