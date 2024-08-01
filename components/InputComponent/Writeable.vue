<script lang="ts">
import {defineComponent} from 'vue'
import {generateUniqueId} from "~/utils/helpers/generalHelpers";
import colorUtilities from "~/constants/colorUtilities";
import type {IconsTypes} from "assets/images/icons/materialIconsList";
import type {InputComponentTypeTypes} from "~/constants/types/InputComponentTypes";

export default defineComponent({
  name: "WritableInput",
  methods: {
    generateUniqueId,
    clearButtonEvent() {
      this.modelComputed = null
    },
    showPasswordButtonEvent() {
      this.passwordVisibilityTrigger = !this.passwordVisibilityTrigger;
    }
  },
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
    'icon',
    'clearable',
    'type',
    'min',
    'max',
    'minlength',
    'maxlength',
  ],
  computed: {
    modelComputed: {
      set(val: any) {
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
    sidesStatus() {
      let left = null;
      let right = null;
      if (this.icon) {
        left = true
      }

      if (this.clearable && !this.disabled) {
        if (this.modelComputed && this.modelComputed.length > 0) {
          right = {clearable: true}
        }
      }

      if (this.type === 'password' && !this.disabled) {
        if (this.modelComputed && this.modelComputed.length > 0) {
          right = {showPasswordTrigger: true}
        } else {
          right = {showPasswordTrigger: false}
        }
      }

      return {
        left,
        right,
      }
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
    sideIconColorDetector(){
      let result = this.focusComputed ?
          colorUtilities.$main_color :
          colorUtilities.$third_gray_color;

      if((this.error || this.warning) && this.statusColorDetector) {
        result = this.statusColorDetector;
      }

      return result
    },
    passwordVisibilityTrigger: {
      set(val: boolean) {
        this.showPassword = val;
      },
      get(): boolean {
        return this.showPassword;
      }
    },
    passwordInputIconDetector(): IconsTypes {
      return this.showPassword ? 'visibility' : 'visibility_off';
    },
    inputTypeDetector(): InputComponentTypeTypes {
      let result: InputComponentTypeTypes = this.type;
      if (this.passwordVisibilityTrigger) {
        result = 'text'
      }
      return result;
    },
    minComputed() {
      return this.min;
    },
    maxComputed() {
      if(!this.max && this.type === 'date') {
        return this.birthdateLimit;
      }
      return this.max;
    },
    minLengthComputed() {
      return this.minlength;
    },
    maxLengthComputed() {
      return this.maxlength;
    },
    birthdateLimit() {
      let currentDay: string | number = new Date().getDate();
      let currentMonth: string | number = new Date().getMonth() + 1;
      let currentYear: string | number = new Date().getFullYear() - 18;

      if (Number(currentDay) < 10) {
        currentDay = `0${currentDay}`;
      }
      if (Number(currentMonth) < 10) {
        currentMonth = `0${currentMonth}`;
      }

      if (this.type === 'date') {
        if(this.autocomplete === 'bday' || this.name === 'birthdate'){
          return `${currentYear}-${currentMonth}-${currentDay}`;
        }
      }
      return null
    }
  },
  data() {
    return {
      colorUtilities,
      showPassword: false,
      inputFocus: false,
      sideIconSize: '1.8rem',
      localId: '',
    }
  },
  mounted() {
    this.localId = this.generateUniqueId();
  }
})
</script>

<template>
  <div
      id="input-writeable-container"
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
    <label :for="'input-writeable-' + localId" v-if="label">
      {{ label }} <span v-if="required">*</span>
    </label>
    <div class="input-container">
      <div class="left-area" v-if="sidesStatus.left">
        <div class="left-icon-area">
          <icon-component
              :icon-name="icon"
              :icon-size="sideIconSize"
              :fill="focusComputed"
              :color="sideIconColorDetector"
          />
        </div>
      </div>
      <input
          :id="`input-writeable-${localId}`"
          :type="inputTypeDetector"
          :name="name"
          :disabled="disabled"
          :required="required"
          :aria-label="label"
          :min="minComputed"
          :max="maxComputed"
          :minlength="minLengthComputed"
          :maxlength="maxLengthComputed"
          :autocomplete="autocomplete"
          :placeholder="placeholder"
          @focusin="focusComputed = true"
          @focusout="focusComputed = false"
          v-model="modelComputed">
      <div class="right-area" v-if="sidesStatus.right">
        <div class="clear-btn-area" v-if="sidesStatus.right.clearable" @click.prevent="clearButtonEvent">
          <button class="transparent-btn" type="button" @click.prevent="clearButtonEvent">
            <icon-component
                icon-name="close"
                :color="colorUtilities.$main_color"
                icon-size="1.5rem"/>
          </button>
        </div>
        <div class="clear-btn-area" v-if="sidesStatus.right.showPasswordTrigger">
          <button class="transparent-btn" type="button" @click.prevent="showPasswordButtonEvent">
            <icon-component
                :fill="passwordVisibilityTrigger"
                :icon-name="passwordInputIconDetector"
                :color="passwordVisibilityTrigger ?
                        colorUtilities.$main_color :
                        colorUtilities.$third_gray_color"
                :icon-size="sideIconSize"/>
          </button>
        </div>
      </div>
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
#input-writeable-container {
  $writeable-sides-width: 3rem;
  $writeable-input-height: 3rem;
  display: flex;
  flex-direction: column;

  .input-container {
    input {
      height: $writeable-input-height;
      padding: 0 .8rem;
      &::placeholder {
        opacity: 0.1;
      }
    }

    input[type='date'],
    input[type='datetime-local'],
    input[type='week'],
    input[type='month'],
    input[type='time'] {
      cursor: pointer;
    }

    .right-area,
    .left-area {
      min-width: $writeable-sides-width !important;
      max-width: $writeable-sides-width !important;
      display: flex;
      align-items: center;
      justify-content: center;
      height: $writeable-input-height;

      button.transparent-btn {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .right-area {
      //border-left: 1px solid $default_border_color;
      div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }
    }

    .left-area {
      background-color: $third_white_color;
      border-right: 1px solid $default_border_color;
    }
  }
}
</style>