<template>
  <button :class="buttonClass">
    <slot />
  </button>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "CsButton",
  props: {
    style: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      buttonClass: computed(() => ({
        [`text-center ${props.text != null ? props.text : ""}`]: true,
        "bg-white text-neutral-900 border-neutral-500 hover:border-neutral-900 border":
          props.style == "default",
        "text-white bg-accent-500 hover:bg-accent-700":
          props.style == "primary",
        " text-white bg-neutral-700 hover:bg-neutral-900":
          props.style == "secondary",
        "text-neutral-900 bg-green-base hover:text-white hover:bg-green-dark":
          props.style == "success",
        "text-neutral-900 bg-blue-base hover:text-white hover:bg-blue-dark":
          props.style == "info",
        "text-neutral-900 bg-yellow-base hover:text-white hover:bg-yellow-dark":
          props.style == "warning",
        "text-neutral-900 bg-red-base hover:text-white hover:bg-red-dark":
          props.style == "danger",
        "text-neutral-900 bg-purple-base hover:text-white hover:bg-purple-dark":
          props.style == "help",
        "py-0.5 px-6": props.size == "small",
        "py-1 px-6": props.size == "medium",
        "py-2 px-6": props.size == "large",
      })),
    };
  },
};
</script>