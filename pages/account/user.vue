<template>
  <div>
    User account
    <br>
    <span v-if="userModel">
      <p v-for="(value, key) in userModel" :key="key">
        <b>{{ key }}</b> - {{ value }}
      </p>
    </span>
    <br>
    <button @click="logOut">Log out</button>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import {useAuthStore} from "~/stores/user/auth";

export default defineComponent({
  name: "user",
  computed: {
    userModel(){
      return useAuthStore().modelAuth;
    }
  },
  methods: {
    logOut(){
      const { logout } = useAuthStore();
      logout();
    }
  }
})
</script>

<style scoped lang="scss">

</style>