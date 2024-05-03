<template>
  <div>
    <select v-model="currentAppLang">
      <option v-for="local in $i18n.availableLocales" :key="local">{{local}}</option>
    </select>
  </div>
</template>

<script lang="ts">
import type {LangOptionsType} from "assets/scripts/types/LocalesType";

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
  },
  mounted() {
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
    currentAppLang(val: LangOptionsType, oldVal: LangOptionsType){
      const {setAppLang} = useI18nStore()
      setAppLang(val);
      if(val !== oldVal){
        console.log(val, oldVal)
        //window.location.reload();
      }
    }
  }
})
</script>

<style scoped lang="scss">

</style>