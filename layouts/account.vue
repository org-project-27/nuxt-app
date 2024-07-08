<script lang="ts">
import {defineComponent} from 'vue'
import {useAuthStore} from "~/stores/user/auth";
import {useConfigsStore} from "~/stores/configs"
import {useI18nStore} from "~/stores/i18n"
import colorUtilities from "~/constants/colorUtilities";
import availableAppRoutes, {accountLayoutNavLinks} from "~/constants/availableAppRoutes";

export default defineComponent({
  name: "account",
  computed: {
    availableAppRoutes() {
      return availableAppRoutes
    },
    authProgressIsLoading() {
      return useAuthStore().authProgressIsLoading;
    },
    currentPath() {
      return this.$route.path
    },
    currentPage(): any {
      let result = null;
      Object.values(this.accountLayoutNavLinks).forEach((group: any[]) => {
        group.forEach(nav => {
          if (nav.link === this.currentPath) {
            result = nav;
          }
        });
      });
      return result;
    },
    renderKey() {
      return useConfigsStore().renderKey;
    },
  },
  data() {
    const waitingForAuthProgress: any = null;
    return {
      waitingForAuthProgress,
      colorUtilities,
      accountLayoutNavLinks,
      sidebarVisible: true,
    }
  },
  mounted() {
    this.waitingForAuthProgress = this.authProgressIsLoading;
    this.sidebarVisible = this.availableAppRoutes.account === this.currentPath;
  },
  watch: {
    authProgressIsLoading(val) {
      this.waitingForAuthProgress = val;
    },
    currentPath(){
      this.sidebarVisible = false;
    }
  },
  methods: {
    t(value: any) {
      const i18n = useI18nStore().i18n.global
      //@ts-ignore
      return i18n.t(value);
    }
  }
})
</script>
<script setup lang="ts">
import { useDeviceDetector } from '~/composables/useWindowSize';
const {deviceType} = useDeviceDetector();
</script>

<template>
  <div :id="`account-layout-${deviceType}`" class="container flex-column-between-center" v-if="deviceType">
    <section>
      <aside :class="{'active': sidebarVisible}">
        <div class="logo flex-row-start-center">
          <logo-component v-if="deviceType !== 'tablet'" size="10"/>
          <logo-component v-else type="2" size="4"/>
          <lang-switcher-component v-if="deviceType === 'mobile'"/>
        </div>
        <div class="navbar">
          <nav v-for="(value, key) in accountLayoutNavLinks" :key="key">
            <label class="navbar-label">
              {{ t(`layouts.account_layout.navbar.groups.${key}`) }}
            </label>
            <nuxt-link
                v-for="nav in value"
                :key="nav.label"
                :class="{'active': currentPath === nav.link }"
                :to="nav.link">
              <div>
                <div>
                  <icon-component
                      :icon-name="nav.icon"
                      icon-size="33"
                      :fill="currentPath === nav.link"
                      :color="currentPath === nav.link ? colorUtilities.$main_color : colorUtilities.$second_gray_color"/>
                </div>
                <label>
                  {{ t(`layouts.account_layout.navbar.links.${nav.label}`) }}
                </label>
              </div>
            </nuxt-link>
          </nav>
        </div>
      </aside>
      <main :key="renderKey">
        <header class="flex-row-between-center">
          <div class="header-nav">
            <nuxt-link to="/">
              <icon-component icon-name="arrow_back_ios" icon-size="25" :color="colorUtilities.$main_color"/>
            </nuxt-link>
            <h2 v-if="currentPage">
              {{ t(`layouts.account_layout.navbar.links.${currentPage.label}`) }} {{ t(`layouts.account_layout.page`) }}
            </h2>
          </div>
          <div class="sidebar-controller" v-show="currentPath !== availableAppRoutes.account">
            <lang-switcher-component v-if="deviceType !== 'mobile'"/>
            <button @click="sidebarVisible = !sidebarVisible" v-else>
              <icon-component
                  :color="colorUtilities.$main_white_color"
                  icon-size="30"
                  icon-name="menu"
                  v-if="!sidebarVisible"/>
             <icon-component
                 :color="colorUtilities.$main_white_color"
                 icon-size="30"
                 icon-name="close"
                 v-else/>
            </button>
          </div>
        </header>
        <div class="responsive-width">
          <slot v-if="waitingForAuthProgress === false && deviceType"/>
          <loading-page-component v-else/>
        </div>
      </main>
    </section>
    <footer>
      <slot name="footer">
      </slot>
    </footer>
  </div>
