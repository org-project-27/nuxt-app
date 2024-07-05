<template :key="type">
      <span v-if="type === 'error'"
            :class="type">
        <icon-component
            v-if="!hideIcon"
            :fill="iconFill"
            icon-name="error"
            icon-size="25"
            :color="colorUtilities.$error_color"/>
            <p>{{ message }}</p>
      </span>
  <span v-else-if="type === 'warn'"
        :class="type">
        <icon-component
            v-if="!hideIcon"
            :fill="iconFill"
            icon-name="warning"
            icon-size="25"
            :color="colorUtilities.$warning_color"/>
            <p>{{ message }}</p>
      </span>
  <span v-else-if="type === 'success'"
        :class="type">
        <icon-component
            v-if="!hideIcon"
            :fill="iconFill"
            icon-name="check_circle"
            icon-size="25"
            :color="colorUtilities.$success_color"/>
            <p>{{ message }}</p>
      </span>
  <span v-else-if="type === 'info'"
        :class="type">
        <icon-component
            :fill="iconFill"
            v-if="!hideIcon"
            icon-name="info"
            icon-size="25"
            :color="colorUtilities.$main_black_color"/>
            <p>{{ message }}</p>
      </span>
</template>

<script lang="js">
import {defineComponent} from 'vue';

let timeOutId;
export default defineComponent({
  name: "MessageComponent",
  props: {
    message: [String, Number],
    type: {
      type: String,
      default: () => 'warn',
    },
    hideIcon: Boolean,
    hideAnimation: Boolean,
    iconFill: {
      type: Boolean,
      default: () => true
    }
  },
  setup(){
    const { $colorUtilities } = useNuxtApp();
    return {
      colorUtilities: $colorUtilities
    }
  },
  data() {
    return {
      timeOut: 1200,
      timeOutId,
    }
  },
  methods: {
    addBounceEffect() {
      this.timeOutId = setTimeout(() => {
        const element = document.getElementsByClassName(this.type)[0];
        if (element) {
          element.classList.add('bounce');
        }
        clearTimeout(this.timeOutId);
      }, this.timeOut);
    },
  },
  mounted() {
      if(!this.hideAnimation){
        this.addBounceEffect();
      }
  },
  unmounted() {
    clearTimeout(this.timeOutId);
  }
});

</script>

<style scoped lang="scss">
span {
  @include animate-intro-shifting-x(1s);
  user-select: none;
  font-size: 1.1rem;
  border-radius: 8px;
  box-shadow: $box_shadow_2;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1.5rem;
  gap: .5rem;
  max-width: 100%;
  p{
    text-align: center;
    overflow-wrap: break-word;
  }
}

span{
  background-color: $third_background_color;
  color: $main_black_color;
}

span.error {
  color: $error_color;
}

span.warn {
  //color: $warning_color;
}

span.success {
  //color: $success_color;
}

span.info {
  //color: $main_black_color;
}

span.bounce {
  @include animate-bounce(1.7s);
}
</style>