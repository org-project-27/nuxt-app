<template>
  <header id="header-default-layout">
    <!-- Desktop Size -->
    <section class="header-1 responsive-visibility-1" v-if="deviceType === 'desktop'">
      <logo-component type="1"/>
      <nuxt-link :to="availableAppRoutes.profile">
        Click me
      </nuxt-link>
    </section>
    <!-- Mobile Size -->
    <section class="header-2 responsive-visibility-2" v-if="deviceType === 'mobile'">
      <div class="logo-section">
        <logo-component type="2" size="3.5"/>
      </div>
      <form class="search-area" @submit.prevent="handleSearch">
        <input
            type="search"
            :placeholder="$t('buttons.search')+'...'"
            :aria-label="$t('buttons.search')"
            v-model="searchQuery"
        />
        <button type="submit">
          <icon-component icon-name="search" icon-size="20"/>
        </button>
      </form>
      <div class="burger-menu">
        <nuxt-link :to="availableAppRoutes.profile">
          <icon-component icon-name="menu" icon-size="30"/>
        </nuxt-link>
      </div>
    </section>
  </header>
</template>
<script lang="js">
import availableAppRoutes from "~/constants/availableAppRoutes";

export default {
  data() {
    return {
      availableAppRoutes,
      searchQuery: '',
    };
  },
  computed: {
    deviceType(){
      const {deviceType} = useConfigsStore();
      return deviceType;
    }
  },
  methods: {
    handleSearch() {
      // Method to handle the search form submission
      console.log(this.searchQuery); // Replace with actual search logic
    },
  },
};
</script>

<style scoped lang="scss">
@include for-size($tablet-size, 100vw) {
  header#header-default-layout {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: $header-background-color;
    min-height: $default-layout-header-height;
    width: 100%;
    box-shadow: $box_shadow_1;
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
    height: $default-layout-header-height-mobile;
    width: 100%;
    box-shadow: $box_shadow_2;
    section {
      width: 85%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      .search-area {
        width: 65%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 55%;
        border-radius: 10px;
        overflow: hidden;
        input, button {
          border: none;
          outline: none;
          height: 100%;
        }
        input {
          background-color: $third_background_color;
          padding: 0 1em;
          width: 80%;
        }
        button {
          width: 20%;
          background-color: $main_gray_color;
        }
      }
    }
  }
}
</style>