<script lang="ts" setup>
const {toasts, deleteToast} = useNotificationToast();
</script>
<script lang="ts">
export default defineComponent({
  name: 'NotificationToast',
});
</script>

<template>
  <div id="notification-toast-container" >
    <toast-component
      v-for="(toast, index) in toasts"
      :toast-id="index"
      :label="toast.label"
      :content="toast.content"
      :timeout="toast.timeout"
      :trigger="toast.trigger"
      :status="toast.status"
      @close="() => deleteToast(index)"
    />
  </div>
</template>

<style scoped lang="scss">
#notification-toast-container {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  height: 80%;
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;
  overflow: hidden;
  transition-duration: $default-transition-duration;
}
</style>