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
    breakpoint: {
      type: String,
      default: "md",
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
        "flex flex-col": true,
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