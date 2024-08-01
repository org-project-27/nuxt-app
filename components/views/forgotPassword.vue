<script lang="js">
import { defineComponent } from 'vue';
import { useAuthStore } from "~/stores/user/auth";
import { backendMessage } from "~/utils/helpers/generalHelpers";
import messages from "~/constants/apiMessageKeys";
import {inputSizes} from "~/constants/configs/defaults";

export default defineComponent({
  name: "ForgotPassword",
  computed: {
    inputSizes() {
      return inputSizes
    },
    readyForSubmitForgotPassword() {
      let ready = false;
      if(this.modelForgotPassword.email) {
        ready = true;
      }
      return ready;
    },
    showEmailInputError(){
      let error = null;
      return error;
    },
    modelForgotPassword() {
      return useAuthStore().modelForgotPassword;
    },
  },
  data: () => {
    return {
      readyForView: false,
      submitIsLoading: false,
      response: {
        success: null,
        message: null
      },
      messages,
    }
  },
  unmounted() {
    this.resetModel();
  },
  methods: {
    backendMessage,
    async submitForgotPassword() {
      this.submitIsLoading = true;
      const { data } = await useAuthStore().submitForgotPassword();
      this.response = data;
      this.resetModel();
      this.submitIsLoading = false;
    },
    resetModel() {
      useAuthStore().resetModelForgotPassword();
    },
    setReadyForView(val) {
      this.readyForView = val;
    }
  },
  watch: {
  }
});
</script>

<template>
    <div id="forgot-password-page" class="flex-column-center">
    <form class="forgot-password-form" @submit.prevent="submitForgotPassword">
      <div class="message-box">
        <message-component
            v-if="response.success === null"
            hide-icon
            type="info"
            :message="$t('get_started.forgot_password.welcome_message')" />
        <message-component
            v-else
            :type="response.success === false ?  'error' : 'success'"
            :message="backendMessage(response.message)" />
      </div>
      <div class="input-group">
        <input-component
            id="email-input"
            type="email"
            name="email"
            placeholder="example@domain.com"
            autocomplete="email"
            icon="alternate_email"
            :label="$t('get_started.forgot_password.email')"
            :show-error="showEmailInputError"
            v-model="modelForgotPassword.email"
            required
            clearable />
      </div>
      <div class="submit-btn">
        <input-component
            id="submit-btn"
            type="submit"
            button-type="main"
            :label="$t('get_started.forgot_password.submit_btn')"
            :is-loading="submitIsLoading"
            :disabled="!readyForSubmitForgotPassword" />
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
@include for-size($tablet-size, 100vw) {
  #forgot-password-page {
    form.forgot-password-form {
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
            font-size: $font-size-normal;
            color: $main_black_color;
          }
        }
      }

      .message-box {
        margin-bottom: 1rem;
      }
    }

    .no-account-yet {
      font-size: $font-size-normal;
      color: $main_black_color;
    }
    .submit-btn {
      width: 100%;
    }
  }
}

@include for-size($small-mobile-size, $tablet-size){
  #forgot-password-page {
    form.forgot-password-form {
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
            font-size: $font-size-normal;
            color: $main_black_color;
          }
        }
      }

      .message-box {
        margin-bottom: 1rem;
      }
    }
    .submit-btn {
      width: 100%;
    }

    .no-account-yet {
      font-size: $font-size-normal;
      color: $main_black_color;
    }
  }
}

</style>