<script lang="ts">
import {defineComponent} from 'vue'
import {generateUniqueId} from "~/utils/helpers/generalHelpers";
import colorUtilities from "~/constants/colorUtilities";

export default defineComponent({
  name: "CheckboxInput",
  methods: {generateUniqueId},
  props: [
    "name",
    "label",
    "required",
    "disabled",
    "showSuccess",
    "showInfo",
    "showWarning",
    "showError",
    "icon",
    "type",
    "modelValue",
  ],
  setup() {
    return {
      colorUtilities,
    }
  },
  computed: {
    modelComputed: {
      set(val: any) {
        this.$emit('update:modelValue', val);
      },
      get() {
        return this.modelValue;
      }
    },
    toggle(): boolean {
      return !!this.modelValue
    }
  }
})
</script>

<template>
  <div :id="`checkbox-input-${generateUniqueId()}`" class="input-component-checkbox">
    <label for="checkbox-input">
      <span v-html="label"></span>
    </label>
    <div class="checkbox-area">
      <div>
        <icon-component
            :color="colorUtilities.$main_color"
            icon-size="2.2rem"
            :fill="toggle"
            :icon-name="toggle ?
            'toggle_on' :
            'toggle_off'"/>
      </div>
      <input
          id="checkbox-input"
          :type="type"
          :name="name"
          :disabled="disabled"
          :required="required"
          :aria-label="label"
          v-model="modelComputed">
    </div>
  </div>
</template>

<style scoped lang="scss">
$checkbox-bg-color: lighten($main_color, 0%);
$checkbox-size: 2.2rem;
$checkbox-checkmark-color: $main_white_color;
.input-component-checkbox {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: .5rem;
  & > * {
    user-select: none;
    cursor: pointer !important;
  }
  .checkbox-area {
    display: flex;
    align-items: center;
    justify-content: center;
    input[type="checkbox"] {
      border-radius: 100%;
      opacity: 0;
      width: $checkbox-size;
      height: $checkbox-size;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      appearance: none;
      -webkit-appearance: none;
      border: .1rem solid darken($checkbox-bg-color, 5%);
      cursor: pointer;

      &:checked {
        background-color: $checkbox-bg-color;
        &:after {
          content: '';
          $check-size: .35rem;
          position: absolute;
          left: calc($check-size);
          width: $check-size;
          height: calc($check-size * 2.5);
          border: solid $checkbox-checkmark-color;
          border-width: 0 $check-size $check-size 0;
          transform: rotate(45deg);
        }
      }
    }
  }
}
</style>