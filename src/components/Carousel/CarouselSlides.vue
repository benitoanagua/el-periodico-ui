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
    const displayDesktop = ref(props.showDesktop);
    const displayMobile = ref(props.showMobile);

    provide("slidesState", {
      displayDesktop,
      displayMobile,
    });

    return {
      classCarouselSlides: computed(() => ({
        [`grid grid-cols-${props.showMobile} gap-6`]: true,
        [`${props.breakpoint}:grid-cols-${props.showDesktop}`]: true,
      })),
    };
  },
};
</script>
