<template>
  <div id="example" class="flex-column-center" style="height: 100vh">
    <h1 @click="() => example = !example">Happy Birthday, Mehdi!</h1>
    <div v-if="example">
      <br>
      🎉🎉🎉
      <br>
      From the very beginning, you've been more than just a brother to me—you've been my best friend, my confidant, and my greatest support. On your special day, I want to remind you how much you mean to me and how grateful I am to have you in my life. May this year bring you endless joy, success, and all the happiness in the world. Cheers to the amazing person you are and to the incredible journey ahead!
      <br>
      <br>
      🎂🎁
    </div>
  </div>
</template>
<script lang="ts">
export default defineComponent({
    name: "App",
    data() {
      return {
        example: false
      }
    }
});
</script>
<script lang="ts" setup>
</script>

<style lang="scss">
div#example {
  @include hover-color-change(2s);
  h1, div {
    width: 600px;
    text-align: center;
    color: white;
    cursor: pointer;
  }
}
</style>

