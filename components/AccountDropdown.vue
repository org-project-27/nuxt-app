<script lang="ts" setup>
import {getCDN} from "~/utils/helpers/generalHelpers";
import availableAppRoutes from "~/constants/availableAppRoutes";
import {watchEffect} from "vue";

const { modelAuth } = useAuthStore();
const profileSrc = getCDN(modelAuth.details.profile_photo_id);
const menuTrigger = ref(false);

function toggleMenu(val: boolean) {
  menuTrigger.value = val;
}

</script>
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AccountDropdown",
})
</script>

<template>
  <div
      id="account-dropdown"
      v-if="$route.path !== availableAppRoutes.profile"
      :key="$route.path"
      @mouseenter="toggleMenu(true)"
      @mouseleave="toggleMenu(false)">
    <nuxt-link
        :to="availableAppRoutes.profile"
        :class="{'active': menuTrigger}"
        class="account-avatar-area">
      <img v-if="profileSrc" :src="profileSrc" :alt="modelAuth.details.fullname?.toString()"/>
      <div class="avatar-with-name" v-else>
        {{modelAuth.details.fullname}};
      </div>
    </nuxt-link>
    <div class="dropdown-area" v-if="menuTrigger">
      <ul class="dropdown-menu">
        <li>Link 1</li>
        <li>Link 1</li>
        <li>Link 1</li>
        <li>Link 1</li>
        <li>Link 1</li>
        <li>Link 1</li>
        <li>Link 1</li>
        <li>Link 1</li>
        <li>Link 1</li>
        <li>Link 1</li>
        <li>Link 1</li>
        <li>Link 1</li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
#account-dropdown {
  @include animate-intro-shifting-x(1s);
  .account-avatar-area {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    overflow: hidden;
    width: 3rem;
    height: 3rem;
    box-shadow: $box_shadow_1;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .account-avatar-area.active {
    @include animate-box-shadow(1s);
  }
  .dropdown-area {
    $dropdown-width: 15rem;
    position: absolute;
    ul.dropdown-menu {
      position: relative;
      top: 1rem;
      margin-left: calc(($dropdown-width * -1) + 5rem);
      width: $dropdown-width;
      background-color: red;
    }
  }
}
</style>