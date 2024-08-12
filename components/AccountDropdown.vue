<script lang="ts" setup>
import colorUtilities from "~/constants/colorUtilities";
import {getCDN} from "~/utils/helpers/generalHelpers";
import availableAppRoutes, {accountLayoutNavLinks} from "~/constants/availableAppRoutes";
import {useI18nStore} from "~/stores/i18n";
import {useAuthStore} from "~/stores/user/auth";
const {modelAuth, logout} = useAuthStore();
const profileSrc = getCDN(modelAuth.details.profile_photo_id);
const menuTrigger = ref(false);

function toggleMenu(val: boolean) {
  menuTrigger.value = val;
}

function t(value: any) {
  const i18n = useI18nStore().i18n.global
  //@ts-ignore
  return i18n.t(value);
}

function firstChars(str: string): string {
  const splitFullName = str.split(' ');

  return splitFullName[0][0] + splitFullName[1][0]
}
async function logOut() {
  await logout();
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
        {{firstChars(modelAuth.details.fullname!)}}
      </div>
    </nuxt-link>
    <div class="dropdown-area" v-if="menuTrigger">
      <ul class="dropdown-menu">
        <li v-for="nav in [...accountLayoutNavLinks.menu, ...accountLayoutNavLinks.general]">
          <nuxt-link
              :key="nav.label"
              :class="{'active': $route.path === nav.link }"
              :to="nav.link">
            <div class="flex-row-start-center" style="gap: .6rem">
              <label>
                {{ t(`layouts.account_layout.navbar.links.${nav.label}`) }}
              </label>
            </div>
          </nuxt-link>
        </li>
        <li @click.prevent="logOut">
            <nuxt-link class="transparent-btn">
              <div class="flex-row-start-center" style="gap: .6rem">
                <div class="icon-area">
                  <icon-component
                      icon-name="logout"
                      icon-size="22"
                      :color="colorUtilities.$error_color"/>
                </div>
                <label>
                  {{ t('buttons.logout') }}
                </label>
              </div>
            </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
#account-dropdown {
  $shape-size: 2.5rem;
  .account-avatar-area {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    overflow: hidden;
    width: $shape-size;
    height: $shape-size;
    box-shadow: $box_shadow_1;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
    .avatar-with-name {
      background-color: $main_color;
      color: $main_white_color;
      font-weight: 700;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .account-avatar-area.active {
    @include animate-box-shadow(1s);
  }
  .dropdown-area {
    @include animate-fade-in(.1s);
    $dropdown-width: 15rem;
    position: absolute;
    ul.dropdown-menu {
      position: relative;
      top: .8rem;
      overflow: hidden;
      width: $dropdown-width;
      border-radius: .8rem;
      margin-left: calc(($dropdown-width * -1) + 3rem);
      background-color: $main_background_color;
      border: 1px solid $default_border_color;
      box-shadow: $box_shadow_2;
      li {
        list-style: none;
        cursor: pointer;
        a, button {
          label {
            cursor: pointer;
            font-weight: 400;
            color: $third_gray_color;
            font-size: $font-size-input;
          }
          display: block;
          color: $text_color;
          padding: .7rem 1rem;
        }
        &:hover {
          .icon-area {
            transform: scale(1.26);
          }
          label { color: $text_color }
          background-color: $second_color_transparent;
        }
      }
    }
  }
}
</style>