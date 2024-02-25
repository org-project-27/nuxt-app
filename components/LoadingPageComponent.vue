<template>
  <div id="loading-page-container">
    <div>
      <img
        width="50px"
        :src="loadingGIF" 
        :alt="'Please wait...'"/>
    </div>
  </div>
</template>

<script>
import loadingGIF from "~/assets/images/gifs/loading2.gif";
export default defineComponent({
  name: "LoadingPage",
  data(){
    return {
      loadingGIF
    }
  },
  mounted(){
      //#TODO: Set title "Loading"
  }
})
</script>

<style scoped lang="scss">
#loading-page-container{
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: progress;
  user-select: none;

}
</style>