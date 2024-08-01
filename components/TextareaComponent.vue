<script lang="ts">
import {defineComponent} from 'vue'
import {generateUniqueId} from "~/utils/helpers/generalHelpers";
import type {IconsTypes} from "assets/images/icons/materialIconsList";
import colorUtilities from "~/constants/colorUtilities";

export default defineComponent({
  name: "TextareaComponent",
  props: {
    style: Object,
    required: Boolean,
    autofocus: Boolean,
    readonly: Boolean,
    autocomplete: String,
    disabled: Boolean,
    maxlength: [Number, String],
    label: String,
    name: {
      type: String,
      default: () => 'text'
    },
    placeholder: String,
    inputSize: {
      type: Object,
      default: () => {
        return {
          width: '300px',
          height: '50px'
        }
      }
    },
    modelValue: {
      default: () => ''
    },
    hideMaxlengthCounter: {
      type: Boolean,
      default: () => false
    },
    showSuccess: {
      type: String
    },
    showInfo: {
      type: String
    },
    showWarning: {
      type: String
    },
    showError: {
      type: String
    },
  },
  computed: {
    focusComputed: {
      set(val: boolean) {
        this.inputFocus = val;
      },
      get() {
        return this.inputFocus;
      }
    },
    modelComputed:{
      set(val: string){
        if(!this.disabled){
          this.model = val;
          this.$emit('update:modelValue', val);
        }
      },
      get(): string{
        return this.modelValue;
      }
    },
    error() {
      return !!this.showError;
    },
    warning() {
      if (this.error) return false;
      return !!this.showWarning;
    },
    success() {
      if (this.error || this.warning) return false;
      return !!this.showSuccess;
    },
    info() {
      if (this.error || this.warning || this.success) return false;
      return !!this.showInfo;
    },
    statusIconDetector(): IconsTypes | null {
      if (this.error) {
        return 'cancel';
      }
      if (this.warning) {
        return 'warning';
      }
      if (this.success) {
        return 'check_circle';
      }
      if (this.info) {
        return 'info';
      }
      return null;
    },
    statusColorDetector() {
      if (this.error) {
        return this.colorUtilities.$error_color;
      }
      if (this.warning) {
        return this.colorUtilities.$warning_color;
      }
      if (this.success) {
        return this.colorUtilities.$success_color;
      }
      if (this.info) {
        return this.colorUtilities.$main_color;
      }
      return null
    },
  },
  data() {
    return {
      colorUtilities,
      inputFocus: false,
      model: '',
      localId: '',
    }
  },
  methods: {
    generateUniqueId
  },
  mounted() {
    this.localId = this.generateUniqueId();
  }
})
</script>

<template>
  <div
      id="textarea-component"
      class="default-writeable-styles"
      :class="{
          'active': focusComputed,
          'deactive': !focusComputed,
          'disabled': disabled,
          'info': info,
          'error': error,
          'warning': warning,
          'success': success,
      }">
    <div class="top-area flex-row-between-center">
      <label :for="`input-writeable-${localId}`">
        {{label}}
      </label>
      <span class="char-counter" v-if="maxlength">
         ({{modelComputed.length}}/{{maxlength}})
      </span>
    </div>
    <div class="input-container">
      <textarea
          :id="`input-writeable-${localId}`"
          :name="name"
          :required="required"
          :autofocus="autofocus"
          :readonly="readonly"
          :autocomplete="autocomplete"
          :disabled="disabled"
          :maxlength="maxlength"
          :style="style"
          :placeholder="placeholder"
          @focusin="focusComputed = true"
          @focusout="focusComputed = false"
          v-model="modelComputed"
      />
    </div>
    <div class="message-box" v-if="error || warning || success || info">
      <div class="icon-area" v-if="statusIconDetector && statusColorDetector">
        <icon-component
            :icon-name="statusIconDetector"
            :color="statusColorDetector"
            icon-size="1rem"/>
      </div>
      <span class="message-area error" v-if="error">{{ showError }}</span>
      <span class="message-area warning" v-else-if="warning">{{ showWarning }}</span>
      <span class="message-area success" v-else-if="success">{{ showSuccess }}</span>
      <span class="message-area info" v-else-if="info">{{ showInfo }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
#textarea-component {
  .input-container {
    textarea {
      height: 10rem;
      resize: none;
      font-family: $font-family;
      font-size: $font-size-input;
      padding: 1rem;
    }
  }
  .char-counter {
    font-size: .65rem !important;
  }
}
</style>