<template>
  <div
      :id="idComputed"
      v-show="readyForView"
      :class="'loader-area loader-'+type">
  </div>
</template>

<script lang="js" src="@/assets/scripts/components/loadingComponent.js">
</script>

<style scoped lang="scss">
@import "assets/stylesheets/components/loadingComponent";
</style>