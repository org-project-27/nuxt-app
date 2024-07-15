<script lang="ts">
import {defineComponent} from 'vue'

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
      type: Object,
      default: () => {
        return {
          message: null,
          highlight: false,
          icon: null
        }
      }
    },
    showInfo: {
      type: Object,
      default: () => {
        return {
          message: null,
          highlight: false,
          icon: null
        }
      }
    },
    showWarning: {
      type: Object,
      default: () => {
        return {
          message: null,
          highlight: false,
          icon: null
        }
      }
    },
    showError: {
      type: Object,
      default: () => {
        return {
          message: null,
          highlight: false,
          icon: null
        }
      }
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
  },
  data() {
    return {
      inputFocus: false,
      model: ''
    }
  }
})
</script>

<template>
  <div
      id="textarea-component"
      :class="{
          'active': focusComputed,
          'deactive': !focusComputed,
          'disabled': disabled,
      }"
  >
    <label>
      {{label}}
    </label>
    <textarea
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
</template>

<style scoped lang="scss">
#textarea-component {
  $active-color: $main_color;
  $disabled-color: $main_black_color;
  $padding_side: 1rem;
  width: 100%;
  label {
    position: relative;
    top: 9px;
    left: 1rem;
    background-color: $main_white_color;
    padding: 0 .2rem;
    font-size: $font-size-small;
  }
  textarea {
    resize: none;
    min-height: 10rem;
    outline: none;
    border-radius: .4rem;
    padding: 1rem $padding_side;
    width: calc(100% - ($padding_side * 2));
    font-family: $font_family;
    font-size: $font-size-normal;
  }
  &.active {
    textarea {
      box-shadow: $box_shadow_0 !important;
      border: 1px solid $active-color !important;
      background-color: $main_white_color !important;
      color: $main_black_color !important;

      &::placeholder {
        opacity: .6;
      }
    }

    label {
      color: $active-color !important;
    }
  }

  &.deactive {
    textarea {
      border: 1px solid $disabled-color;
      color: $disabled-color;

      &::placeholder {
        opacity: .4;
      }
    }

    label {
      color: $disabled-color;
    }
  }

  &.disabled {
    textarea {
      user-select: none;
      border: 1px solid $main_gray_color;
      cursor: not-allowed;
      color: $main_gray_color;

      &::placeholder {
        opacity: .4;
      }

      &:disabled {
        background-color: transparent;
        cursor: not-allowed;
      }
    }

    label {
      color: $main_gray_color;
      user-select: none;
      background-color: $main_white_color;
    }
  }

  &.error {
    textarea {
      background-color: lighten($error_color, 55%);
      border: 1px solid $error-color;
    }
    label {
      color: $error-color;
    }
  }

  &.warning {
    textarea {
      background-color: lighten($warning_color, 49%);
      border: 1px solid $warning-color;
    }
    label {
      color: $warning-color;
    }
  }
}
</style>