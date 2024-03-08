<template>
  <div id="log-in-page" class="flex-column-center" v-show="readyForView">
    <form class="log-in-form" @submit.prevent="submit">
      <div class="message-box">
        <message-component
            v-if="!showEmailInputError && loginProgressStatus === false"
            type="error"
            :message="backendMessage(loginResponse.message)"/>
        <message-component
            v-else
            hide-icon
            type="info"
            :message="$t('get_started.log_in.welcome_message')" />
      </div>
      <div class="input-group">
        <input-component
            id="email-input"
            type="email"
            name="email"
            placeholder="example@domain.com"
            v-model="modelLogin.email"
            autocomplete="email"
            :label="$t('get_started.log_in.email')"
            :left-icon="{ icon: 'alternate_email', size: '2.5rem' }"
            :input-size="{
              width: '100%',
              height: '4rem'
            }"
            :show-error="{
              message: showEmailInputError,
              highlight: !!showEmailInputError
            }"
            required
            clearable />
        <br>
        <input-component
            id="password-input"
            type="password"
            name="password"
            autocomplete="current-password"
            v-model="modelLogin.password"
            :label="$t('get_started.log_in.password')"
            :left-icon="{ icon: 'lock', size: '2.5rem' }"
            :input-size="{
              width: '100%',
              height: '4rem'
            }"
            required
            clearable />
        <div class="forget-password-area">
          <nuxt-link to="/forgot_password" class="decoration">
            {{ $t('get_started.log_in.forget_password') }}
          </nuxt-link>
        </div>
      </div>
      <input-component
          id="submit-btn"
          type="submit"
          button-type="1"
          :label="$t('get_started.log_in.submit_btn')"
          @ready-for-view="setReadyForView"
          :left-icon="{ icon: 'lock' }"
          :input-size="{
            width: '100%',
            height: '3.5rem'
          }"
          :is-loading="submitIsLoading"
          :disabled="!readyForSubmit" />
    </form>
    <span class="no-account-yet">
      {{ $t('get_started.log_in.no_account_yet') }}
      <nuxt-link to="?view=sign_up" class="decoration">
        {{ $t('get_started.log_in.sign_up') }}
      </nuxt-link>
      {{ $t('get_started.log_in.now').toLowerCase() }}!
    </span>
    <br>
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import { useAuthStore } from "~/stores/user/auth";
import { defaults } from "~/assets/scripts/types/models/userAuthModels"
import { backendMessage } from "~/assets/scripts/helpers/generalHelpers";
import messages from "~/assets/scripts/constants/apiMessageKeys";

const loginResponse = defaults.defaultResponses.login();

export default defineComponent({
  name: "LogIn",
  computed: {
    readyForSubmit() {
      let ready = false;
      let { password, email } = this.modelLogin;
      if (password && email) {
        ready = true
      }
      return ready;
    },
    modelLogin() {
      const { modelLogin } = useAuthStore();
      return modelLogin;
    },
    loginProgressStatus() {
      return this.loginResponse.success;
    },
    showEmailInputError(){
      let error = null;
      if (this.loginProgressStatus === false &&
          this.loginResponse.message === this.messages.INVALID_EMAIL) {
          error = this.backendMessage(this.messages.INVALID_EMAIL);
      }
      return error;
    }
  },
  data: () => {
    return {
      readyForView: false,
      submitIsLoading: false,
      loginResponse,
      messages,
    }
  },
  unmounted() {
    this.resetModel();
  },
  methods: {
    backendMessage,
    async submit() {
      this.submitIsLoading = true;
      const { submitLogin, authUser, afterAuthPath } = useAuthStore();
      await submitLogin()
        .then(async (response) => {
          this.loginResponse = { ... response };
          if(this.loginResponse.success){
            // Getting auth user
            await authUser()
                .then(() => this.$router.push(afterAuthPath))
                .finally(() => this.submitIsLoading = false);
          }
        })
        .catch(error => {
          this.loginResponse = { ...error };
        })
        .finally(() => {
          this.submitIsLoading = false;
        });
    },
    resetModel() {
      const { resetModelLogin } = useAuthStore();
      resetModelLogin();
    },
    setReadyForView(val) {
      this.readyForView = val;
    }
  },
  watch: {
    modelLogin: {
      handler(val) {
        this.loginResponse = loginResponse;
        Object.keys(this.modelLogin).forEach(key => {
          this.modelLogin[key] = this.modelLogin[key]?.trim();
        });
      },
      deep: true
    }
  }
});
</script>

<style scoped lang="scss">
@include for-size($tablet-size, 100vw) {
  #log-in-page {
    form.log-in-form {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      margin: 2.5rem 0;

      .input-group {
        display: flex;
        flex-direction: column;
        gap: .4rem;
        width: 100%;

        .forget-password-area {
          width: 100%;
          text-align: right;
          margin-top: .5rem;
          a {
            font-size: 1rem;
            color: $black_color_6;
          }
        }
      }

      .message-box {
        margin-bottom: 1rem;
      }
    }

    .no-account-yet {
      font-size: 1.1rem;
      color: $black_color;
    }
  }
}

@include for-size($small-mobile-size, $tablet-size){
  #log-in-page {
    form.log-in-form {
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      margin: 2.5rem 0;

      .input-group {
        display: flex;
        flex-direction: column;
        gap: .4rem;
        width: 100%;

        .forget-password-area {
          width: 100%;
          text-align: right;
          margin-top: .5rem;
          a {
            font-size: 1rem;
            color: $black_color_6;
          }
        }
      }

      .message-box {
        margin-bottom: 1rem;
      }
    }

    .no-account-yet {
      font-size: 1.1rem;
      color: $black_color;
    }
  }
}

</style>