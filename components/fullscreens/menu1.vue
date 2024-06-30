<template>
  <div id="menu-1" class="fullscreen-menu">
    <nav class="fullscreen-nav">
      <nuxt-link
          v-for="(navigate, index) in menuNavigations"
          :key="index"
          :class="{'active': currentPath === navigate.url}"
          :to="navigate.url">
        <icon-component
            :icon-name="navigate.icon"
            :fill="currentPath === navigate.url"
            :color="currentPath === navigate.url
            ? colorUtilities.$main_color : colorUtilities.$second_white_color"
            icon-size="30"/>
        <span>{{ $t(navigate.label) }}</span>
      </nuxt-link>
    </nav>
    <nav class="fullscreen-nav logout" v-if="isAuthenticated">
      <nuxt-link to="/" @click="logOut">
        <icon-component
            icon-name="logout"
            :color="colorUtilities.$error_color"
            icon-size="30"/>
        <span>{{ $t('buttons.logout') }}</span>
      </nuxt-link>
    </nav>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import {headerRoutes} from "assets/scripts/constants/availableAppRoutes";
import {useAuthStore} from "~/stores/user/auth";

export default defineComponent({
  name: "menu1",
  computed: {
    currentPath() {
      return this.$route.fullPath
    },
    colorUtilities() {
      return useNuxtApp().$colorUtilities;
    },
    isAuthenticated(){
      return  useAuthStore().isAuthenticated;
    }
  },
  data() {
    return {
      menuNavigations: headerRoutes.authRoutes
    }
  },
  methods: {
    logOut() {
      const { logout } = useAuthStore();
      logout();
    }
  }
})
</script>

<style lang="scss" scoped>
#menu-1{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > nav.logout{
    background-color: lighten($error_color, 3%);
    border-top: 1px solid $second_white_color;
    span {
      color: $error_color
    }
  }
}
</style>
