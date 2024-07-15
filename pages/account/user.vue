<template>
  <div id="account-page">
    <section class="background-photo-area">
    </section>
    <section class="account-profile-area">
      <section class="account-profile-header flex-row-between-center">
        <div class="left-side">
          <div class="profile-photo flex-column-center">
            <img src="https://media.licdn.com/dms/image/D4D03AQF9YHiCypPq3w/profile-displayphoto-shrink_400_400/0/1706166153864?e=1726099200&v=beta&t=sO4mZ6yVcHu_N_PVzBfkt9fBu5_FEVJCsW0ML6EEcT0" alt="">
          </div>
          <div class="profile-info">
            <div class="user-status flex-row-center">
              <div class="status-icon-area">
                <icon-component
                    fill
                    icon-name="check_circle"
                    icon-size="1.5rem"
                    :color="colorUtilities.$success_color"/>
              </div>
              <span>Brand owner</span>
            </div>
            <span class="user-name">{{userModel.details.fullname}}</span>
            <span class="user-bio">
              <span v-html="userModel.details.bio"></span>
            </span>
          </div>
        </div>
        <div class="right-side">
          <div class="right-side-container">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque consectetur doloribus earum eius facilis illum inventore libero magni maxime, minima provident quae quasi quia quibusdam quisquam temporibus vel voluptatibus?
          </div>
        </div>
      </section>
      <section class="account-profile-body">

        <card-component
            :label="$t('user_account.account_settings')"
            icon="manufacturing">
          <edit-user-account-form/>
        </card-component>
        <card-component
            :label="$t('user_account.change_password')"
            icon="encrypted">
          <change-user-password-form/>
        </card-component>
        <card-component :label="$t('user_account.change_password')">
          <button @click="logOut">
            Logout
          </button>
        </card-component>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useAuthStore} from "~/stores/user/auth";


export default defineComponent({
  name: "user",
  computed: {
    userModel() {
      return useAuthStore().modelAuth;
    },
  },
  data(){
    return {
    }
  },
  methods: {
    logOut() {
      const {logout} = useAuthStore();
      logout();
    },
  },
  mounted(){
  },
})
</script>
<script setup lang="ts">
import colorUtilities from "~/constants/colorUtilities";
import EditUserAccountForm from "~/components/forms/editUserAccountForm.vue";
import ChangeUserPasswordForm from "~/components/forms/changeUserPasswordForm.vue";

definePageMeta({
  layout: 'account'
})
</script>

<style scoped lang="scss">
#account-page {
  section.background-photo-area {
    width: 100%;
    height: 15rem;
    background-color: darken($main_color, 35%);
  }
  section.account-profile-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    position: relative;
    top: -5rem;
    section {
      background-color: $main_background_color;
      border-radius: $default_border_radius;
      width: 95%;
    }
    section.account-profile-header {
      $pp_width: 15rem;
      $right-side-width: 45%;
      $left-side-width: 50%;
      gap: .5rem;
      box-shadow: $box_shadow_1;
      .left-side {
        width: $left-side-width;
        display: flex;
        align-items: center;
        gap: 2.5rem;
        padding: 0 4rem;
        height: 14rem;
        .profile-photo {
          height: 100%;
           img {
             width: $pp_width;
             border-radius: $default_border_radius;
             position: relative;
             top: -25%;
             box-shadow: $box_shadow_4;
           }
        }
        .profile-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
          .user-status {
            max-width: 10rem;
            font-size: $font_size-small;
            font-weight: bold;
            background-color: $main_color_transparent;
            padding: .5rem;
            text-align: center;
            color: $main_color;
            border-radius: 3rem;
            gap: .5rem;
          }
          span.user-name{
            font-size: $font_size-extra-big;
            font-weight: bold;
          }
          span.user-bio {
            color: $text_color;
          }
        }
      }
      .right-side {
        width: $right-side-width;
        .right-side-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 8rem;
          padding: 0 5rem;
          border-left: 2px solid $default_border_color;
        }
      }
    }
    section.account-profile-body {
      min-height: 400px;
      display: flex;
      gap: 2rem;
    }
  }
}
</style>