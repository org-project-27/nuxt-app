<script lang="ts">
import {defineComponent} from 'vue'
import iconsList, {type IconsTypes} from "assets/images/icons/materialIconsList";

let optionsCanBeSelected = Object.keys(iconsList)

export default defineComponent({
  name: "CardComponent",
  props: {
    viewType: {
      type: String,
      default: () => {
        return '1'
      }
    },
    label: {
      type: String,
      required: true
    },
    closeable: {
      type: Boolean,
      default: () => false
    },
    icon: {
      type: String as () => IconsTypes,
      validator: function(value: string) { return optionsCanBeSelected.includes(value) },
    },
  },
  computed: {
    visible: {
      set(val: boolean){
        this.isVisible = val;
        this.$emit('visibleChange', val);
      },
      get(): boolean{
        return this.visible;
      }
    }
  },
  data() {
    return {
      isVisible: true,
    }
  }
});
</script>

<template>
  <section v-if="isVisible">
    <div :id="`card-component-${viewType}`" v-if="viewType === '1'">
      <header class="flex-row-between-center">
        <div class="label-area">
          <div>
            <icon-component v-if="icon" :icon-name="icon" icon-size="2rem"/>
          </div>
          <h3>{{ label }}</h3>
        </div>
        <button v-if="closeable" @click="() => visible = false">
          <icon-component icon-name="close" icon-size="25"/>
        </button>
      </header>
      <main>
        <slot></slot>
      </main>
    </div>
  </section>
</template>

<style scoped lang="scss">
#card-component-1 {
  display: flex;
  flex-direction: column;
  box-shadow: $box_shadow_1;
  background-color: $main_white_color;
  border-radius: 1rem;
  overflow: hidden;
  width: 100%;
  transition-duration: $default_transition_duration;
  header {
    background-color: $second_white_color;
    border-bottom: 2px solid $default_border_color;
    font-size: $font-size-input;
    padding: 1.5rem 1rem;
    button {
      cursor: pointer;
      background-color: transparent;
      border: none;
    }
    .label-area {
      display: flex;
      align-items: center;
      gap: .5rem
    }
  }
  main {
    padding: 2rem;
    background-color: lighten($second_white_color, 1.5);
  }
  &:hover {
    box-shadow: $box_shadow_2;
  }
}
</style>