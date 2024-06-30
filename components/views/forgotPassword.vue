<template>
    <div id="forgot-password-page" class="flex-column-center" v-show="readyForView">
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
            v-model="modelForgotPassword.email"
            autocomplete="email"
            :label="$t('get_started.forgot_password.email')"
            :left-icon="{ icon: 'alternate_email', size: inputSizes.medium.iconSize }"
            :input-size="inputSizes.medium"
            :show-error="{
              message: showEmailInputError,
              highlight: !!showEmailInputError
            }"
            required
            clearable />
      </div>
      <input-component
          id="submit-btn"
          type="submit"
          button-type="1"
          :label="$t('get_started.forgot_password.submit_btn')"
          @ready-for-view="setReadyForView"
          :left-icon="{ icon: 'lock' }"
          :input-size="{
            width: '100%',
            height: '3.5rem'
          }"
          :is-loading="submitIsLoading"
          :disabled="!readyForSubmitForgotPassword" />
    </form>
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import { useAuthStore } from "~/stores/user/auth";
import { backendMessage } from "~/assets/scripts/helpers/generalHelpers";
import messages from "~/assets/scripts/constants/apiMessageKeys";
import {inputSizes} from "~/assets/scripts/configs/defaults";

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
            font-size: 1rem;
            color: $main_black_color;
          }
        }
      }

      .message-box {
        margin-bottom: 1rem;
      }
    }

    .no-account-yet {
      font-size: 1.1rem;
      color: $main_black_color;
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
            font-size: 1rem;
            color: $main_black_color;
          }
        }
      }

      .message-box {
        margin-bottom: 1rem;
      }
    }

    .no-account-yet {
      font-size: 1.1rem;
      color: $main_black_color;
    }
  }
}

</style>