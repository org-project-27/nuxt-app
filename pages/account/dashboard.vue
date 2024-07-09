<template>
  <div class="default-container">
    dashboard


    <span>Hello  </span>

    <span>Hello  </span>

    <span>Hello  </span>

    <span>Hello  </span>

    <span>Hello  </span>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "dashboard"
})
</script>

<script setup lang="ts">
definePageMeta({
  layout: 'account'
})
</script>

<style scoped lang="scss">
.default-container {
  display: flex;
  flex-direction: column;
  & > span:nth-child(1){
    font-size: $font-size-extra-small;
  }
  & > span:nth-child(2){
    font-size: $font-size-small;
  }
  & > span:nth-child(3){
    font-size: $font-size-normal;
  }
  & > span:nth-child(4){
    font-size: $font-size-big;
  }
  & > span:nth-child(5){
    font-size: $font-size-extra-big;
  }
}
</style>