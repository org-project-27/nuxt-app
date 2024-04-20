<template>
  <div>
    Confirming Email...
  </div>
</template>

<script lang="js">
import {defineComponent} from 'vue'
import { confirmEmailService } from '~/services/user';
import {useAuthStore} from "~/stores/user/auth";
import availableAppRoutes from '~/assets/scripts/constants/availableAppRoutes';

export default defineComponent({
  name: "ConfirmEmail",
  computed: {
    token() {
      return this.$route.query.token || null;
    }
  },
  data() {
    return {
      availableAppRoutes,
    }
  },
  mounted() {
    let { setAuthProgressIsLoading,} = useAuthStore();
    setTimeout(async () => {
      await confirmEmailService({ token: this.token || null }).catch((value) => {
      console.log('====================================');
      console.log('>>>>>>>>', value);
      console.log('====================================');
    }).finally(() => {
      this.$router.push(this.availableAppRoutes.get_started);
    });
    this.$router.push(this.availableAppRoutes.get_started);
    }, 2000);

  }
})
</script>

<style scoped lang="scss">

</style>