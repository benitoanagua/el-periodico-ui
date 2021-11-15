<template>
  <div :class="classCarouselItem">
    <slot />
  </div>
</template>

<script>
import {
  reactive,
  computed,
  inject,
  watchEffect,
  getCurrentInstance,
} from "vue";

export default {
  name: "CsCarouselSlideItem",
  props: {
    breakpoint: {
      type: String,
      default: "md",
    },
  },
  setup(props) {
    props = reactive(props);

    const instance = getCurrentInstance();
    const { slides } = inject("carouselState", { slides: [] });
    const { display } = inject("slidesState");
    const index = computed(() =>
      slides.value.findIndex((target) => target.uid === instance.uid)
    );

    // console.log(display.value);

    watchEffect(() => {
      if (index.value === -1) {
        slides.value.push(instance);
      }
      console.log("index", index.value);
      // console.log(slides.value);
    });

    return {
      classCarouselItem: computed(() => ({
        [`order-${index.value + 1} ${
          index.value + 1 > display.value ? " hidden" : " "
        }`]: true,
      })),
    };
  },
};
</script>
