<template>
  <div :class="containerClass">
    <slot />
  </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "CsContainer",
  props: {
    maxWidth: {
      type: String,
      default: null,
    },
    backgroundColor: {
      type: String,
      default: null,
    },
    breakpoint: {
      type: String,
      default: "md",
    },
    margin: {
      type: String,
      default: null,
    },
    padding: {
      type: String,
      default: null,
    },
  },

  setup(props) {
    props = reactive(props);
    return {
      containerClass: computed(() => ({
        "mx-auto": true,
        [`${props.maxWidth || "max-w-screen-md"}`]: true,
        [`${props.backgroundColor || "bg-transparent"}`]: true,
        [`${props.margin || "m-0"}`]: true,
        [`${props.breakpoint}:${props.padding || "p-0"} px-3`]: true,
      })),
    };
  },
};
</script>
