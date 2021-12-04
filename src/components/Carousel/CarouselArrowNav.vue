<template>
  <div @click="goPrev"><slot name="left" /></div>
  <div @click="goNext"><slot name="right" /></div>
</template>
<script>
import { inject } from "vue";
export default {
  name: "CsCarouselArrowNav",
  setup() {
    const { slides, direction } = inject("carouselState");

    return {
      goNext: () => {
        slides.value.push(slides.value.shift());
        direction.value = 1;
      },
      goPrev: () => {
        slides.value.unshift(slides.value.pop());
        direction.value = -1;
      },
    };
  },
};
</script>
