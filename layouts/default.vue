<template>
  <fullscreen-modal v-if="fullscreenModal.status"/>
  <div
      v-show="!fullscreenModal.status"
      id="default-layout"
      class="container flex-column-between-center">
    <header-component/>
    <main :key="renderKey">
      <div class="responsive-width">
        <slot v-if="waitingForAuthProgress === false && deviceType"/>
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
    deviceType(){
      return useConfigsStore().deviceType;
    },
    fullscreenModal(){
      return useFullscreenModal();
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

<script setup>
import FullscreenModal from "~/components/FullscreenModal.vue";
</script>

<style lang="scss">
@import "assets/stylesheets/layouts/default";
</style>