<template>
  <div
      v-if="inputCategory === 'writeable'"
      v-show="readyForView"
      ref="input-component"
      class="input-component writeable"
      :class="{
        'active': focusComputed,
        'deactive': !focusComputed,
        'disabled': disabled,
        'message-active': inputMessage.message,
        'info': inputMessage.key === 'info',
        'error': inputMessage.key === 'error',
        'warning': inputMessage.key === 'warning',
        'success': inputMessage.key === 'success',
      }">
    <label
        :for="idComputed"
        class="cannot-select"
        v-if="labelActive">
      {{ label }} {{required && !disabled ? '*' : null}}
    </label>
    <div class="input-container flex-row-center">
      <div class="left-side" :class="{'deactive': !showInputLeftSideArea}">
        <icon-component
            class="input-icon"
            :fill="focusComputed"
            :icon-name="leftIcon?.icon"
            :icon-size="leftIcon?.size"
            :color="iconColorDetecter(leftIcon?.color)"/>
      </div>
      <input
          :id="idComputed"
          :type="type"
          :name="name"
          :required="required"
          :autofocus="autofocus"
          :placeholder="placeholder"
          :maxlength="maxlength"
          :readonly="readonly"
          :disabled="disabled"
          :pattern="pattern"
          :style="inputStyle"
          :autocomplete="autocomplete"
          @focusin="focusComputed = true"
          @focusout="focusComputed = false"
          @input="handleInputChange"
          v-model="modelComputed"/>
      <div class="right-side" :class="{'deactive': !showInputRightSideArea}">
        <div
            class="cannot-select char-counter"
            v-if="showMaxLengthCounter">
          {{ modelValue.length }}/{{ maxlength }}
        </div>
        <icon-component
            v-if="showClearButton"
            @click.stop="clearAllButton"
            icon-name="backspace"
            :icon-size="leftIcon?.size || '2rem'"
            class="clear-icon"
            :color="iconColorDetecter(leftIcon?.color)"/>
      </div>
    </div>
    <div v-if="!!inputMessage.message" class="message-area cannot-select">
      <icon-component
          v-if="!!inputMessage.icon"
          :icon-name="inputMessage.icon"
          icon-size="1.3rem"
          class="message-icon"
          :color="inputMessage.color"/>
      <span :style="{'color': inputMessage.color}">
        {{inputMessage.message}}
      </span>
    </div>
  </div>
  <div
      v-else-if="inputCategory === 'password'"
      v-show="readyForView"
      ref="input-component"
      class="input-component writeable"
      :class="{
        'active': focusComputed,
        'deactive': !focusComputed,
        'disabled': disabled,
        'message-active': inputMessage.message,
        'info': inputMessage.key === 'info',
        'error': inputMessage.key === 'error',
        'warning': inputMessage.key === 'warning',
        'success': inputMessage.key === 'success',
      }">
    <label
        :for="idComputed"
        class="cannot-select"
        v-if="labelActive">
      {{ label }} {{required && !disabled ? '*' : null}}
    </label>
    <div class="input-container flex-row-center">
      <div class="left-side" :class="{'deactive': !showInputLeftSideArea}">
        <icon-component
            class="input-icon"
            :fill="focusComputed"
            :icon-name="leftIcon?.icon"
            :icon-size="leftIcon?.size"
            :color="iconColorDetecter(leftIcon?.color)"/>
      </div>
      <input
          :id="idComputed"
          :type="visibilityTrigger ? 'text' : type"
          :name="name"
          :required="required"
          :autofocus="autofocus"
          :placeholder="placeholder || '•••••••••'"
          :maxlength="maxlength"
          :readonly="readonly"
          :disabled="disabled"
          :pattern="pattern"
          :style="inputStyle"
          :autocomplete="autocomplete"
          @focusin="focusComputed = true"
          @focusout="focusComputed = false"
          @input="handleInputChange"
          v-model="modelComputed"/>
      <div class="right-side" :class="{'deactive': !showInputRightSideArea}">
        <icon-component
            v-if="modelComputed"
            @click.stop="visibilityTrigger = !visibilityTrigger"
            :icon-name="visibilityTrigger ? 'visibility' : 'visibility_off'"
            icon-size="2rem"
            class="clear-icon"
            :color="iconColorDetecter(leftIcon?.color)"/>
      </div>
    </div>
    <div v-if="!!inputMessage.message" class="message-area cannot-select">
      <icon-component
          v-if="!!inputMessage.icon"
          :icon-name="inputMessage.icon"
          icon-size="1.3rem"
          class="message-icon"
          :color="inputMessage.color"/>
      <span :style="{'color': inputMessage.color}">
        {{ inputMessage.message }}
      </span>
    </div>
  </div>
  <div
      v-else-if="inputCategory === 'buttons'"
      class="input-component buttons cannot-select"
      :class="
        `${isLoading ? 'is-loading' : ''}` +
        ` ${disabled ? 'disabled' : ''}` +
        ' button-type-' + buttonType"
      ref="input-component"
      v-show="readyForView">
    <div v-if="isLoading" class="image-box">
      <loading-component
          :id="idComputed"
          size="25"
          type="5"
          color="white"
          speed=".8"/>
    </div>
    <input
        :id="idComputed"
        :type="type"
        :name="name"
        :autofocus="autofocus"
        :disabled="disabled"
        :style="inputStyle"
        :value="label"
        :class="{'mid-size': midSize}"
        @click.stop="$emit('click')"
        v-else
    />
  </div>
  <div
      class="input-component selectable"
      :class="{ 'disabled': disabled }"
      v-else-if="inputCategory === 'selectable'"
      v-show="readyForView">
    <input
        :id="idComputed"
        :type="type"
        :name="name"
        :autofocus="autofocus"
        :disabled="disabled"
        :style="inputStyle"
        :value="value"
        :required="required"
        :class="{ 'disabled': disabled }"
        @click.stop="$emit('click')"
        v-model="modelComputed" />
    <label
        :for="idComputed"
        class="cannot-select"
        :class="{ 'disabled': disabled }"
        v-if="label">{{ label }}</label>
    <label
        :for="idComputed"
        class="cannot-select"
        :class="{ 'disabled': disabled }"
        v-else-if="htmlLabel">
        <span v-html="htmlLabel"></span>
    </label>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import {
  developerAnnounce,
  generateUniqueId,
} from '~/utils/helpers/generalHelpers.js';
import {inputCategories, inputTypes} from "~/constants/inputConstants.js";
import colorUtilities from "~/constants/colorUtilities.js";

