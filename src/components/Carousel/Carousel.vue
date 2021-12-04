<template>
  <div :class="classCarousel">
    <div :class="classCarouselNav">
      <div :class="classCarouselArrowNav">
        <slot name="arrownav" />
      </div>
      <div :class="classCarouselDotNav">
        <slot name="dotnav" />
      </div>
    </div>
    <div :class="classCarouselContent">
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
    const items = ref([]);
    const direction = ref(1);
    provide("carouselState", {
      slides,
      items,
      direction,
    });

    return {
      classCarousel: computed(() => ({
        "flex flex-col mt-10": true,
        [`${props.breakpoint}:flex-row`]: true,
        "bg-primary-200": true,
      })),
      classCarouselNav: computed(() => ({
        "flex flex-row justify-between -mt-10": true,
        [`${props.breakpoint}:flex-col`]: true,
        [`${props.breakpoint}:justify-start`]: true,
      })),
      classCarouselArrowNav: computed(() => ({
        "inline-flex my-2 cursor-pointer": true,
        [`${props.breakpoint}:m-2`]: true,
      })),
      classCarouselDotNav: computed(() => ({
        "grid my-2 cursor-pointer": true,
        [`grid-cols-${slides.value.length}`]: true,
        [`${props.breakpoint}:grid-cols-2`]: true,
        [`${props.breakpoint}:m-2`]: true,
      })),
      classCarouselContent: computed(() => ({
        "w-full mt-0 pb-4 pr-0": true,
        [`${props.breakpoint}:-mt-10`]: true,
        [`${props.breakpoint}:pr-4`]: true,
      })),
    };
  },
};
</script>
