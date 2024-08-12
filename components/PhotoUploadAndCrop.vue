<template>
  <div id="photo-upload-and-crop">
    <div class="photo-cropper-area bordered" v-if="imageSrc">
      <img ref="imageElement" :src="imageSrc" alt="Source Image">
    </div>
    <div
      v-else
      class="drop-area bordered"
      @dragover.prevent="dragOverHandler"
      @dragleave.prevent="dragLeaveHandler"
      @drop.prevent="onFileDrop"
      :class="{ 'drag-over': isDragOver }"
  >
      <div class="icon-area">
        <icon-component icon-name="backup" icon-size="5rem" :color="colorUtilities.$main_color" :fill="isDragOver"/>
      </div>
      <div class="desc-area">
        {{ $t('components.photo_uploader.desc') }}
      </div>
      <div class="file-input-container">
        <input class="file-input" type="file" @change="onFileChange" accept="image/*"/>
      </div>
  </div>
    <div class="submit-btns" v-if="cropperReady">
      <input-component
          id="photo-upload-and-crop-button"
          @click="cropAndUpload"
          :disabled="!cropperReady"
          type="button"
          button-type="main"
          icon="save"
          :input-size="inputSizes.medium"
          :is-loading="isLoading"
          :label="$t('components.photo_uploader.submit')"/>
      <input-component
          id="photo-upload-and-crop-button"
          @click="reset"
          :disabled="!cropperReady"
          button-type="danger"
          type="reset"
          icon="delete"
          :input-size="inputSizes.medium"
          :label="$t('components.photo_uploader.reset')"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits, onUnmounted, watch, nextTick } from 'vue';
import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';
import colorUtilities from "~/constants/colorUtilities";
import {inputSizes} from "~/constants/configs/defaults";
const emit = defineEmits(['file', 'dragChange'])

let cropper: Cropper | null = null;
const imageSrc = ref('');
const imageElement = ref<HTMLImageElement | null>(null);
const cropperReady = ref(false);
const isLoading = ref(false);
const isDragOver = ref(false);

const onFileChange = (event: Event) => {
  const files = (event.target as HTMLInputElement).files;

  if (files && files.length > 0) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      imageSrc.value = e.target.result as string;
    };
    reader.readAsDataURL(files[0]);
  }
};

watch(imageSrc, (newValue) => {
  if (newValue) {
    nextTick(() => {
      initiateCropper();
    });
  }
});

const initiateCropper = () => {
  if (imageElement.value) {
    cropper?.destroy();
    cropper = new Cropper(imageElement.value, {
      aspectRatio: 1,
      viewMode: 1,
      ready: () => {
        cropperReady.value = true;
      }
    });
  }
};

const cropAndUpload = async () => {
  isLoading.value = true;
  if (cropper && cropperReady.value) {
    const croppedCanvas = cropper.getCroppedCanvas();
    if (croppedCanvas) {
      croppedCanvas.toBlob(async (blob: any) => {
        const formData = new FormData();
        formData.append('file', blob, 'profile.jpg');
        await emit('file', formData);
        isLoading.value = false;
      });
    } else {
      console.error('Cropping resulted in null, possibly no area selected.');
    }
  } else {
    console.error("Cropper is not ready or not initialized.");
  }
};
const dragOverHandler = () => {
  isDragOver.value = true;
};

const dragLeaveHandler = () => {
  isDragOver.value = false;
};

const onFileDrop = (event: any) => {
  const files = event.dataTransfer.files;

  if (files && files.length > 0) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      imageSrc.value = e.target.result as string;
    };
    reader.readAsDataURL(files[0]);
  }

  isDragOver.value = false;
};


const reset = () => {
  cropper = null;
  imageSrc.value = '';
  imageElement.value = null;
  cropperReady.value = false;
  isLoading.value = false;
  isDragOver.value = false;
}

onUnmounted(() => {
  cropper?.destroy();
});
watch(cropperReady, (newValue) => {
  emit('dragChange', newValue);
})
</script>

<style lang="scss" scoped>
$photo-uploader-width: 100%;
$photo-uploader-height: 350px;
#photo-upload-and-crop {
  width: 100%;
  min-height: $photo-uploader-height;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  .photo-cropper-area {
    max-width: $photo-uploader-width;
    min-height: $photo-uploader-height;
    img {
      width: calc($photo-uploader-width - 100px);
    }
  }
  .drop-area {
    width: $photo-uploader-width;
    height: $photo-uploader-height;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: $second_gray_color;
    font-weight: bold;
    .icon-area, .desc-area {
      position: absolute;
    }
    .icon-area {
      margin-top: -50px
    }
    .desc-area {
      text-align: center;
      width: 300px;
      margin-bottom: -70px;
    }
  }

  .drag-over {
    border-color: $main_black_color;
    background-color: $third_white_color;
  }

  .file-input-container {
    cursor: pointer;
    opacity: 0;
    height: 100%;
    width: 100%;
    .file-input {
      cursor: pointer;
      height: 100%;
      width: 100%;
    }
  }

  .bordered {
    border: 3px dashed $default_border_color;
    background-color: $main_white_color;
    border-radius: 10px;
  }
  .submit-btns {
    display: flex;
    flex-direction: row-reverse;
    gap: 1rem;
    width: 100%;
    & > div {
      width: 50%;
    }
  }
}
</style>