<template>
  <div id="lang-switcher-component"
       class="cannot-select"
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
        :alt="selectedLang.iso"
        :src="selectedLang.icon"/>
  </div>
</template>

<script lang="ts">
import type {LangOptionsType} from "assets/scripts/types/LocalesType";
import colorUtilities from "assets/scripts/constants/colorUtilities";

export default defineComponent({
  name: "LangSwitcherComponent",
  computed: {
    currentAppLang: {
      set(val: LangOptionsType){
        if(val){
          this.$i18n.locale = val
        } else {
          this.$i18n.locale = this.detectCurrentAppLang();
        }
      },
      get() {
        return this.$i18n.locale;
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
  data(){
    return {
      colorUtilities,
    }
  },
  mounted() {
    //#TODO: Do these settings within the middlewares
    this.currentAppLang = this.detectCurrentAppLang();
    const {setAppLang} = useI18nStore()
    setAppLang(this.detectCurrentAppLang());
  },
  methods: {
    detectCurrentAppLang(): LangOptionsType{
      const {appLang} = useI18nStore();
      const appLangFromLS = localStorage.getItem('system_lang');
      const defaultAppLang = useAppConfig().defaultAppLang;
      let detectedAppLang;

      if(appLang){
        detectedAppLang = appLang;
      } else if(appLangFromLS) {
        detectedAppLang = appLangFromLS;
      } else if(defaultAppLang) {
        detectedAppLang = defaultAppLang;
      } else {
        detectedAppLang = this.$i18n.availableLocales[0];
      }

      return detectedAppLang as LangOptionsType;
    }
  },
  watch: {
    currentAppLang(val: LangOptionsType){
      const {setAppLang} = useI18nStore()
      setAppLang(val);
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