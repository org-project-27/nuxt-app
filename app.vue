<template>
    <NuxtLayout>
      <NuxtPage :key="renderKey"/>
      <notification-toast></notification-toast>
    </NuxtLayout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
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

