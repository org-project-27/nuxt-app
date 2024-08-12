<template>
  <div class="default-container">
    <div class="example">
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "requests"
})
</script>
<script setup lang="ts">
definePageMeta({
  layout: 'account'
});

</script>
<style scoped lang="scss">
.example {
}
</style>