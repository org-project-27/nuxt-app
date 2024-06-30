<template>
  <section>
    <div class="uploader-part">
    <label for="upload" class="btn">Upload File </label>
    <input id="upload" type="file" @change="uploadFile" multiple />
    <div v-if="uploadResult">
      <p>File uploaded successfully {{ uploadResult.object_id }}:</p>
      <a :href="origin + '/cdn/'+ uploadResult.object_id" target="_blank">{{ uploadResult.name }}</a>
      <img :src="origin + '/cdn/'+ uploadResult.object_id" :alt="uploadResult.name" :width="dimensions?.width" :height="dimensions?.height">
    </div>
  </div>
  <div class="uploader-part">
    <label for="update" class="btn">Update File </label>
    <input id="update" type="file" @change="updateFile" multiple />
    <input type="text" placeholder="File id" name="id" id="updateFileId">
    <div v-if="updateResult">
      <p>File updateed successfully:</p>
      <a :href="origin + '/cdn/'+ updateResult.object_id" target="_blank">{{ updateResult.name }}</a>
      <img :src="origin + '/cdn/'+ updateResult.object_id" :alt="updateResult.name" :width="dimensions?.width" :height="dimensions?.height">
    </div>
  </div>
  <div class="uploader-part">

    <input type="text" placeholder="File id" name="id" id="deleteFileId">
    <input id="delete" type="button" @click="deleteFile" value="Delete">
    <div v-if="deleteResult">
      <p>File deleted successfully:</p>
    </div>
  </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import {uploadService, updateService, deleteService} from "~/services/upload";
const origin = window.location.origin;
const uploadResult = ref(null)
const updateResult = ref(null)
const deleteResult = ref(null)
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

const updateFile = async (event) => {
  try {
    const fileId = document.getElementById('updateFileId').value
    const response = await updateService(event, fileId);
    updateResult.value = response[0]
    const { width, height } = await getDimensions(response[0].url)
    dimensions.value = { width, height }
  } catch (error) {
    console.error('Error updating file:', error)
  }
}

const deleteFile = async () => {
  try {
    const fileId = document.getElementById('deleteFileId').value
    const response = await deleteService(fileId);
    deleteResult.value = response
  } catch (error) {
    console.error('Error deleting file:', error)
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
<style>
  .uploader-part {
    margin: 20px;
  }
</style>
