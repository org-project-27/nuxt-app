<template :key="type">
      <span v-if="type === 'error'"
            :class="type">
        <icon-component
            v-if="!hideIcon"
            :fill="iconFill"
            icon-name="error"
            icon-size="25"
            :color="colorUtilities.$error_color_1"/>
            <b>{{ message }}</b>
      </span>
  <span v-else-if="type === 'warn'"
        :class="type">
        <icon-component
            v-if="!hideIcon"
            :fill="iconFill"
            icon-name="warning"
            icon-size="25"
            :color="colorUtilities.$warning_color_3"/>
            <b>{{ message }}</b>
      </span>
  <span v-else-if="type === 'success'"
        :class="type">
        <icon-component
            v-if="!hideIcon"
            :fill="iconFill"
            icon-name="check_circle"
            icon-size="25"
            :color="colorUtilities.$success_color_1"/>
            <b>{{ message }}</b>
      </span>
  <span v-else-if="type === 'info'"
        :class="type">
        <icon-component
            :fill="iconFill"
            v-if="!hideIcon"
            icon-name="info"
            icon-size="25"
            :color="colorUtilities.$black_color_2"/>
            <b>{{ message }}</b>
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
  font-weight: bold;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1.5rem;
  gap: .5rem;
  max-width: 100%;
  b{
    text-align: center;
    overflow-wrap: break-word;
  }
}

span{
  background-color: $white_color_1;
  color: $black_color_1;
  font-family: $font-family-Light;
}

span.error {
  color: $error_color_3;
}

span.warn {
  //color: $warning_color_2;
}

span.success {
  //color: $success_color_3;
}

span.info {
  //color: $black_color_1;
}

span.bounce {
  @include animate-bounce(1.7s);
}
</style>