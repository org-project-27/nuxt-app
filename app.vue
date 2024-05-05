<template>
    <NuxtLayout>
      <NuxtPage :key="renderKey"/>
    </NuxtLayout>
</template>
<script lang="ts">
export default defineComponent({
    name: "App",
    mounted(){
      if (process.client) {
        // This code runs after the component is mounted, on the client side only
        useConfigsStore().detectDeviceType();
      }
    },
    computed: {
      renderKey(){
        return useConfigsStore().renderKey;
      }
    }
});
</script>
