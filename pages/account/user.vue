<template>
  <div id="account-page">
    <section class="background-photo-area">
    </section>
    <section class="account-profile-area">
      <section class="account-profile-header flex-row-between-center">
        <div class="left-side">
          <div class="profile-photo flex-column-center">
            <img v-if="profileSrc" :src="profileSrc" alt="profile_photo">
            <div v-else class="no-photo">
              <icon-component icon-name="person" icon-size="190" fill :color="colorUtilities.$main_gray_color"/>
            </div>
          </div>
          <div class="profile-info">
            <div class="user-status flex-row-center">
              <div class="status-icon-area">
                <icon-component
                    fill
                    icon-name="star"
                    icon-size="1.7rem"
                    color="gold"/>
              </div>
              <span>{{$t('user_account.brand_owner')}}</span>
            </div>
            <span class="user-name">{{ userModel.details.fullname }}</span>
            <span class="user-bio">
              <span v-html="userModel.details.bio"></span>
            </span>
          </div>
        </div>
        <div class="right-side">
          <div class="right-side-container">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque consectetur doloribus earum eius
            facilis illum inventore libero magni maxime, minima provident quae quasi quia quibusdam quisquam temporibus
            vel voluptatibus? <button @click.prevent="logOut">Logout</button>
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
            :label="$t('user_account.change_profile_photo')"
            icon="add_a_photo">
          <photo-upload-and-crop @file="uploadProfilePhoto"/>
        </card-component>
        <card-component
            :label="$t('user_account.change_password')"
            icon="encrypted">
          <change-user-password-form/>
        </card-component>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useAuthStore} from "~/stores/user/auth";
import {getCDN} from "~/utils/helpers/generalHelpers";


export default defineComponent({
  name: "user",
  computed: {
    userModel() {
      return useAuthStore().modelAuth;
    },
    profileSrc() {
      return this.getCDN(this.userModel.details.profile_photo_id)
    },
  },
  data() {
    return {}
  },
  methods: {
    getCDN,
    async logOut() {
      const {logout} = useAuthStore();
      await logout();
    },
  },
  mounted() {
  },
})
</script>
<script setup lang="ts">
import colorUtilities from "~/constants/colorUtilities";
import EditUserAccountForm from "~/components/forms/editUserAccountForm.vue";
import ChangeUserPasswordForm from "~/components/forms/changeUserPasswordForm.vue";
import PhotoUploadAndCrop from "~/components/PhotoUploadAndCrop.vue";
import {uploadProfilePhoto} from "~/services/user";

definePageMeta({
  layout: 'account'
})
</script>

<style scoped lang="scss">
#account-page {
  background-color: $main_white_color;
  section.background-photo-area {
    width: 100%;
    height: 15rem;
    background: $main_color;
    background: linear-gradient(180deg,
        $main_color 5%,
        $main_white_color 85%);
  }

  section.account-profile-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    position: relative;
    top: -8rem;

    section {
      border-radius: $default_border_radius;
      width: 95%;
    }

    section.account-profile-header {
      $pp_width: 15rem;
      $right-side-width: 45%;
      $left-side-width: 50%;
      gap: .5rem;
      box-shadow: $box_shadow_1;
      background-color: $main_background_color;

      .left-side {
        width: $left-side-width;
        display: flex;
        align-items: center;
        gap: 2.5rem;
        padding: 0 4rem;
        height: 14rem;

        .profile-photo {
          height: 100%;

          .no-photo,
          img {
            width: $pp_width;
            height: calc($pp_width + 20px);
            border-radius: $default_border_radius;
            position: relative;
            top: -25%;
          }
          .no-photo {
            background-color: $third_white_color;
            box-shadow: $box_shadow_2;
            transition-duration: $default-transition-duration;
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
            background-color: $second_color_transparent;
            padding: .5rem;
            color: $main_color;
            border-radius: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .2rem;
            box-shadow: $box_shadow_1;
          }

          span.user-name {
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