//#TODO: This components aren't Vue file. Be careful for it!
import IconComponent from "~/components/IconComponent.vue";
import LoadingComponent from "~/components/LoadingComponent.vue";

export default defineComponent({
  name: "InputComponent",
  components: { IconComponent, LoadingComponent },
  emits: [
    'click',
    'inputFocus',
    'readyForView',
    'update:modelValue',
  ],
  props: {
    inputStyle: Object,
    style: Object,
    leftIcon: Object,
    id: [String, Number],
    required: Boolean,
    autofocus: Boolean,
    readonly: Boolean,
    autocomplete: String,
    disabled: Boolean,
    pattern: String,
    maxlength: [Number, String],
    value: [Number, String, Object, Boolean],
    label: String,
    htmlLabel: String,
    isLoading: Boolean,
    midSize: Boolean,
    type: {
      type: String,
      default: () => 'text'
    },
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
      default: () => null
    },
    clearable: {
      type: Boolean,
      default: () => false
    },
    hideMaxlengthCounter: {
      type: Boolean,
      default: () => false
    },
    buttonType: {
      type: String,
      default: () => '0'
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
    colorUtilities() {
      return colorUtilities
    },
    idComputed(){
      if(!this.id){
        developerAnnounce('Input component required an id!');
        return this.generateUniqueId();
      }
      return this.id;
    },
    modelComputed:{
      set(val){
        if(!this.disabled){
          this.model = val;
          this.$emit('update:modelValue', val);
        }
      },
      get(){
        return this.model;
      }
    },
    focusComputed: {
      set(val){
        this.inputFocus = val;
        this.$emit('inputFocus', val);
      },
      get(){
        return this.inputFocus;
      }
    },
    labelActive(){
      return this.label;
    },
    showMaxLengthCounter(){
      return this.typing
          && this.inputFocus
          && (this.maxlength
              && this.modelValue
              && !this.hideMaxlengthCounter);
    },
    showClearButton(){
      return !this.typing && (this.modelComputed && this.clearable);
    },
    showInputRightSideArea(){
      if(this.inputCategory === 'password'){
        return true;
      } else {
        return this.showMaxLengthCounter || this.showClearButton;
      }
    },
    showInputLeftSideArea(){
      return this.leftIcon;
    },
    inputCategory() {
      if(this.type){
        if(inputTypes.includes(this.type)){
          return Object.keys(inputCategories).find(key => {
            return inputCategories[key].includes(this.type)
          })
        }
      }
      return null;
    },
    inputMessage(){
      let messageData = {
        key: null,
        message: null,
        color: null,
        icon: null
      }
      if (this.showError.message || this.showError.highlight){
        messageData.key = this.showError.highlight ? 'error' : null;
        messageData.icon = this.showError.icon || 'error';
        messageData.message = this.showError.message;
        messageData.color = colorUtilities.$error_color;
      } else if (this.showWarning.message || this.showWarning.highlight){
        messageData.key = this.showWarning.highlight ? 'warning' : null;
        messageData.icon = this.showWarning.icon || 'warning';
        messageData.message = this.showWarning.message;
        messageData.color = colorUtilities.$warning_color
      } else if (this.showSuccess.message || this.showSuccess.highlight){
        messageData.key = this.showSuccess.highlight ? 'success' : null;
        messageData.icon = this.showSuccess.icon || 'check_circle';
        messageData.message = this.showSuccess.message;
        messageData.color = colorUtilities.$success_color;
      } else if (this.showInfo.message || this.showInfo.highlight){
        messageData.key = this.showInfo.highlight ? 'info' : null;
        messageData.icon = this.showInfo.icon || 'info';
        messageData.message = this.showInfo.message;
        messageData.color = colorUtilities.$main_black_color;
      }
      return messageData
    },
    visibilityTrigger: {
      set(val){
        this.passwordVisibilityTrigger = val;
      },
      get(){
        return this.passwordVisibilityTrigger;
      }
    }
  },
  data() {
    return {
      inputTypes,
      model: null,
      readyForView: false,
      inputFocus: false,
      typing: false,
      debounceId: null,
      passwordVisibilityTrigger: false
    }
  },
  mounted() {
    const input = this.$refs['input-component'];
    if(input){
      if(this.modelValue){
        this.modelComputed = this.modelValue;
      }
      if(this.inputSize){
        input.style.width = this.inputSize.width;
        input.style.height = this.inputSize.height;
      }
      if(this.midSize){
        input.style.width = 100 + 'px';
        input.style.height = 30 + 'px';
      }
      if(this.style){
        Object.entries(this.style).forEach(([key, value]) => {
          input.style[key] = value;
        });
      }
    }
    this.readyForView = true;
  },
  unmounted() {
    this.readyForView = false;
  },
  watch: {
    modelValue(val, oldVal){
      if(val !== oldVal && !this.disabled){
        this.modelComputed = this.modelValue;
      }
    },
    readyForView(val) {
      this.$emit('readyForView', val)
    }
  },
  methods:{
    generateUniqueId,
    clearAllButton(){
      this.modelComputed = null;
      const input = document.getElementById(this.idComputed);
      if(input){
        input.focus();
      }
    },
    handleInputChange(){
      this.typing = true;
      this.customDebounce(function (){
        this.typing = false;
      })();
    },
    customDebounce(func, delay = 400) {
      const self = this
      return function(...args) {
        clearTimeout(self.debounceId);
        self.debounceId = setTimeout(() => {
          func.apply(self, args);
        }, delay);
      };
    },
    iconColorDetecter(main) {
      if(this.focusComputed){
        return main ? main : colorUtilities.$main_color;
      }
      return colorUtilities.$main_black_color
    },
  }
});
</script>

