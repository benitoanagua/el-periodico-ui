<template>
  <span :class="IconClass">
    <slot />
  </span>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "CsIcon",
  props: {
    backgroundColor: {
      type: String,
      default: null,
    },
    borderRadius: {
      type: String,
      default: null,
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
      IconClass: computed(() => ({
        "inline-flex text-white": true,
        [`${props.backgroundColor || "bg-white"}`]: true,
        [`${props.borderRadius || "rounded-none"}`]: true,
        [`${props.margin || "m-0"}`]: true,
        [`${props.padding || "p-0"}`]: true,
      })),
    };
  },
};
</script>