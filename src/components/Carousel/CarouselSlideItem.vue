<template>
  <div :class="classCarouselItem" ref="container">
    <slot />
  </div>
</template>

<script>
import {
  ref,
  reactive,
  computed,
  inject,
  watchEffect,
  watch,
  getCurrentInstance,
} from "vue";
import { gsap } from "gsap";

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

    const container = ref(null);
    const instance = getCurrentInstance();
    const { slides, items, direction } = inject("carouselState", {
      slides: [],
      items: [],
    });
    const { desktopDisplay, mobileDisplay, slideWidth } = inject("slidesState");

    const index = computed(() =>
      slides.value.findIndex((target) => target.uid === instance.uid)
    );
    const lower = computed(() =>
      desktopDisplay.value < mobileDisplay.value
        ? desktopDisplay.value
        : mobileDisplay.value
    );
    const upper = computed(() =>
      desktopDisplay.value > mobileDisplay.value
        ? desktopDisplay.value
        : mobileDisplay.value
    );
    const range = computed(
      () => index.value + 1 > lower.value && index.value < upper.value
    );

    watch(
      [() => index.value, () => container.value],
      (
        [currentIndex, currentContainer],
        [previousIndex, previousContainer]
      ) => {
        if (previousContainer !== null && previousIndex !== -1) {
          if (currentContainer.offsetWidth > slideWidth.value)
            slideWidth.value = previousContainer.offsetWidth;

          let tween = gsap.fromTo(
            container.value,
            { x: slideWidth.value * direction.value },
            {
              x: 0,
              duration: 2,
              ease: "expo",
            }
          );
        }
      }
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
      container,
      classCarouselItem: computed(() => ({
        hidden: index.value + 1 > upper.value,
        [`hidden ${props.breakpoint}:block`]:
          range.value && desktopDisplay.value > mobileDisplay.value,
        [`block ${props.breakpoint}:hidden`]:
          range.value && mobileDisplay.value > desktopDisplay.value,
        [`order-${index.value + 1}`]: true,
      })),
    };
  },
};
</script>
