<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "editUserAccountForm",
  computed: {
    isLoading() {
      return useEditUserAccountStore().saveProgressIsLoading;
    },
  }
})
</script>
<script lang="ts" setup>
import {useEditUserAccountStore} from "~/stores/user/editUserAccountStore";
import {inputSizes} from "~/constants/configs/defaults";

const {
  formData,
  getUserAccountData,
  saveEditUserAccount,
} = useEditUserAccountStore();

const disableEmailInput = ref(false);
onMounted(() => {
  getUserAccountData();
  nextTick(() => {
    disableEmailInput.value = true
  });
});
</script>

<template>
  <form id="edit-user-account-form" @submit.prevent="saveEditUserAccount">
    <input-component
        id="fullname-input"
        type="text"
        name="firstname"
        autocomplete="name"
        required
        clearable
        minlength="3"
        maxlength="255"
        :placeholder="$t('user_account.edit_fullname')"
        :label="$t('user_account.fullname')"
        :input-size="inputSizes.medium"
        icon="person"
        v-model="formData.fullname"
    />
    <br>
    <input-component
        id="email-input"
        type="email"
        name="email"
        autocomplete="email"
        :disabled="disableEmailInput"
        clearable
        minlength="3"
        maxlength="255"
        :placeholder="$t('user_account.edit_email')"
        :label="$t('user_account.email')"
        :input-size="inputSizes.medium"
        icon="alternate_email"
        show-info="You cannot edit your email address!"
        v-model="formData.email"
    />
    <br>
    <input-component
        id="phone-input"
        type="tel"
        name="phone"
        autocomplete="tel"
        clearable
        minlength="3"
        maxlength="255"
        :placeholder="$t('user_account.edit_phone')"
        :label="$t('user_account.phone')"
        :input-size="inputSizes.medium"
        icon="call"
        v-model="formData.phone"
    />
    <br>
    <input-component
        type="date"
        icon="celebration"
        :label="$t('user_account.birthdate')"
        name="birthdate"
        autocomplete="bday"
        v-model="formData.birthday"/>
    <br>
    <textarea-component
        name="bio"
        autocomplete="bio"
        :label="$t('user_account.bio')"
        v-model="formData.bio"
        :maxlength="200"
        :placeholder="$t('user_account.bio_desc')"
    />
    <br>
    <div class="submit-buttons">
      <input-component
          id="save-edits-btn"
          type="submit"
          button-type="main"
          icon="save"
          :label="$t('buttons.save')"
          :input-size="inputSizes.medium"
          :is-loading="isLoading"
      />
    </div>
  </form>
</template>

<style scoped lang="scss">
#edit-user-account-form {
  .submit-buttons {
    float: right;
    width: 50%;
  }
}
</style>