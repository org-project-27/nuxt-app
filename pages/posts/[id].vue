<template>
  <div class="box default-container">
    <NuxtLink to="/">
      Back
    </NuxtLink>
    <br>
    <br>
    <form
        class="flex-column-no-wrap"
        @submit.prevent="example"
        style="gap: 20px">
      <input-component
          id="fullname"
          label="Fullname"
          type="text"
          name="fullname"
          v-model="registerFormStore['fullname']"
          maxlength="25"
          clearable
          required
          :left-icon="{icon: 'person'}"
          :show-error="{
            message: registerFormStore['fullname'],
            highlight: registerFormStore['fullname'],
            icon: 'warning'
          }"
          placeholder="Full name"
      />
      <input-component
          id="lastname"
          label="Last name"
          type="text"
          name="lastname"
          v-model="registerFormStore['lastname']"
          maxlength="25"
          clearable
          :left-icon="{icon: 'favorite'}"
          :show-warning="{
            message: registerFormStore['lastname'],
            highlight: registerFormStore['lastname'],
          }"
          placeholder="Last name"
      />
      <input-component
          id="email"
          label="Email"
          type="email"
          name="email"
          v-model="registerFormStore['email']"
          maxlength="25"
          :left-icon="{icon: 'alternate_email'}"
          required
          :show-info="{
            message: 'This field is important for register!',
            icon: 'person'
          }"
          placeholder="Email"
      />
      <input-component
          id="password"
          label="Password"
          type="password"
          name="password"
          v-model="registerFormStore['password']"
          maxlength="25"
          :left-icon="{icon: 'lock'}"
          required
          :show-success="{
            message: 'Strong password',
            highlight: true,
          }"
      />
      <input-component
          id="phone"
          label="Phone"
          type="number"
          name="phone"
          v-model="registerFormStore['phone']"
          maxlength="25"
          :left-icon="{ icon: 'call' }"
          :disabled="!!registerFormStore['email']"
      />
      <input-component
        id="submit1"
        mid-size
        label="Submit"
        type="button"
        button-type="success"
        @click="isLoading = 1"
        :is-loading="isLoading === 1"
      />
      <input-component
          id="submit2"
          label="Submit"
          type="submit"
          button-type="danger"
          :disabled="isLoading === 1"
          @click="isLoading = 2"
          :is-loading="isLoading === 2"
      />
      <input-component
          id="submit3"
          label="Reset"
          type="submit"
          button-type="1"
          @click="isLoading = 3"
          :is-loading="isLoading === 3"
      />
      <input-component
          id="submit4"
          mid-size
          label="Submit"
          type="submit"
          button-type="2"
          :disabled="isLoading === 1"
          @click="isLoading = 4"
          :is-loading="isLoading === 4"
      />
      <input-component
          id="submit5"
          mid-size
          label="Submit"
          type="submit"
          button-type="3"
          :disabled="isLoading === 1"
          @click="isLoading = 5"
      />
      <loading-component
          id="example"
          type="2"
          size="100"
          speed=".6"
          :color="colorUtilities.$black_color_2"
      />

      <message-component
          type="success"
          :message="$t('pages.getstarted')"/>
      <message-component
          type="warn"
          :message="$t('pages.getstarted')"/>
      <message-component
          type="error"
          :message="$t('pages.getstarted')"/>
      <message-component
          type="info"
          :message="$t('pages.getstarted')"/>

    </form>
    {{ $t('buttons.search') }}

    <div class="responsive-test flex-row-center">
      <div class="show-for-large">
        show-for-large
      </div>
      <div class="show-for-desktop">
        show-for-desktop
      </div>
      <div class="show-for-tablet">
        show-for-tablet
      </div>
      <div class="show-for-mobile">
        show-for-mobile
      </div>
      <div class="show-for-extrasmall">
        show-for-extrasmall
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: "PostsPage",
  data() {
    return {
      model: {},
      isLoading: true,
      registerFormStore: {}
    }
  },
  mounted(){
  },
  methods: {
    incrementButton(){
        console.log(this.model);
    },
    example(){
      console.log('hello', this.registerFormStore)
    }
  }
})
</script>

<script setup>
import colorUtilities from "assets/scripts/constants/colorUtilities.js";
</script>

<style scoped lang="scss">
div.color-pallets{
  display: flex;
  gap: 5px;
  overflow: scroll;
  div{
    width: 50px;
    height: 50px;
  }
  & > div:nth-child(1){
    background-color: $black_color;
  }
  & > div:nth-child(2){
    background-color: $black_color_1;
  }
  & > div:nth-child(3){
    background-color: $black_color_2;
  }
  & > div:nth-child(4){
    background-color: $black_color_3;
  }
  & > div:nth-child(5){
    background-color: $black_color_4;
  }
  & > div:nth-child(6){
    background-color: $black_color_5;
  }
  & > div:nth-child(7){
    background-color: $black_color_6;
  }
  & > div:nth-child(8){
    background-color: $black_color_7;
  }
  & > div:nth-child(9){
    background-color: $black_color_8;
  }
  & > div:nth-child(10){
    background-color: $black_color_9;
  }
}
.box {
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.responsive-test {
  & > div {
    font-size: 1rem;
    width: 10rem;
    height: 10rem;
    color: $white_color_1;
    background-color: $main_color_2;
  }
}
.button-type-1{
   button{
     display: none;
   }
}
</style>