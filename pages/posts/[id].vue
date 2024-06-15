<template>
  <div>
    <input type="file" accept="audio/*" @change="uploadFile" multiple/>
    <div v-if="uploadResult">
      <p>File uploaded successfully:</p>
      <a :href="uploadResult.path" target="_blank">{{ uploadResult.filename }}</a>
      <audio controls>
        <source :src="uploadResult.path" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import {uploadService} from "~/services/upload";

const uploadResult = ref(null)

const uploadFile = async (event) => {
  try {
    const response = await uploadService(event);
    uploadResult.value = response[0].data.data
  } catch (error) {
    console.error('Error uploading file:', error)
  }
}
</script>
