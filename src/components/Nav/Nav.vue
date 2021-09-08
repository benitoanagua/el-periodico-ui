<template>
  <ul :class="navClass">
    <slot />
  </ul>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "CsNav",
  props: {
    offCanvasWidth: {
      type: String,
      default: null,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    breakpoint: {
      type: String,
      default: null,
    },
    divide: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      navClass: computed(() => ({
        "-translate-x-full": !props.visible,
        "translate-x-0": props.visible,
        [`transform transition duration-500 ease-in-out ${props.breakpoint}:translate-x-0`]: true,

        "absolute top-0 left-0 bg-neutral-50 h-full shadow-2xl": true,
        [`${props.breakpoint}:relative
          ${props.breakpoint}:bg-transparent
          ${props.breakpoint}:shadow-none`]: true,

        "flex flex-col": true,
        [`${props.offCanvasWidth || "w-full"}`]: true,
        [`${props.breakpoint}:inline-flex
          ${props.breakpoint}:flex-row`]: true,
        "divide-y divide-black divide-opacity-5": props.divide,
        [`${props.breakpoint}:divide-y-0
          ${props.breakpoint}:divide-x`]: props.divide,
      })),
    };
  },
};
</script>