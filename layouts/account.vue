<script lang="ts">
import {defineComponent} from 'vue'
import {useAuthStore} from "~/stores/user/auth";
import colorUtilities from "~/constants/colorUtilities";
import {accountLayoutNavLinks} from "~/constants/availableAppRoutes";

export default defineComponent({
  name: "account",
  computed: {
    authProgressIsLoading() {
      return useAuthStore().authProgressIsLoading;
    },
    currentPath() {
      return this.$route.path
    },
    currentPage(): any {
      let result = null;
      Object.values(this.accountLayoutNavLinks).forEach(group => {
         group.forEach(nav => {
           if(nav.link === this.currentPath){
             result = nav;
           }
         });
      });
      return result;
    },
    deviceType() {
      return useConfigsStore().deviceType;
    },
    fullscreenModal() {
      return useFullscreenModal();
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
      accountLayoutNavLinks
    }
  },
  mounted() {
    this.waitingForAuthProgress = this.authProgressIsLoading;
  },
  watch: {
    authProgressIsLoading(val) {
      this.waitingForAuthProgress = val;
    }
  },
  methods: {
    t(value: any){
      const i18n = useI18nStore().i18n.global
      //@ts-ignore
      return i18n.t(value);
    }
  }
})
</script>
<template>
  <div id="account-layout" class="container flex-column-between-center">
    <section>
      <aside>
        <div class="logo flex-row-start-center">
          <logo-component/>
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
                      icon-size="30"
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
            <h2 v-if="currentPage">
            {{ t(`layouts.account_layout.navbar.links.${currentPage.label}`) }} {{t(`layouts.account_layout.page`)}}
          </h2>
          <nuxt-link to="#" class="type_2">
            What is new?
          </nuxt-link>
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
@include for-size($tablet-size, 100vw) {
  $sidebar-width: 20%;
  $account_layout_header_height: 6em;
  $account_sidebar_padding: 1em 2em;
  $account_layout_border_color: 1.5px solid $default_border_color;
  #account-layout.container {
    section {
      min-height: 100vh;
      width: 100vw;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      background-color: #ddd;

      & > aside {
        width: $sidebar-width;
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

@include for-size($small-mobile-size, $tablet-size) {
  $layout-width: 100%;
  #account-layout.container {
    gap: $default-layout-section-gap;
    margin-top: $default-layout-header-height-mobile;

    main {
      margin-top: calc($default-layout-header-height-mobile / 2.5);
      border-radius: 1rem;
      overflow: hidden;
      min-height: 70vh;
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