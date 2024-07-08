<template>
    <NuxtLayout>
      <NuxtPage :key="renderKey"/>
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

