<template>
  <NuxtLayout>
    <loading-page v-if="!deviceType"/>
    <NuxtPage :key="renderKey"/>
  </NuxtLayout>
</template>
<script lang="ts">
import deviceDetection from "~/utils/helpers/device-detection";
import LoadingPage from "~/components/LoadingPageComponent.vue";

export default defineComponent({
  name: "App",
  components: {LoadingPage},
  computed: {
    renderKey() {
      return useConfigsStore().renderKey;
    },
    deviceType() {
      return deviceDetection();
    },
  }
});
</script>

