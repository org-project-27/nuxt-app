<script lang="ts" setup>
const emit = defineEmits(['close'])
function closeToast(event: Event) {
  emit('close', event);
}

</script>
<script lang="ts">
export default defineComponent({
  name: 'ToastComponent',
  props: {
    toastId: {
      type: String as () => any,
      required: true
    },
    label: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    timeout: {
      type: Number,
      default: () => 0
    },
    trigger: {
      required: false,
      default: () => {
        return () => { console.log('default trigger') }
      },
    }
  },
  data() {
    return {
      tIds: {
        active: '',
        outro: ''
      }
    }
  },
  mounted() {
    if(this.toastId){
      const element = document.getElementById(this.toastId);
      if(element) {
        // @ts-ignore
        this.tIds['active'] = setTimeout(() => {
          element.classList.add('active');
          clearTimeout(this.tIds.active)
        }, 1000);
        if(this.timeout > 0) {
          // @ts-ignore
          this.tIds['outro'] = setTimeout(() => {
            element.classList.remove('active');
            element.classList.add('outro');
            clearTimeout(this.tIds.outro)
          }, this.timeout);
        }
      }
    }
  },
  unmounted() {
    clearTimeout(this.tIds.active);
    clearTimeout(this.tIds.outro);
  }
});
</script>

<template>
  <div
      :id="toastId"
      class="notification-toast-container">
    <div class="toast-header flex-row-between-center">
      <h3 v-if="label">{{label}}</h3>
      <div class="icon-are">
        <button @click.prevent="closeToast" class="transparent-btn">
          <icon-component icon-name="close" icon-size="1.6rem"/>
        </button>
      </div>
    </div>
    <div class="toast-body">
      <p v-if="content" v-html="content"></p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.notification-toast-container {
  //border: 1px solid $main_color;
  border-radius: .5rem;
  box-shadow: $box-shadow-main_color_1;
  background-color: $second_color_transparent;
  width: 22rem;
  max-height: 15rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  @include animate-intro-shifting-x(1s);
  &.active {
    @include animate-bounce(1s);
  }
  &.outro {
    @include animate-outro-shifting-x(1s);
  }
  .toast-body {
    height: 90%;
    overflow-y: auto;
  }
}
</style>