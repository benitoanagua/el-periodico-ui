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
    const { slides, items } = inject("carouselState", {
      slides: [],
      items: [],
    });
    const { display } = inject("slidesState");

    const index = computed(() =>
      slides.value.findIndex((target) => target.uid === instance.uid)
    );

    watchEffect(() => {
      if (index.value === -1) {
        slides.value.push(instance);
      }
      if (slides.value.length > items.value.length) {
        items.value.push(instance);
      }
    });

    return {
      classCarouselItem: computed(() => ({
        hidden: index.value + 1 > display.value,
        [`order-${index.value + 1}`]: true,
      })),
    };
  },
};
</script>
