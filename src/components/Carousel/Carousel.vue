<template>
  <div :class="classCarousel">
    <slot name="navigation" />
    <slot name="pagination" />
    <slot name="slides" />
  </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "CsCarousel",
  props: {
    breakpoint: {
      type: String,
      default: "md",
    },
  },
  setup(props) {
    props = reactive(props);

    return {
      classCarousel: computed(() => ({
        myclass: true,
      })),
    };
  },
};
</script>
