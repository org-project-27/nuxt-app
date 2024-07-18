<script lang="ts">
import {defineComponent} from 'vue'
import {evaluatePasswordStrength} from "~/utils/helpers/inputHelpers";

export default defineComponent({
  name: "changeUserPasswordForm",
  computed: {
    isLoading() {
      return useChangeUserPasswordStore().saveProgressIsLoading
    },
    passwordStrength() {
      const {formData} = useChangeUserPasswordStore();
      return this.evaluatePasswordStrength(formData.newPassword);
    },
    readyForSubmit() {
      let ready = false;
      const {formData} = useChangeUserPasswordStore();
      if (formData.newPassword && this.confirmPasswordIsMatch) {
        if (this.passwordStrength > 1) {
          ready = true;
        }
      }
      return ready;
    },
  },
  data() {
    return {
      confirmPasswordIsMatch: true
    }
  },
  methods: {
    evaluatePasswordStrength,
    checkConfirmPassword(){
      const {formData} = useChangeUserPasswordStore();
      this.confirmPasswordIsMatch = formData.newPassword === formData.confirmPassword;
    },
    async submitChangePasswordForm() {
      this.checkConfirmPassword();
      if(this.confirmPasswordIsMatch){
        const {changeUserPassword} = useChangeUserPasswordStore();
        await changeUserPassword();
      }
    }
  },
})
</script>
<script lang="ts" setup>
import {inputSizes} from "~/constants/configs/defaults";
import {useChangeUserPasswordStore} from "~/stores/user/changeUserPasswordStore";

const {formData} = useChangeUserPasswordStore();
</script>

<template>
  <form id="change-user-password-form" @submit.prevent="submitChangePasswordForm">
    <input-component
        id="current-password-input"
        type="password"
        name="current-password"
        autocomplete="current-password"
        required
        :label="$t('user_account.current_password')"
        :input-size="inputSizes.medium"
        v-model="formData.currentPassword"
    />
    <span class="divider"></span>
    <input-component
        id="new-password-input"
        type="password"
        name="new-password"
        autocomplete="new-password"
        required
        :label="$t('user_account.new_password')"
        :input-size="inputSizes.medium"
        v-model="formData.newPassword"
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
    />
    <br>
    <input-component
        id="confirm-password-input"
        type="password"
        name="confirm-password"
        autocomplete="confirm-password"
        required
        @input="confirmPasswordIsMatch = true"
        :label="$t('user_account.confirm_password')"
        :input-size="inputSizes.medium"
        v-model="formData.confirmPassword"
        :show-error="{
              message: !confirmPasswordIsMatch ? $t('reset_password.confirm_password_wrong') : null,
              highlight: !confirmPasswordIsMatch
        }"
    />
    <br>
    <input-component
        id="change-password-btn"
        type="submit"
        :label="$t('buttons.change')"
        button-type="1"
        :input-size="inputSizes.medium"
        :is-loading="isLoading"
        :disabled="!readyForSubmit"
    />
  </form>
</template>

<style scoped lang="scss">

</style>