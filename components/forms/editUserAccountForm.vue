<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name: "editUserAccountForm",
  computed: {
    isLoading(){
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
        name="fullname"
        autocomplete="name"
        required
        clearable
        minLength="3"
        maxlength="255"
        :placeholder="$t('user_account.edit_fullname')"
        :label="$t('user_account.fullname')"
        :input-size="inputSizes.medium"
        v-model="formData.fullname"
    />
    <br>
    <input-component
        id="email-input"
        type="text"
        name="email"
        autocomplete="email"
        :disabled="disableEmailInput"
        clearable
        minLength="3"
        maxlength="255"
        :placeholder="$t('user_account.edit_email')"
        :label="$t('user_account.email')"
        :input-size="inputSizes.medium"
        v-model="formData.email"
    />
    <br>
    <input-component
        id="phone-input"
        type="text"
        name="phone"
        autocomplete="phone"
        required
        clearable
        minLength="3"
        maxlength="255"
        :placeholder="$t('user_account.edit_phone')"
        :label="$t('user_account.phone')"
        :input-size="inputSizes.medium"
        v-model="formData.phone"
    />
    <input-component type="date"
       :label="$t('user_account.birthdate')"
       name="birthdate"
       autocomplete="bday"
       v-model="formData.birthday"/>
    <textarea-component
        name="bio"
        autocomplete="bio"
        :label="$t('user_account.bio')"
        v-model="formData.bio"
        :maxlength="200"
        :placeholder="$t('user_account.bio_desc')"
    />
    <br>
    <input-component
        id="save-edits-btn"
        type="submit"
        :label="$t('buttons.save')"
        button-type="1"
        :input-size="inputSizes.medium"
        :is-loading="isLoading"
    />
  </form>
</template>

<style scoped lang="scss">

</style>