<template>
  <div class="input-component type-checkbox" v-if="type === 'checkbox'">
    <input-component-checkbox
        :name="name"
        :label="label"
        :required="required"
        :disabled="disabled"
        :showSuccess="showSuccess"
        :showInfo="showInfo"
        :showWarning="showWarning"
        :showError="showError"
        :icon="icon"
        :type="type"
        v-model="modelComputed"
    />
  </div>
  <div class="input-component type-radio" v-else-if="type === 'radio'">
    <input-component-radio
        :name="name"
        :label="label"
        :required="required"
        :disabled="disabled"
        :showSuccess="showSuccess"
        :showInfo="showInfo"
        :showWarning="showWarning"
        :showError="showError"
        :icon="icon"
        :type="type"
        v-model="modelComputed"
    />
  </div>
  <div class="input-component type-hidden" v-else-if="type === 'hidden'">
    <input-component-hidden
        :name="name"
        :disabled="disabled"
        :autocomplete="autocomplete"
        v-model="modelComputed"
    />
  </div>
  <div class="input-component type-range" v-else-if="type === 'range'">
    <input-component-range
        :name="name"
        :disabled="disabled"
        :autocomplete="autocomplete"
        v-model="modelComputed"
    />
  </div>
  <!-- Button input -->
  <div class="input-component type-submit" v-else-if="inputTypeDetector === 'button'">
    <input-component-button
        :name="name"
        :disabled="disabled"
        :autocomplete="autocomplete"
        :type="type"
        :label="label"
        :icon="icon"
        :is-loading="isLoading"
        :button-type="buttonType"
    />
  </div>
  <!-- Writeable input -->
  <div class="input-component writeable-input type-search" v-else-if="inputTypeDetector === 'writeable'">
    <input-component-writeable
        :name="name"
        :label="label"
        :required="required"
        :placeholder="placeholder"
        :disabled="disabled"
        :autocomplete="autocomplete"
        :showSuccess="showSuccess"
        :showInfo="showInfo"
        :showWarning="showWarning"
        :showError="showError"
        :icon="icon"
        :clearable="clearable"
        :type="type"
        :is-loading="isLoading"
        :min="min"
        :max="max"
        :minlength="minlength"
        :maxlength="maxlength"
        v-model="modelComputed"
    />
  </div>
  <div class="input-component" v-else>
    There is no input with type: "{{ type }}"
  </div>
</template>

<script lang="ts">
import type {PropType} from "vue";
import type {
  InputAutoCompleteType,
  InputComponentTypeTypes,
  InputNameType,
  InputIconPropsType, InputButtonStyleType, InputFileAcceptType,
} from "~/constants/types/InputComponentTypes";

export default defineComponent({
  name: 'InputComponent',
  props: {
    type: {
      type: String as PropType<InputComponentTypeTypes>,
      default: () => 'text'
    },
    disabled: {
      type: Boolean,
      default: () => false
    },
    autocomplete: {
      type: String as PropType<InputAutoCompleteType>,
      default: () => 'off'
    },
    name: {
      type: String as PropType<InputNameType>,
      default: () => 'text'
    },
    modelValue: {
      default: () => null
    },
    label: {
      type: String,
      default: () => null
    },
    placeholder: {
      type: String,
      default: () => null
    },
    required: {
      type: Boolean,
      default: () => false
    },
    showInfo: {
      type: String as PropType<string | any>,
      default: () => null
    },
    showSuccess: {
      type: String as PropType<string | any>,
      default: () => null
    },
    showWarning: {
      type: String as PropType<string | any>,
      default: () => null
    },
    showError: {
      type: String as PropType<string | any>,
      default: () => null
    },
    clearable: {
      type: Boolean,
      default: () => false
    },
    icon: {
      type: String as PropType<InputIconPropsType>,
      default: () => null
    },
    isLoading: {
      type: Boolean,
      default: () => false
    },
    buttonType: {
      type: String as PropType<InputButtonStyleType>,
      default: () => 'default'
    },
    min: {
      type: String as PropType<string | number | null>,
      default: () => null
    },
    max: {
      type: String as PropType<string | number | null>,
      default: () => null
    },
    minlength: {
      type: String as PropType<string | number | null>,
      default: () => null
    },
    maxlength: {
      type: String as PropType<string | number | null>,
      default: () => null
    },
    accept: {
      type: String as PropType<InputFileAcceptType>,
      default: () => null
    },
  },
  computed: {
    modelComputed: {
      set(val: typeof this.modelValue) {
        if (!this.disabled) {
          this.$emit('update:modelValue', val);
        }
      },
      get() {
        return this.modelValue;
      }
    },
    inputTypeDetector() {
      switch (this.type) {
        case "reset":
        case "submit":
        case "button":
          return 'button';
        case "checkbox":
        case "radio":
          return 'selectable';
        case "text":
        case "number":
        case "password":
        case "email":
        case "search":
        case "url":
        case "tel":
        case "date":
        case "datetime-local":
        case "month":
        case "time":
        case "week":
          return 'writeable';
        default:
          return null;
      }
    }
  },
  methods: {
  }
})
</script>

<script lang="ts" setup>
</script>

<style lang="scss">

</style>
