<script lang="ts">
import { defineComponent } from 'vue'
import colorUtilities from "~/constants/colorUtilities";
import bannersList, { type BannersType } from "assets/images/banners/bannersList";

let optionsCanBeSelected = Object.keys(bannersList)

export default defineComponent({
  name: "BannerComponent",
  props: {
    banner: {
      type: String as () => BannersType,
      validator: function (value: string) {
        return optionsCanBeSelected.includes(value)
      },
      required: true
    },
    mainColor: {
      type: String,
      default: () => colorUtilities.$main_color
    },
  },
  methods: {
    getSvgBanner() {
      let result = bannersList[this.banner];
      result = result.replaceAll('$main_color', this.mainColor);
      return result;
    }
  }
})
</script>

<template>
  <div class="banner-container">
    <div class="svg-banner-element" v-html="getSvgBanner()"></div>
  </div>
</template>

<style scoped lang="scss">
.banner-container {
  width: 100%;
  .svg-banner-element {
    width: 100%;
    svg {
      width: 100%;
    }
  }
}
</style>