</template>

<style scoped lang="scss">
// Mobile size:
@include for-size($small-mobile-size, $tablet-size) {
  $sidebar-width: 0%;
  $account_layout_header_height: 5em;
  $account_sidebar_padding: 1em 2.2em;
  $account_layout_border_color: 1.5px solid $default_border_color;
  #account-layout-mobile.container {
    section {
      min-height: 100vh;
      width: 100vw;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;

      & > aside {
        width: $sidebar-width;
        border-right: $account_layout_border_color;
        min-height: 100vh;
        transition-duration: .5s;
        position: absolute;
        overflow: hidden;
        left: 100%;
        .logo {
          padding: 0 2.5em;
          height: $account_layout_header_height;
          max-height: $account_layout_header_height;
          min-height: $account_layout_header_height;
          border-bottom: $account_layout_border_color;
          display: flex;
          align-items: center;
          justify-content: space-between;
          h1 {
            font-weight: bolder;
            font-size: 30px;
          }
        }

        .navbar {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.5em;
          margin-top: 2em;

          nav {
            display: flex;
            flex-direction: column;
            width: 100%;

            & > label {
              padding: $account_sidebar_padding;
              border-left: .4em solid transparent;
              color: $second_gray_color;
              font-weight: 600;
              font-size: 1.25em;
            }

            & > a {
              padding: $account_sidebar_padding;
              border-left: .4em solid transparent;

              & > div {
                display: flex;
                align-items: center;
                justify-content: flex-start !important;
                gap: 1.3em;
                cursor: pointer !important;

                label {
                  color: $text_color;
                  cursor: pointer !important;
                  font-weight: 600;
                  font-size: .95em;
                }
              }

              &:hover, &:active, &.active {
                opacity: 1;
                border-left: .4em solid $main_color !important;
              }

              &.active {
                background-color: $main_white_color;
              }
            }
          }
        }

        & > * {
        }
      }

      & > aside.active {
        width: 100%;
        border-right: $account_layout_border_color;
        background-color: $second_background_color;
        position: absolute;
        left: 0%;
      }

      & > main {
        transition-duration: .1s;
        width: calc(100vw - $sidebar-width);
        overflow: hidden;
        background-color: $main_background_color;

        header {
          height: $account_layout_header_height;
          background-color: $main_background_color;
          border-bottom: $account_layout_border_color;
          .sidebar-controller {
            button {
              border: none;
              position: fixed;
              right: 0;
              top: 15vh;
              padding: .6rem;
              background-color: lighten($main_color, 5);
              box-shadow: $box-shadow_1;
              border-bottom-left-radius: 1rem;
              border-top-left-radius: 1rem;
           }
          }
          .header-nav {
            display: flex;
            align-items: center;
            gap: .6rem;
          }
        }

        & > * {
          padding: 0 2em;
        }
      }
    }

    footer {
      min-height: 30rem;
      width: 100%;
      box-shadow: $box_shadow_1;
      background-color: $footer_background_color;
      color: $footer_font_color;
    }
  }
}
// Tablet size:
@include for-size($tablet-size) {
  $sidebar-width: 10%;
  $account_layout_header_height: 6em;
  $account_sidebar_padding: .7em 0;
  $account_layout_border_color: 1.5px solid $default_border_color;
  #account-layout-tablet.container {
    section {
      min-height: 100vh;
      width: 100vw;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;

      & > aside {
        width: $sidebar-width;
        border-right: $account_layout_border_color;
        background-color: $second_background_color;

        .logo {
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: $account_layout_header_height;
          max-height: $account_layout_header_height;
          min-height: $account_layout_header_height;
          border-bottom: $account_layout_border_color;

          h2 {
            font-weight: bolder;
            font-size: 10px;
          }
        }

        .navbar {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.5em;
          margin-top: 2em;

          nav {
            display: flex;
            flex-direction: column;
            width: 100%;
            align-items: center;

            & > label {
              padding: $account_sidebar_padding;
              border-left: .4em solid transparent;
              color: $second_gray_color;
              font-weight: 600;
              font-size: 1em;
            }

            & > a {
              width: 92%;
              padding: $account_sidebar_padding;
              border-left: .4em solid transparent;

              & > div {
                display: flex;
                align-items: center;
                justify-content: center !important;
                gap: 1.3em;
                cursor: pointer !important;

                label {
                  display: none;
                  color: $text_color;
                  cursor: pointer !important;
                  font-weight: 600;
                  font-size: .95em;
                }
              }

              &:hover, &:active, &.active {
                opacity: 1;
                border-left: .4em solid $main_color !important;
              }

              &.active {
                background-color: $main_white_color;
              }
            }
          }
        }

        & > * {
        }
      }

      & > main {
        width: calc(100vw - $sidebar-width);
        overflow: hidden;
        background-color: $main_background_color;

        header {
          height: $account_layout_header_height;
          background-color: $main_background_color;
          border-bottom: $account_layout_border_color;
        }

        .header-nav {
          display: flex;
          align-items: center;
          gap: .6rem;
        }

        & > * {
          padding: 0 1.5em;
        }
      }
    }

    footer {
      min-height: 30rem;
      width: 100%;
      box-shadow: $box_shadow_1;
      background-color: $footer_background_color;
      color: $footer_font_color;
    }
  }
}
// Desktop size:
@include for-size($tablet-size, 100vw) {
  $sidebar-width: 18%;
  $account_layout_header_height: 6em;
  $account_sidebar_padding: 1em 2em;
  $account_layout_border_color: 1.5px solid $default_border_color;
  #account-layout-desktop.container {
    section {
      min-height: 100vh;
      width: 100vw;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;

      & > aside {
        width: $sidebar-width;
        min-width: 300px;
        border-right: $account_layout_border_color;
        background-color: $second_background_color;

        .logo {
          padding: 0 2.5em;
          height: $account_layout_header_height;
          max-height: $account_layout_header_height;
          min-height: $account_layout_header_height;
          border-bottom: $account_layout_border_color;

          h1 {
            font-weight: bolder;
            font-size: 30px;
          }
        }

        .navbar {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.5em;
          margin-top: 2em;

          nav {
            display: flex;
            flex-direction: column;
            width: 100%;

            & > label {
              padding: $account_sidebar_padding;
              border-left: .4em solid transparent;
              color: $second_gray_color;
              font-weight: 600;
              font-size: 1.30em;
            }

            & > a {
              padding: $account_sidebar_padding;
              border-left: .4em solid transparent;

              & > div {
                display: flex;
                align-items: center;
                justify-content: flex-start !important;
                gap: 1.3em;
                cursor: pointer !important;

                label {
                  color: $text_color;
                  cursor: pointer !important;
                  font-weight: 600;
                  font-size: 1em;
                }
              }

              &:hover, &:active, &.active {
                opacity: 1;
                border-left: .4em solid $main_color !important;
              }

              &.active {
                background-color: $main_white_color;
              }
            }
          }
        }

        & > * {
        }
      }

      & > main {
        width: calc(100vw - $sidebar-width);
        overflow: hidden;
        background-color: $main_background_color;

        header {
          height: $account_layout_header_height;
          background-color: $main_background_color;
          border-bottom: $account_layout_border_color;
        }

        .header-nav {
          display: flex;
          align-items: center;
          gap: .6rem;
        }

        & > * {
          padding: 0 3em;
        }
      }
    }

    footer {
      min-height: 30rem;
      width: 100%;
      box-shadow: $box_shadow_1;
      background-color: $footer_background_color;
      color: $footer_font_color;
    }
  }
}
</style>