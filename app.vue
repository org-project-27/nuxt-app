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
    if(document.location.protocol.includes('http:')){
      //document.location.href = document.location.href.replace('http:', 'https:');
    }
  }
});
</script>
