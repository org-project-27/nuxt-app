<script setup lang="ts">
import {ref} from 'vue';
import colorUtilities from "~/constants/colorUtilities";
const inputFocus = ref(false);
</script>

<template>
  <form id="default-search-component"
        :class="{'active': inputFocus}">
    <div class="search-icon">
      <icon-component
          icon-name="search"
          icon-size="25"
          :color="inputFocus ? colorUtilities.$main_color : colorUtilities.$third_gray_color"/>
    </div>
    <input
        type="search"
        @focusin="() => inputFocus = true"
        @focusout="() => inputFocus = false"
        aria-label="Search..."
        :class="{'active': inputFocus}"
        placeholder="Search..."/>
  </form>
</template>

<style scoped lang="scss">
form#default-search-component {
  display: flex;
  align-content: center;
  gap: .5rem;
  border: 1px solid lighten($third_gray_color, 30%);
  border-radius: 10rem;
  padding: .25rem .5rem;
  width: 20rem;
  transition-duration: $default-transition-duration;
  input {
    width: 90%;
    border: none;
    outline: none;
  }

  .search-icon {
    width: 10%;
  }

  &.active {
    box-shadow: $box_shadow_main_color_2;
    border: 1px solid lighten($main_color, 25%);
  }
}
</style>