<style scoped lang="scss">
$active-color: $main_color;
$disabled-color: $main_black_color;

// Category: Writeables & Password
.input-component.writeable{
  border-radius: 5px;
  //overflow: hidden;
  transition-duration: $default-transition-duration;
  label{
    position: absolute;
    font-size: 1rem;
    margin-top: -7px;
    margin-left: 10px;
    background-color: $main_white_color;
    height: 12px;
    padding: 0 3px;
  }
  .message-area{
    display: flex;
    align-items: center;
    gap: 3px;
    justify-content: center;
    font-size: .8rem;
    margin-top: 5px;
    div{
      width: 20px;
    }
    span{
      display: flex;
      align-items: center;
      width: 100%;
    }
  }
  .input-container{
    background-color: transparent;
    width: 100%;
    height: 100%;
    overflow: hidden;
    &>div{
      min-width: 3rem;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      &.deactive{
        min-width: 10px;
      }
    }
    .input-icon{
      position: relative;
      top: 1px;
    }
    .clear-icon{
      cursor: pointer;
    }
    .char-counter{
      font-size: 12px;
      position: relative;
      cursor: pointer;
      color: $disabled-color;
    }
    input{
      //background-color: #EDF5FF;
      font-size: 1.2rem;
      border: none;
      width: 100%;
      height: 100%;
      outline: none;
      background-color: transparent;
      &::placeholder{
        font-style: oblique;
      }
    }
  }

  &.message-active{ margin-bottom: 20px; }

  &.active{
    box-shadow: $box_shadow_0 !important;
    border: 1px solid $active-color !important;
    background-color: $main_white_color !important;
    input{
      color: $main_black_color !important;
      &::placeholder{
        opacity: .6;
      }
    }
    label {
      color: $active-color !important;
    }
  }

  &.deactive{
    border: 1px solid $disabled-color;
    input{
      color: $disabled-color;
      &::placeholder{
        opacity: .4;
      }
    }
    label{
      color: $disabled-color;
    }
  }

  &.disabled{
    border: 1px solid ;
    opacity: 0.3;
    cursor: not-allowed;
    input{
      color: $disabled-color;
      &::placeholder{
        opacity: .4;
      }
      &:disabled{
        background-color: transparent;
        cursor: not-allowed;
      }
    }
    label{
      color: $disabled-color;
    }
  }

  &.error{
    background-color: lighten($error_color, 55%);
    border: 1px solid $error-color;
    label{ color: $error-color; }
  }

  &.warning{
    background-color: lighten($warning_color, 49%);
    border: 1px solid $warning-color;
    label{ color: $warning-color; }
  }

  &.info{
    //background-color: $info_color_8;
    //border: 1px solid $info_color_1;
    //label{ color: $info_color_1; }
  }
}

