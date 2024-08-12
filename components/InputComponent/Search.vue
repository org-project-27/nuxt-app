<script lang="ts">
import {defineComponent} from 'vue'
import {generateUniqueId, toKebabCase} from "~/utils/helpers/generalHelpers";
import colorUtilities from "~/constants/colorUtilities";

export default defineComponent({
  name: "searchInput",
  methods: {toKebabCase, generateUniqueId},
  props: [
    'modelValue',
    'name',
    'placeholder',
    'autocomplete',
    'disabled',
    'label',
    'required',
    'showSuccess',
    'showInfo',
    'showWarning',
    'showError',
    'leftIcon',
    'clearable',
  ],
  computed: {
    modelComputed: {
      set(val: string) {
        this.$emit('update:modelValue', val);
      },
      get() {
        return this.modelValue;
      }
    },
    focusComputed: {
      set(val: boolean) {
        this.inputFocus = val;
        this.$emit('inputFocus', val);
      },
      get() {
        return this.inputFocus;
      }
    },
    error() {
      if (this.focusComputed) return false;
      return !!this.showError;
    },
    warning() {
      if (this.focusComputed || this.error) return false;
      return !!this.showWarning;
    },
    success() {
      if (this.focusComputed || this.error || this.warning) return false;
      return !!this.showSuccess;
    },
    info() {
      if (this.focusComputed || this.error || this.warning || this.success) return false;
      return !!this.showInfo;
    }
  },
  data() {
    return {
      colorUtilities,
      inputFocus: false,
    }
  }
})
</script>

<template>
  <div
      id="input-search-container"
      :class="{
          'active': focusComputed,
          'deactive': !focusComputed,
          'disabled': disabled,
          'info': info,
          'error': error,
          'warning': warning,
          'success': success,
       }">
    <label :for="'input-search-' + toKebabCase(label)" v-if="label">
      {{ label }}
    </label>
    <div class="input-container">
      <div class="left-area" v-if="leftIcon">
        <div>
          <icon-component
              :icon-name="leftIcon"
              icon-size="2rem"
              :fill="focusComputed"
              :color="focusComputed ?
              colorUtilities.$main_color :
              colorUtilities.$main_black_color"
          />
        </div>
      </div>
      <input
          :id="'input-search-' + toKebabCase(label)"
          type="search"
          :name="name"
          :placeholder="placeholder"
          :disabled="disabled"
          :required="required"
          :autocomplete="autocomplete"
          @focusin="focusComputed = true"
          @focusout="focusComputed = false"
          v-model="modelComputed">
      <div class="right-area" v-if="clearable">
        <div class="clear-btn-area" v-if="focusComputed && clearable">
          <button class="transparent-btn" type="button">
            <icon-component
                icon-name="cancel"
                icon-size="2rem"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#input-search-container {

}
</style>