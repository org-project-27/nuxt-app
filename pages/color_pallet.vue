<template>
  <div id="pallet-container">
    <div :id="`color-pallets-${targetColor}`">
      <div>${{targetColor}}-color</div>
      <div>${{targetColor}}-color-1</div>
      <div>${{targetColor}}-color-2</div>
      <div>${{targetColor}}-color-3</div>
      <div>${{targetColor}}-color-4</div>
      <div>${{targetColor}}-color-5</div>
      <div>${{targetColor}}-color-6</div>
      <div>${{targetColor}}-color-7</div>
      <div>${{targetColor}}-color-8</div>
      <div>${{targetColor}}-color-9</div>
    </div>
    <div class="color-pallets-2">
      <div v-for="(value, key) in colorUtilities"
           v-show="key.startsWith(`$${targetColor}`)"
           :key="key" :style="{'background-color': value, 'height': '100px'}">
        {{value}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import colorUtilities from "~/constants/colorUtilities";

export default defineComponent({
  name: "color_pallet",
  computed: {
    colorUtilities() {
      return colorUtilities
    },
    targetColor(){
      return this.$route.query.color || 'main'
    }
  }
})
</script>

<style scoped lang="scss">
#pallet-container{
  display: flex;
  justify-content: center;
  gap: 30px;
  & > div,
  #color-pallets-main{
    width: 100px;
    display: flex;
    flex-direction: column-reverse;
    & > div {
      width: 100px;
      height: 100px;
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    & > div:nth-child(1){
      background-color: $main_color;
    }
    & > div:nth-child(2){
      background-color: $main_color;
    }
    & > div:nth-child(3){
      background-color: $main_color;
    }
    & > div:nth-child(4){
      background-color: $main_color;
    }
    & > div:nth-child(5){
      background-color: $main_color;
    }
    & > div:nth-child(6){
      background-color: $main_color;
    }
    & > div:nth-child(7){
      background-color: $main_color;
    }
    & > div:nth-child(8){
      background-color: $main_color;
    }
    & > div:nth-child(9){
      background-color: $main_color;
    }
    & > div:nth-child(10){
      background-color: $main_color;
    }
  }
  #color-pallets-black{
    width: 100px;
    display: flex;
    flex-direction: column-reverse;
    & > div {
      width: 100px;
      height: 100px;
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    & > div:nth-child(1){
      background-color: $main_black_color;
    }
    & > div:nth-child(2){
      background-color: $main_black_color;
    }
    & > div:nth-child(3){
      background-color: $main_black_color;
    }
    & > div:nth-child(4){
      background-color: $main_black_color;
    }
    & > div:nth-child(5){
      background-color: $main_black_color;
    }
    & > div:nth-child(6){
      background-color: $main_black_color;
    }
    & > div:nth-child(7){
      background-color: $main_black_color;
    }
    & > div:nth-child(8){
      background-color: $main_black_color;
    }
    & > div:nth-child(9){
      background-color: $main_black_color;
    }
    & > div:nth-child(10){
      background-color: $main_black_color;
    }
  }
  #color-pallets-white{
    width: 100px;
    display: flex;
    flex-direction: column-reverse;
    & > div {
      width: 100px;
      height: 100px;
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    & > div:nth-child(1){
      background-color: $main_white_color;
    }
    & > div:nth-child(2){
      background-color: $main_white_color;
    }
    & > div:nth-child(3){
      background-color: $main_white_color;
    }
    & > div:nth-child(4){
      background-color: $main_white_color;
    }
    & > div:nth-child(5){
      background-color: $main_white_color;
    }
    & > div:nth-child(6){
      background-color: $second_white_color;
    }
    & > div:nth-child(7){
      background-color: $second_white_color;
    }
    & > div:nth-child(8){
      background-color: $second_white_color;
    }
    & > div:nth-child(9){
      background-color: $second_white_color;
    }
    & > div:nth-child(10){
      background-color: $second_white_color;
    }
  }
  #color-pallets-error{
    width: 100px;
    display: flex;
    flex-direction: column-reverse;
    & > div {
      width: 100px;
      height: 100px;
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    & > div:nth-child(1){
      background-color: $error_color;
    }
    & > div:nth-child(2){
      background-color: $error_color;
    }
    & > div:nth-child(3){
      background-color: $error_color;
    }
    & > div:nth-child(4){
      background-color: $error_color;
    }
    & > div:nth-child(5){
      background-color: $error_color;
    }
    & > div:nth-child(6){
      background-color: $error_color;
    }
    & > div:nth-child(7){
      background-color: $error_color;
    }
    & > div:nth-child(8){
      background-color: $error_color;
    }
    & > div:nth-child(9){
      background-color: $error_color;
    }
    & > div:nth-child(10){
      background-color: $error_color;
    }
  }
  #color-pallets-success{
    width: 100px;
    display: flex;
    flex-direction: column-reverse;
    & > div {
      width: 100px;
      height: 100px;
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    & > div:nth-child(1){
      background-color: $success_color;
    }
    & > div:nth-child(2){
      background-color: $success_color;
    }
    & > div:nth-child(3){
      background-color: $success_color;
    }
    & > div:nth-child(4){
      background-color: $success_color;
    }
    & > div:nth-child(5){
      background-color: $success_color;
    }
    & > div:nth-child(6){
      background-color: $success_color;
    }
    & > div:nth-child(7){
      background-color: $success_color;
    }
    & > div:nth-child(8){
      background-color: $success_color;
    }
    & > div:nth-child(9){
      background-color: $success_color;
    }
    & > div:nth-child(10){
      background-color: $success_color;
    }
  }
  #color-pallets-warning{
    width: 100px;
    display: flex;
    flex-direction: column-reverse;
    & > div {
      width: 100px;
      height: 100px;
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    & > div:nth-child(1){
      background-color: $warning_color;
    }
    & > div:nth-child(2){
      background-color: $warning_color;
    }
    & > div:nth-child(3){
      background-color: $warning_color;
    }
    & > div:nth-child(4){
      background-color: $warning_color;
    }
    & > div:nth-child(5){
      background-color: $warning_color;
    }
    & > div:nth-child(6){
      background-color: $warning_color;
    }
    & > div:nth-child(7){
      background-color: $warning_color;
    }
    & > div:nth-child(8){
      background-color: $warning_color;
    }
    & > div:nth-child(9){
      background-color: $warning_color;
    }
    & > div:nth-child(10){
      background-color: $warning_color;
    }
  }
}
</style>