<template>
  <div id="sign-up-page" class="flex-column-center" v-show="readyForView">
    <form class="sign-up-form" @submit.prevent="submit">
      <div class="message-box">
        <message-component
            v-if="signupProgressStatus"
            type="success"
            :message="backendMessage(signupResponse.message)"/>
        <message-component
            v-else-if="showEmailInputError || showFullnameInputError"
            type="error"
            :message="backendMessage(messages.USER_REGISTRATION_FAILED)"/>
        <message-component
            v-else-if="signupProgressStatus === false"
            type="error"
            :message="backendMessage(signupResponse.message)"/>
        <message-component
            v-else
            hide-icon
            type="info"
            :message="$t('get_started.sign_up.welcome_message')"/>
      </div>
      <div class="input-group">
        <input-component
            id="fullname-input"
            type="text"
            name="fullname"
            autocomplete="name"
            placeholder="John Doe"
            v-model="modelSignup.fullname"
            maxlength="50"
            :label="$t('get_started.sign_up.fullname')"
            :left-icon="{ icon: 'person', size: inputSizes.medium.iconSize }"
            :input-size="inputSizes.medium"
            :show-error="{
              message: showFullnameInputError,
              highlight: !!showFullnameInputError
            }"
            required
            clearable
        />
        <br>
        <input-component
            id="email-input"
            type="email"
            name="email"
            autocomplete="email"
            placeholder="example@domain.com"
            v-model="modelSignup.email"
            :label="$t('get_started.sign_up.email')"
            :left-icon="{ icon: 'alternate_email', size: inputSizes.medium.iconSize }"
            :input-size="inputSizes.medium"
            :show-error="{
              message: showEmailInputError,
              highlight: !!showEmailInputError
            }"
            required
            clearable
        />
        <br>
        <input-component
            id="password-input"
            type="password"
            name="password"
            autocomplete="new-password"
            v-model="modelSignup.password"
            :label="$t('get_started.sign_up.password')"
            :left-icon="{ icon: 'lock', size: inputSizes.medium.iconSize }"
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
            clearable
        />
        <br>
        <input-component
            id="terms-of-service"
            name="terms-of-service"
            type="checkbox"
            :html-label="termsOfService.html"
            required
            v-model="termsOfService.value"/>
      </div>
      <input-component
          id="submit-btn"
          type="submit"
          @ready-for-view="setReadyForView"
          :label="$t('get_started.sign_up.submit_btn')"
          button-type="1"
          :left-icon="{ icon: 'lock' }"
          :input-size="{
              width: '100%',
              height: '3.5rem'
          }"
          :disabled="!readyForSubmit"
          :is-loading="submitIsLoading"
      />
    </form>
    <span class="already-have-account">
      {{ $t('get_started.sign_up.already_have_account') }}
      <nuxt-link to="?view=log_in" class="decoration">
      {{ $t('get_started.sign_up.log_in') }}
      </nuxt-link>
    </span>
    <br>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { evaluatePasswordStrength } from "~/assets/scripts/helpers/inputHelpers";
import { useAuthStore } from "~/stores/user/auth";
import { defaults } from "~/assets/scripts/types/models/userAuthModels"
import { backendMessage } from "~/assets/scripts/helpers/generalHelpers";
import { inputSizes } from "~/assets/scripts/configs/defaults.ts";
import messages from "~/assets/scripts/constants/apiMessageKeys";

const signupResponse = defaults.defaultResponses.signup();

export default defineComponent({
  name: "SignUp",
  data(){
    return {
      termsOfService: {
        html: this.$t('get_started.sign_up.terms_of_service'),
        value: false
      },
      readyForView: false,
      submitIsLoading: false,
      redirectToLoginTimeId: null,
      signupResponse,
      messages,
      inputSizes
    }
  },
  computed: {
    passwordStrength() {
      return this.evaluatePasswordStrength(this.modelSignup.password);
    },
    readyForSubmit() {
      let ready = false;
      let { fullname, password, email } = this.modelSignup;
      if (fullname && password && email) {
        if (this.passwordStrength > 1) {
          ready = true;
        }
      }
      if(this.signupProgressStatus === false){
        ready = false;
      }
      return ready;
    },
    modelSignup(){
      const { modelSignup } = useAuthStore();
      return modelSignup;
    },
    signupProgressStatus(){
      return this.signupResponse.success;
    },
    showFullnameInputError(){
      let error = null;
      if (this.signupProgressStatus === false) {
        if (this.signupResponse.message === this.messages.INVALID_FULLNAME) {
          error = this.backendMessage(this.messages.INVALID_FULLNAME);
        }
      }
      return error;
    },
    showEmailInputError(){
      let error = null;
      if (this.signupProgressStatus === false) {
        if (this.signupResponse.message === this.messages.EMAIL_IS_EXIST) {
          error = this.backendMessage(this.messages.EMAIL_IS_EXIST);
        } else if (this.signupResponse.message === this.messages.INVALID_EMAIL) {
          error = this.backendMessage(this.messages.INVALID_EMAIL);
        }
      }
      return error;
    }
  },
  unmounted(){
    this.resetModel();
    clearTimeout(this.redirectToLoginTimeId);
  },
  methods: {
    backendMessage,
    evaluatePasswordStrength,
    async submit() {
      this.submitIsLoading = true;
      const { submitSignup, modelLogin } = useAuthStore();
      await submitSignup()
        .then(response => {
          this.signupResponse = { ...response };
          if(this.signupProgressStatus){
            modelLogin.email = this.modelSignup.email;
            this.redirectToLoginTimeId = setTimeout(() => {
              this.$router.push('?view=log_in');
              clearTimeout(this.redirectToLoginTimeId);
            }, 2000)
          }
        })
        .catch(error => {
          this.signupResponse = { ...error };
        })
        .finally(() => {
          this.submitIsLoading = false;
        });
    },
    resetModel() {
      const { resetModelSignup } = useAuthStore();
      resetModelSignup();
    },
    setReadyForView(val) {
      this.readyForView = val;
    },
  },
  watch: {
    modelSignup: {
      handler(val){
        this.signupResponse = signupResponse;
        clearTimeout(this.redirectToLoginTimeId);
        Object.keys(this.modelSignup).forEach(key => {
          this.modelSignup[key] = this.modelSignup[key]?.trim();
        });
      },
      deep: true
    }
  }
});
</script>

<style scoped lang="scss">
@include for-size($tablet-size, 100vw){
  #sign-up-page {
    form.sign-up-form {
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
      }

      .message-box {
        margin-bottom: 1rem;
      }
    }

    .already-have-account {
      font-size: 1.1rem;
      color: $main_black_color;
    }
  }
}

@include for-size($small-mobile-size, $tablet-size) {
  #sign-up-page {
    form.sign-up-form {
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
      }

      .message-box {
        margin-bottom: 1rem;
      }
    }

    .already-have-account {
      font-size: 1.1rem;
      color: $main_black_color;
    }
  }
}

</style>