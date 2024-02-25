<template>
  <div id="default-layout" class="container flex-column-between-center">
    <header>
      <section class="responsive-width">
        <div class="wrapper-area">
          <nuxt-link
              v-for="i in 4" :key="i"
              :to="'/posts/link'+i"
              class="child cannot-select flex-column-center">
            Link {{i}}
          </nuxt-link>
        </div>
        <div class="main-area">
          <NuxtLink to="/" class="brand-area cannot-select">
<!--            <icon-component icon-name="raven" fill :color="colorUtilities.$main_color"/>-->
            <span>&nbsp;{{ brandName }}</span>
          </NuxtLink>
          <div class="search-area">
            Search the product, category or brand you are looking for
          </div>
          <div class="auth-area">
            <nuxt-link to="/account/user">
              <icon-component
                  icon-name="person"
                  icon-size="1.7rem"/>
              <span>{{ $t('pages.profile') }}</span>
            </nuxt-link>
            <nuxt-link to="/account/favorites">
              <icon-component
                  icon-name="favorite"
                  icon-size="1.7rem"/>
              <span>{{ $t('pages.favorites') }}</span>
            </nuxt-link>
            <nuxt-link to="/account/cart">
              <icon-component
                  icon-name="shopping_cart"
                  icon-size="1.7rem"/>
              <span>{{ $t('pages.cart') }}</span>
            </nuxt-link>
          </div>
        </div>
        <div class="navigation-area">
          <nav>
            <nuxt-link
                class="type_1"
                v-for="i in categories.length"
                :class="{'active': i == currentPath.params.id}"
                :to="'/categories/'+i" :key=i>
                {{categories[i-1]}}
            </nuxt-link>
          </nav>
        </div>
      </section>
    </header>
    <main>
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
import {defineComponent} from 'vue'
import { useAuthStore } from '~/stores/user/auth';
import LoadingPageComponent from '~/components/LoadingPageComponent.vue';
import colorUtilities from "assets/scripts/constants/colorUtilities.js";

export default defineComponent({
  name: "DefaultLayout",
  components: { LoadingPageComponent },
  computed: {
    colorUtilities() {
      return colorUtilities;
    },
    authProgressIsLoading(){
      return useAuthStore().authProgressIsLoading;
    },
    currentPath(){
      return this.$route
    }
  },
  setup(){
    let { getCategories } = usePostsStore();
    let categories = getCategories(10)
    return { brandName: useAppConfig().brandName, categories };
  },
  data(){
    return {
      waitingForAuthProgress: null
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
@import "assets/stylesheets/layouts/default";
</style>