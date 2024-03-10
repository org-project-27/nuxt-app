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
            :color="currentPath === navigate.url
            ? colorUtilities.$main_color : colorUtilities.$white_color_9"
            icon-size="30"/>
        <span>{{ navigate.label }}</span>
      </nuxt-link>
    </nav>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "menu1",
  computed: {
    currentPath() {
      return this.$route.fullPath
    },
    colorUtilities() {
      return useNuxtApp().$colorUtilities;
    }
  },
  data() {
    return {
      menuNavigations: [
        {
          url: '/account/user',
          icon: 'person',
          label: this.$t('pages.profile')
        },
        {
          url: '/account/favorites',
          icon: 'favorite',
          label: this.$t('pages.favorites')
        },
        {
          url: '/account/cart',
          icon: 'shopping_cart',
          label: this.$t('pages.cart')
        },
      ]
    }
  }
})
</script>
