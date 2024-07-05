<template>
  <div id="lang-switcher-component"
       class="cannot-select"
       v-if="selectedLang"
       :title="`${$t('lang')}: ${$t(selectedLang.label)}`">
    <select v-model="currentAppLang" ref="langSwitcher">
      <option
          v-for="local in availableLocales"
          :key="local.iso"
          :value="local.iso">
            {{$t(local.label)}}
      </option>
    </select>
    <icon-component
        icon-name="language"
        icon-size="23"/>
    <img
        class="responsive-visibility-1"
        :alt="selectedLang.iso"
        :src="selectedLang.icon"/>
  </div>
</template>

<script lang="ts">
import type {LangOptionsType} from "~/constants/types/LocalesType";
import colorUtilities from "~/constants/colorUtilities";

export default defineComponent({
  name: "LangSwitcherComponent",
  computed: {
    currentAppLang: {
      set(val: LangOptionsType){
        useI18nStore().setAppLang(val);
        this.$i18n.locale = val;
      },
      get(): LangOptionsType{
        return useI18nStore().appLang;
      }
    },
    selectedLang(): any {
      let { availableLocales } = useI18nStore();
      return availableLocales.find(local => local.iso === this.currentAppLang);
    },
    availableLocales(){
      return useI18nStore().availableLocales;
    }
  },
  beforeMount(){
    this.currentAppLang = useI18nStore().appLang;
  },
  data(){
    return {
      colorUtilities,
    }
  },
  watch: {
    currentAppLang(val){
      this.$i18n.locale = val;
      useI18nStore().setWindowTitle();
    }
  }
})
</script>

<style scoped lang="scss">
#lang-switcher-component {
  $lang-switcher-size: 25px;
  display: flex;
  justify-content: center;
  position: relative;
  gap: 3px;
  select {
    background: transparent;
    position: absolute;
    opacity: 0;
    width: $lang-switcher-size * 2;
    cursor: pointer;
  }
  img {
    width: $lang-switcher-size;
    border-radius: 15%;
    cursor: pointer;
  }
  &:hover{
    opacity: 0.8;
  }
}
</style>