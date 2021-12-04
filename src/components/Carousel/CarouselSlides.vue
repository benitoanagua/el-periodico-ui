<template>
  <div :class="classCarouselSlides">
    <slot />
  </div>
</template>

<script>
import { ref, reactive, computed, provide } from "vue";

export default {
  name: "CsCarouselSlides",
  props: {
    breakpoint: {
      type: String,
      default: "md",
    },
    showDesktop: {
      type: Number,
      default: 1,
    },
    showMobile: {
      type: Number,
      default: 1,
    },
  },
  setup(props) {
    props = reactive(props);
    const desktopDisplay = ref(props.showDesktop);
    const mobileDisplay = ref(props.showMobile);
    const slideWidth = ref(0);

    provide("slidesState", {
      desktopDisplay,
      mobileDisplay,
      slideWidth,
    });

    return {
      classCarouselSlides: computed(() => ({
        "overflow-hidden": true,
        [`grid grid-cols-${props.showMobile} gap-6`]: true,
        [`${props.breakpoint}:grid-cols-${props.showDesktop}`]: true,
      })),
    };
  },
};
</script>
