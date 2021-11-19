<template>
  <div @click="goPrev"><slot name="left" /></div>
  <div @click="goNext"><slot name="right" /></div>
</template>
<script>
import { inject } from "vue";
export default {
  name: "CsCarouselArrowNav",
  setup() {
    const { slides } = inject("carouselState");

    return {
      goNext: () => {
        slides.value.push(slides.value.shift());
      },
      goPrev: () => {
        slides.value.unshift(slides.value.pop());
      },
    };
  },
};
</script>
