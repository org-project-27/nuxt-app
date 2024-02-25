<template>
    <div>
        about page
    </div>
</template>

<script lang="ts" setup>
// definePageMeta({
//   layout: 'default'
// });

const response = await useFetch('/api/hello');
</script>

<style lang="scss">
</style>