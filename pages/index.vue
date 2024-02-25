<template>
    <div class="parent flex-row-center">
        <NuxtLink
            v-for="post in posts"
            :id="'post-'+post.id"
            :key="post.id"
            :to="'/posts/'+post.id"
            class="child cannot-select flex-column-center default-container">
          <img :src="post.thumbnailUrl" :alt="post.title">
        </NuxtLink>
    </div>
</template>

<style lang="scss" scoped>
.parent{
  display: flex;
  flex-wrap: wrap;
  gap: calc($default-layout-section-gap / 3);
  .child{
    box-shadow: $box_shadow_1;
    border-radius: 10px;
    width: 235px ;
    height: 235px;
    transition-duration: $default-transition-duration;
    white-space: normal;
    text-align: center;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
      opacity: .75;
      &:hover{
        cursor: pointer;
        box-shadow: $box_shadow_0;
        opacity: 1;
      }
    }
    &:hover{
      box-shadow: $box_shadow_0;
    }
  }
}
</style>
<script setup lang="ts">
let {getPosts} = usePostsStore();
let posts = getPosts(200);
</script>