// Category: Buttons
.input-component.buttons{
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  transition-duration: $default-transition-duration;
  box-shadow: $box_shadow_1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $main_black_color;
  input{
    cursor: pointer;
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    font-size: 1.5rem;
    font-weight: bold;
    &.mid-size{
      font-size: 1rem;
    }
  }
  &.is-loading{
    background-color: $main_black_color;
    cursor: wait !important;
    box-shadow: $box_shadow__1;
  }
  &.button-type-0{
    $type-0: #eee;
    background-color: $type-0;
    input{
      font-size: 1.2rem !important;
      color: $main_black_color;
      font-weight: bold !important;
    }
    &.is-loading{
      cursor: wait !important;
      opacity: 1 !important;
      background-color: darken($type-0, 7%);
    }

  }

  &.button-type-1{
    background-color: $main_color;
    input{
      color: $main_white_color;
    }
    &.is-loading{
      cursor: wait !important;
      opacity: .7 !important;
    }
  }

  &.button-type-2{
    background-color: $main_color;
    border: 1px solid $main_color;
    box-shadow: none;
    input{
      color: $main_color;
    }
    &.is-loading{
      cursor: wait !important;
    }
  }

  &.button-type-danger{
    background-color: $error_color;
    input{
      color: $main_white_color;
    }
    &.is-loading{
      cursor: wait !important;
      opacity: .7 !important;
    }
  }

  &.button-type-success{
    background-color: $success_color;
    input{
      color: $main_white_color;
    }
    &.is-loading{
      cursor: wait !important;
      opacity: .7 !important;
    }
  }

  &:active{
    box-shadow: $box_shadow__1;
    input{
      opacity: .7;
    }
  }

  &.disabled{
    //background-color: $main_black_color;
    cursor: not-allowed !important;
    box-shadow: $box_shadow__1;
    input{
      //color: $main_black_color;
      cursor: not-allowed !important;
      opacity: .7;
    }
    opacity: .5;
  }

  .image-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}

// Category: Checkbox & Radio
.input-component.selectable{
  display: flex;
  align-items: center;
  gap: 1.2rem;
  height: 100% !important;
  $checkbox-bg-color: lighten($main_color, 0%);
  $checkbox-checkmark-color: $main_white_color;

  input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    border: .1rem solid darken($checkbox-bg-color, 5%);
    border-radius: .25rem;
    cursor: pointer;
    position: relative;

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
  label{
    color: $main_black_color;
    cursor: pointer;
    font-size: 1.1rem;
    &.disabled{
      opacity: .5;
      cursor: not-allowed;
    }
  }
}
</style>