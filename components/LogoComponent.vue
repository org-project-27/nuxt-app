<template>
  <NuxtLink to="/" class="logo-component">
    <svg viewBox="0 0 8228 8126" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_231_49)" filter="url(#filter0_d_231_49)">
        <path class="logo-background" d="M8203 4121.5C8203 6319.32 6421.32 8101 4223.5 8101C2025.68 8101 244 6319.32 244 4121.5C244 1923.68 2025.68 142 4223.5 142C6421.32 142 8203 1923.68 8203 4121.5Z" fill="#fff"/>
        <path class="logo-path" d="M7684.53 120.202C7688.03 116.946 7693.26 121.45 7690.56 125.39L3716.27 5925.44C3464.79 6292.45 2917.7 6275.47 2689.46 5893.58L692.597 2552.44C690.373 2548.72 694.829 2544.62 698.356 2547.14L2924.61 4137.94C3072.04 4243.29 3273.27 4230.23 3405.84 4106.71L7684.53 120.202Z"/>
      </g>
      <defs>
        <filter id="filter0_d_231_49" x="-4" y="0" width="8236" height="8134" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_231_49"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_231_49" result="shape"/>
        </filter>
        <clipPath id="clip0_231_49">
          <rect width="8228" height="8126" fill="white"/>
        </clipPath>
      </defs>
    </svg>
    <span>&nbsp;{{ brandName }}</span>
  </NuxtLink>
</template>

<script lang="ts" setup>
let {brandName} = useAppConfig();
brandName = brandName.toUpperCase();
</script>

<style scoped lang="scss">
$animation-duration: .5s;
$logo-color-deactive: $main_color;
$logo-color-active: lighten($logo-color-deactive, 1%);
.logo-component{
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: .3rem;
  svg {
    width: 3rem;
    height: 3rem;
    transition-duration: $animation-duration;
    path.logo-path{
      fill: $logo-color-deactive;
      transition-duration: $animation-duration;
    }
    path.logo-background{
      fill: $third_background_color;
    }
  }
  span {
    transition-duration: $animation-duration;
    font-size: 1.7rem;
    color: $logo-color-deactive;
    font-family: $font-family-ExtraBold;
  }
  &.active,
  &:hover{
      svg {
        path.logo-path{
          fill: $logo-color-active !important;
        }
      }
      span {
        color: $logo-color-active;
        font-family: $font-family-ExtraBold;
    }
  }
}
</style>