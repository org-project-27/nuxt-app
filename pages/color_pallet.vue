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
import colorUtilities from "assets/scripts/constants/colorUtilities";

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
      background-color: $main_color_1;
    }
    & > div:nth-child(3){
      background-color: $main_color_2;
    }
    & > div:nth-child(4){
      background-color: $main_color_3;
    }
    & > div:nth-child(5){
      background-color: $main_color_4;
    }
    & > div:nth-child(6){
      background-color: $main_color_5;
    }
    & > div:nth-child(7){
      background-color: $main_color_6;
    }
    & > div:nth-child(8){
      background-color: $main_color_7;
    }
    & > div:nth-child(9){
      background-color: $main_color_8;
    }
    & > div:nth-child(10){
      background-color: $main_color_9;
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
      background-color: $black_color;
    }
    & > div:nth-child(2){
      background-color: $black_color_1;
    }
    & > div:nth-child(3){
      background-color: $black_color_2;
    }
    & > div:nth-child(4){
      background-color: $black_color_3;
    }
    & > div:nth-child(5){
      background-color: $black_color_4;
    }
    & > div:nth-child(6){
      background-color: $black_color_5;
    }
    & > div:nth-child(7){
      background-color: $black_color_6;
    }
    & > div:nth-child(8){
      background-color: $black_color_7;
    }
    & > div:nth-child(9){
      background-color: $black_color_8;
    }
    & > div:nth-child(10){
      background-color: $black_color_9;
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
      background-color: $white_color;
    }
    & > div:nth-child(2){
      background-color: $white_color_1;
    }
    & > div:nth-child(3){
      background-color: $white_color_2;
    }
    & > div:nth-child(4){
      background-color: $white_color_3;
    }
    & > div:nth-child(5){
      background-color: $white_color_4;
    }
    & > div:nth-child(6){
      background-color: $white_color_5;
    }
    & > div:nth-child(7){
      background-color: $white_color_6;
    }
    & > div:nth-child(8){
      background-color: $white_color_7;
    }
    & > div:nth-child(9){
      background-color: $white_color_8;
    }
    & > div:nth-child(10){
      background-color: $white_color_9;
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
      background-color: $error_color_1;
    }
    & > div:nth-child(3){
      background-color: $error_color_2;
    }
    & > div:nth-child(4){
      background-color: $error_color_3;
    }
    & > div:nth-child(5){
      background-color: $error_color_4;
    }
    & > div:nth-child(6){
      background-color: $error_color_5;
    }
    & > div:nth-child(7){
      background-color: $error_color_6;
    }
    & > div:nth-child(8){
      background-color: $error_color_7;
    }
    & > div:nth-child(9){
      background-color: $error_color_8;
    }
    & > div:nth-child(10){
      background-color: $error_color_9;
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
      background-color: $success_color_1;
    }
    & > div:nth-child(3){
      background-color: $success_color_2;
    }
    & > div:nth-child(4){
      background-color: $success_color_3;
    }
    & > div:nth-child(5){
      background-color: $success_color_4;
    }
    & > div:nth-child(6){
      background-color: $success_color_5;
    }
    & > div:nth-child(7){
      background-color: $success_color_6;
    }
    & > div:nth-child(8){
      background-color: $success_color_7;
    }
    & > div:nth-child(9){
      background-color: $success_color_8;
    }
    & > div:nth-child(10){
      background-color: $success_color_9;
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
      background-color: $warning_color_1;
    }
    & > div:nth-child(3){
      background-color: $warning_color_2;
    }
    & > div:nth-child(4){
      background-color: $warning_color_3;
    }
    & > div:nth-child(5){
      background-color: $warning_color_4;
    }
    & > div:nth-child(6){
      background-color: $warning_color_5;
    }
    & > div:nth-child(7){
      background-color: $warning_color_6;
    }
    & > div:nth-child(8){
      background-color: $warning_color_7;
    }
    & > div:nth-child(9){
      background-color: $warning_color_8;
    }
    & > div:nth-child(10){
      background-color: $warning_color_9;
    }
  }
}
</style>