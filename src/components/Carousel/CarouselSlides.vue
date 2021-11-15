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
    visibleItems: {
      type: Number,
      default: 1,
    },
  },
  setup(props) {
    props = reactive(props);
    const display = ref(props.visibleItems);

    provide("slidesState", {
      display,
    });

    return {
      classCarouselSlides: computed(() => ({
        [`grid grid-cols-${props.visibleItems} gap-6`]: true,
      })),
    };
  },
};
</script>
