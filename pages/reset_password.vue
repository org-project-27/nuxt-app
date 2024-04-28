<template>
  <div id="reset-password-page" class="flex-column-center" v-if="token">
    <div class="message-box flex-column-center" v-if="response.success === null">
      <img src="@/assets/images/gifs/loading1.gif" width="60" alt="loading...">
      <h2>
        {{ $t('please_wait') }}...
      </h2>
    </div>
    <div class="message-box-2 flex-column-center" v-else-if="response.success === true">
      <form @submit.prevent="submit" v-if="responseSubmit.success !== true">
        <div class="description-area">
          <message-component
              v-if="responseSubmit.success === false"
              type="error"
              :message="backendMessage(responseSubmit.message)"/>
          <message-component
              v-else
              hide-icon
              type="info"
              :message="$t('reset_password.new_password_description')"/>
          <br>
        </div>
        <input-component
            id="new-password-input"
            type="password"
            name="password"
            autocomplete="new-password"
            v-model="payload.new_password"
            :label="$t('reset_password.new_password')"
            :input-size="inputSizes.medium"
            :show-error="{
              message: passwordStrength === 1 ? $t('get_started.sign_up.password_levels.weak') : null,
              highlight: passwordStrength === 1
               }"
            :show-warning="{
              message: passwordStrength === 2 ? $t('get_started.sign_up.password_levels.moderate') : null,
              highlight: passwordStrength === 2
               }"
            :show-success="{
              message: passwordStrength === 3 ? $t('get_started.sign_up.password_levels.strong') : null,
               }"
            required
        />
        <input-component
            id="confirm-password-input"
            type="password"
            name="password"
            autocomplete="confirm-password"
            v-model="payload.confirm_password"
            :label="$t('reset_password.confirm_password')"
            :input-size="inputSizes.medium"
            :show-error="{
              message: !checkConfirmPassword ? $t('reset_password.confirm_password_wrong') : null,
              highlight: !checkConfirmPassword
            }"
            required
        />
        <input-component
            id="submit-btn"
            type="submit"
            :label="$t('buttons.save')"
            button-type="1"
            :input-size="inputSizes.medium"
            :disabled="!readyForSubmit"
            :is-loading="submitIsLoading"
        />
      </form>
      <div class="response-message" v-else>
        <div>
          <icon-component
              icon-size="70"
              :icon-name="responseSubmit.success ? 'check_circle' : 'error'"
              :color="responseSubmit.success
                ? colorUtilities.$success_color
                : colorUtilities.$error_color"
          />
        </div>
        <h2>
          {{ backendMessage(responseSubmit.message) }}
        </h2>
        <span>
          {{ $t('redirecting_to_login') }}...
        </span>
      </div>
    </div>
    <div class="message-box-2 flex-column-center" v-else>
      <div class="response-message">
        <div>
          <icon-component
              icon-size="70"
              :icon-name="response.success ? 'check_circle' : 'error'"
              :color="response.success
                ? colorUtilities.$success_color
                : colorUtilities.$error_color"
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
  </div>
</template>

<script lang="js">
import {defineComponent} from 'vue'
import {resetPasswordTokenVerifyService, resetPasswordService} from '~/services/user';
import availableAppRoutes from '~/assets/scripts/constants/availableAppRoutes';
import {backendMessage} from "assets/scripts/helpers/generalHelpers.js";
import colorUtilities from "assets/scripts/constants/colorUtilities.js";
import {inputSizes} from "assets/scripts/configs/defaults";
import {evaluatePasswordStrength} from "~/assets/scripts/helpers/inputHelpers";

