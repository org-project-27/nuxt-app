<script lang="ts">
import {defineComponent} from 'vue'
import colorUtilities from "~/constants/colorUtilities";
import LoadingPage from "~/components/LoadingPageComponent.vue";

export default defineComponent({
  name: "ButtonInput",
  components: {LoadingPage},
  props: [
    'type',
    'name',
    'label',
    'disabled',
    'isLoading',
    'buttonType',
    'icon'
  ],
  data() {
    return {
      colorUtilities,
      clicked: false
    }
  },
  computed: {
    iconColorDetector() {
      if (this.buttonType === 'main') {
        return this.colorUtilities.$main_white_color
      } else if (this.buttonType === 'second') {
        return this.colorUtilities.$main_color
      } else if (this.buttonType === 'danger') {
        return this.colorUtilities.$error_color
      } else {
        return this.colorUtilities.$third_gray_color
      }
    },
    iconFillDetector() {
      if (this.buttonType === 'main') {
        return true
      } else if (this.buttonType === 'second') {
        return true;
      } else if (this.buttonType === 'danger') {
        return false;
      } else {
        return false;
      }
    }
  },
  methods: {
  }
})
</script>

<template>
  <div
      :id="`input-button-container-${buttonType}`"
      :class="{
        'disabled': disabled,
        'loading': isLoading,
        'clicked': clicked
      }"
      class="input-component-btn"
  >
    <button
        :disabled="disabled"
        :type="type"
        :name="name"
        @mousedown="clicked = true"
        @mouseup="clicked = false"
        @mouseleave="clicked = false"
        :aria-label="label">
      <loading-component
          v-if="isLoading"
          :id="`loading-animation-${label}`"
          size="20"
          type="5"
          color="white"
          speed=".8"
      />
      <span class="icon-area">
        <icon-component
            v-if="icon"
            :icon-name="icon"
            icon-size="1.3rem"
            :fill="iconFillDetector"
            :color="iconColorDetector"/>
      </span>
      <span class="button-label">
          {{ label }}
        </span>
    </button>
  </div>
</template>

<style scoped lang="scss">
$button-sides-padding: 1rem;
$button-input-width: 100%;
$button-input-height: 3rem;
#input-button-container-default {
  $background-color: $third_white_color;
  border-radius: calc($default_border_radius / 3);
  overflow: hidden;
  box-shadow: $box_shadow_6;

  button {
    width: $button-input-width;
    height: $button-input-height;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .3rem;
    padding: 0 $button-sides-padding;
    font-size: $font-size-normal;
    border-radius: calc($default_border_radius / 3);
    border: none;
    cursor: pointer;
    background-color: $background-color;
    transition-duration: $default_transition_duration;
    color: $third_gray_color;
  }

  &.disabled {
    opacity: .4;

    button {
      cursor: not-allowed;
      background-color: $background-color;
      box-shadow: $box_shadow_1;
    }
  }

  &.loading {
    button {
      background-color: darken($background-color, 3%);
      cursor: progress;
      box-shadow: none;

      & > span {
        display: none;
      }
    }
  }
}

#input-button-container-main {
  $background-color: $main_color;
  border-radius: calc($default_border_radius / 3);
  overflow: hidden;
  box-shadow: $box_shadow_6;

  button {
    width: $button-input-width;
    height: $button-input-height;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .3rem;
    padding: 0 $button-sides-padding;
    font-size: $font-size-normal;
    border-radius: calc($default_border_radius / 3);
    border: none;
    cursor: pointer;
    background-color: $background-color;
    transition-duration: $default_transition_duration;
    color: $main_white_color;
  }

  &.disabled {
    opacity: .5 !important;
    box-shadow: $box_shadow_6;

    button {
      cursor: not-allowed;
    }
  }

  &.loading {
    opacity: .4 !important;;

    button {
      cursor: progress;

      & > span {
        display: none;
      }
    }
  }

  &:hover {
    opacity: .8;
  }
}

#input-button-container-second {
  $background-color: transparent;
  border-radius: calc($default_border_radius / 3);
  overflow: hidden;

  button {
    width: $button-input-width;
    height: $button-input-height;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .3rem;
    padding: 0 $button-sides-padding;
    font-size: $font-size-normal;
    border-radius: calc($default_border_radius / 3);
    border: 1px solid $main_color;
    cursor: pointer;
    background-color: $background-color;
    transition-duration: $default_transition_duration;
    color: $main_color;
    box-shadow: none;
  }

  &.disabled {
    opacity: .4;

    button {
      cursor: not-allowed;
      box-shadow: $box_shadow_1;
    }
  }

  &.loading {
    opacity: .4;

    button {
      @include animate-bounce(.5s);
      cursor: progress;

      & > span {
        display: none;
      }
    }
  }
}

#input-button-container-danger {
  $background-color: transparent;
  border-radius: calc($default_border_radius / 3);
  overflow: hidden;

  button {
    width: $button-input-width;
    height: $button-input-height;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .3rem;
    padding: 0 $button-sides-padding;
    font-size: $font-size-normal;
    border-radius: calc($default_border_radius / 3);
    border: 1px solid $error_color;
    cursor: pointer;
    background-color: $background-color;
    transition-duration: $default_transition_duration;
    color: $error_color;
    box-shadow: none;
  }

  &.disabled {
    opacity: .4;

    button {
      cursor: not-allowed;
      box-shadow: $box_shadow_1;
    }
  }

  &.loading {
    opacity: .4;

    button {
      @include animate-bounce(.5s);
      cursor: progress;

      & > span {
        display: none;
      }
    }
  }
}

button {
  user-select: none;
}

.input-component-btn {
  transition-duration: $default-transition-duration;

  &.clicked {
    transform: scale(.96);
  }
}
</style>