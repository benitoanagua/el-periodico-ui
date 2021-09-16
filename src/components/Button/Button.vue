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
      validator: function (value) {
        return (
          [
            "default",
            "primary",
            "secondary",
            "success",
            "info",
            "warning",
            "danger",
            "help",
          ].indexOf(value) !== -1
        );
      },
    },
    size: {
      type: String,
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
    text: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      buttonClass: computed(() => ({
        [`text-center text-white ${props.text || "text-base"}`]: true,
        "bg-white text-neutral-900 border-neutral-500 hover:border-neutral-900 border":
          props.style === "default",
        "bg-accent-500 hover:bg-accent-700": props.style === "primary",
        "bg-neutral-700 hover:bg-neutral-900": props.style === "secondary",
        "bg-green-base hover: hover:bg-green-dark": props.style === "success",
        "bg-blue-base hover:bg-blue-dark": props.style === "info",
        "bg-yellow-base hover:bg-yellow-dark": props.style === "warning",
        "bg-red-base hover:bg-red-dark": props.style === "danger",
        "bg-purple-base hover:bg-purple-dark": props.style === "help",
        "py-0.5 px-6": props.size === "small",
        "py-1 px-6": props.size === "medium",
        "py-2 px-6": props.size === "large",
      })),
    };
  },
};
</script>