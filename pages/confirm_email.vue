<template>
  <div id="confirm-email-page" class="flex-column-center" v-if="token">
    <div class="message-box flex-column-center" v-if="response.success === null">
      <img src="@/assets/images/gifs/loading1.gif" width="60" alt="loading...">
      <h2>
        {{ $t('email_confirming') }}!
      </h2>
      <span>
        {{ $t('please_wait') }}...
      </span>
    </div>
    <div class="message-box flex-column-center" v-else>
      <div>
        <icon-component
            icon-size="70"
            :icon-name="response.success === true ? 'check_circle' : 'error'"
            :fill="response.success"
            :color="response.success === true ? colorUtilities.$success_color : colorUtilities.$error_color"
        />
      </div>
      <h2>
        {{ backendMessage(response.message) }}
      </h2>
      <span>
          {{ $t('redirecting_to_login') }}...
        </span>
    </div>
  </div>
</template>

<script lang="js">
import {defineComponent} from 'vue'
import {confirmEmailService} from '~/services/user';
import availableAppRoutes from '~/assets/scripts/constants/availableAppRoutes';
import {backendMessage} from "assets/scripts/helpers/generalHelpers.js";
import colorUtilities from "assets/scripts/constants/colorUtilities.js";

export default defineComponent({
  name: "ConfirmEmail",
  methods: {backendMessage},
  computed: {
    colorUtilities() {
      return colorUtilities
    },
    token() {
      return this.$route.query.token || null;
    }
  },
  data() {
    return {
      availableAppRoutes,
      response: {
        success: null,
        message: null
      }
    }
  },
  async mounted() {
    if (this.token) {
      await confirmEmailService({token: this.token || null})
          .then(response => {
            this.response = response.data;
          })
          .catch(error => {
            this.response = error.response.data;
          })
          .finally(() => {
            let tId = setTimeout(() => {
              this.$router.push(this.availableAppRoutes.get_started);
              clearTimeout(tId);
            }, 5000);
          });
    } else {
      this.$router.push(this.availableAppRoutes.get_started);
    }
  }
})
</script>

<style scoped lang="scss">
#confirm-email-page {
  height: 100%;

  .message-box {
    margin-top: 2rem;
    background: $white_color;
    border-radius: 1.1rem;
    width: 30rem;
    height: 20rem;
    box-shadow: $box_shadow_2;
    h2 {
      margin-top: 2rem;
      text-align: center;
      color: $black_color;
    }

    span {
      @include animate-fade-in-out(1.5s);
    }

    img {
      @include animate-bounce();
    }
  }
}
</style>