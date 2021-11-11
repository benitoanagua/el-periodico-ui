<template>
  <div :class="classCarouselItem">
    <slot />
  </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "CsCarouselItem",
  props: {
    breakpoint: {
      type: String,
      default: "md",
    },
  },
  setup(props) {
    props = reactive(props);

    return {
      classCarouselItem: computed(() => ({
        myclass: true,
      })),
    };
  },
};
</script>
