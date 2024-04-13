<template>
  <div>
    Confirming Email...
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import { confirmEmailService } from '~/services/user';
import {useAuthStore} from "~/stores/user/auth";
import availableAppRoutes from "assets/scripts/constants/availableAppRoutes";

export default defineComponent({
  name: "confirm_email",
  computed: {
    token(): any {
      return this.$route.query.token || null;
    }
  },
  data() {
    return {
      responseValue: {}
    }
  },
  async mounted() {
    let { setAuthProgressIsLoading,} = useAuthStore();
    setAuthProgressIsLoading(true);
    await confirmEmailService({ token: this.token || null }).then((value) => {
      this.responseValue = value.data;
    }).finally(() => setAuthProgressIsLoading(false));
    document.location.href = availableAppRoutes.profile;
  }
})
</script>
<script setup lang="ts">
definePageMeta({
  layout: 'general'
})
</script>

<style scoped lang="scss">

</style>