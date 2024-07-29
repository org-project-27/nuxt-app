<template>
  <div class="default-container">
    <div class="example">
      <input :type="type" v-model='model' src="/logo.png" />
      <input-component :type="type" @click="clicked" label="salam" accept=".pdf"/>
      <br>
      <h3>"{{model}}"</h3>
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
const model = ref(null);
const type = ref('submit');
function clicked(event: Event){
  console.log(event.target)
}
</script>
<style scoped lang="scss">
.example {
  width: 20%;
}
</style>