export default defineComponent({
  name: "ResetPassword",
  computed: {
    token() {
      return this.$route.query.token || null;
    },
    passwordStrength() {
      return this.evaluatePasswordStrength(this.payload.new_password);
    },
    readyForSubmit() {
      let ready = false;
      if (this.payload.new_password && this.checkConfirmPassword) {
        if (this.passwordStrength > 1) {
          ready = true;
        }
      }
      return ready;
    },
    checkConfirmPassword(){
      return this.payload.new_password === this.payload.confirm_password;
    }
  },
  data() {
    return {
      availableAppRoutes,
      inputSizes,
      colorUtilities,
      submitIsLoading: false,
      response: {
        success: null,
        message: null,
      },
      responseSubmit: {
        success: null,
        message: null,
      },
      payload: {
        new_password: null,
        confirm_password: null,
        token: null
      }
    }
  },
  methods: {
    backendMessage,
    evaluatePasswordStrength,
    async submit() {
      this.submitIsLoading = true;
      if (this.payload.token && this.payload.new_password) {
        await resetPasswordService(this.payload)
            .then(response => {
              this.responseSubmit = response.data;
              let tId = setTimeout(() => {
                this.$router.push(this.availableAppRoutes.get_started);
                clearTimeout(tId);
              }, 5000);
            })
            .catch(error => {
              this.responseSubmit = error.response.data
            })
            .finally(() => {
              this.submitIsLoading = false;
            });
      }
    }
  },
  async mounted() {
    if (this.token) {
      await resetPasswordTokenVerifyService({token: this.token})
          .then(response => {
            this.response = response.data;
            this.payload.token = this.token;
          })
          .catch(error => {
            this.response = error.response.data;
            let tId = setTimeout(() => {
              this.$router.push(this.availableAppRoutes.get_started);
              clearTimeout(tId);
            }, 5000);
          })
    }
  }
})
</script>

<style scoped lang="scss">
@include for-size($tablet-size, 100vw) {
  #reset-password-page {
    $border-style: 2px solid $main_color_2;
    height: 100%;

    & > div {
      width: 32rem;
      margin-top: 1rem;
      padding: 4rem 0;
      background: $white_color;
      border-radius: 1.1rem;
      box-shadow: $box_shadow_2;
      text-align: center;
      border-top: $border-style;
      border-bottom: $border-style;

      img {
        @include animate-bounce();
      }
    }

    .message-box {
      padding: 9rem 0;

      h2 {
        margin-top: 2rem;
        color: $black_color;
        @include animate-fade-in-out(1.5s);
      }
    }

    .message-box-2 {
      h2 {
        text-align: center;
        margin-top: 2rem;
        color: $black_color;
      }

      .response-message {
        padding: 6rem 0;

        span {
          text-align: center;
          @include animate-fade-in-out(1.5s);
        }
      }

      form {
        display: flex;
        flex-direction: column;
        text-align: left;
        gap: 2rem;
        margin-bottom: 20px;
      }

      .description-area {
        width: 23rem
      }
    }
  }
}

@include for-size($small-mobile-size, $tablet-size) {
  #reset-password-page {
    $border-style: 2px solid $main_color_2;
    height: 50vh;
    & > div {
      width: 93vw;
      max-width: 32rem;
      padding: 4rem 0;
      background: $white_color;
      border-radius: 1.1rem;
      box-shadow: $box_shadow_2;
      text-align: center;
      border-top: $border-style;
      border-bottom: $border-style;

      img {
        @include animate-bounce();
      }
    }

    .message-box {
      padding: 9rem 0;

      h2 {
        margin-top: 2rem;
        color: $black_color;
        @include animate-fade-in-out(1.5s);
      }
    }

    .message-box-2 {
      h2 {
        text-align: center;
        margin-top: 2rem;
        color: $black_color;
      }

      .response-message {
        padding: 6rem 0;

        span {
          text-align: center;
          @include animate-fade-in-out(1.5s);
        }
      }

      form {
        display: flex;
        flex-direction: column;
        text-align: left;
        gap: 1.5rem;
        margin-bottom: 20px;
      }

      .description-area {
        width: 23rem
      }
    }
  }
}
</style>