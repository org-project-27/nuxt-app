<template>
  <div>
    <input type="file" @change="uploadFile" multiple/>
    <div v-if="uploadResult">
      <p>File uploaded successfully:</p>
      <a :href="uploadResult.url" target="_blank">{{ uploadResult.name }}</a>
      <img :src="uploadResult.url" :alt="uploadResult.name" :width="dimensions?.width" :height="dimensions?.height">
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {uploadService} from "~/services/upload";

const uploadResult = ref(null)
const dimensions = ref(null)

const uploadFile = async (event) => {
  try {
    const response = await uploadService(event);
    uploadResult.value = response[0]
    const { width, height } = await getDimensions(response[0].url)
    dimensions.value = { width, height }
  } catch (error) {
    console.error('Error uploading file:', error)
  }
}

const getDimensions = async (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      resolve({ width: img.width, height: img.height })
    }
    img.onerror = () => {
      reject('Error loading image')
    }
    img.src = url
  })
}
</script>
