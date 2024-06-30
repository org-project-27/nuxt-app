  <template>
    <div>
      User account
      <br>
      <br>
      <div v-if="userModel">
        <ul v-for="(value, key) in userModel" :key="key">
          <li v-if="key !== 'details'">
            &nbsp; &nbsp;<b>{{ key }}</b>: {{ value }};
          </li>
          <li v-else>
            <div v-for="(value2, key2) in value" :key="key">
              &nbsp; &nbsp;<b>{{ key2 }}</b>: {{ value2 || 'null' }};
            </div>
          </li>
        </ul>
      </div>
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