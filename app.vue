<template>
    <NuxtLayout>
      <NuxtPage :key="renderKey"/>
      <notification-toast></notification-toast>
    </NuxtLayout>
</template>
<script lang="ts">
export default defineComponent({
    name: "App",
    computed: {
      renderKey(){
        return useConfigsStore().renderKey;
      },
    }
});
</script>
<script lang="ts" setup>
</script>

