<template>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
</template>
<script setup lang="ts">
onMounted(() => {
  if (process.client) {
    // This code runs after the component is mounted, on the client side only
    useConfigsStore().detectDeviceType();
  }
});
</script>
