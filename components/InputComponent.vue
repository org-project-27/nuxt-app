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
          :icon-size="leftIcon?.size || '1.3rem'"
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

<script src="@/assets/scripts/components/inputComponent.js">
</script>

<style scoped lang="scss">
@import "assets/stylesheets/components/inputComponent";
</style>