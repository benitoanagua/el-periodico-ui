<template>
  <div :class="classCarousel">
    <div class="flex flex-col -mt-10">
      <div class="inline-flex m-2">
        <slot name="arrownav" />
      </div>
      <div class="grid grid-cols-2 m-2">
        <slot name="dotnav" />
      </div>
    </div>
    <div class="w-full -mt-10 pb-4">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
import { reactive, ref, computed, provide } from "vue";

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

    const slides = ref([]);
    provide("carouselState", {
      slides,
    });

    return {
      classCarousel: computed(() => ({
        "flex mt-10": true,
        "bg-primary-200": true,
      })),
    };
  },
};
</script>
