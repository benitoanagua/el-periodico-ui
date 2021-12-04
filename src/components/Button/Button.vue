<template>
  <button v-if="!link" :class="buttonClass">
    <slot />
  </button>
  <a v-else :class="buttonClass" :href="link"><slot /></a>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "CsButton",
  props: {
    link: {
      type: String,
      default: null,
    },
    theme: {
      type: String,
      default: "default",
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
      default: "medium",
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      buttonClass: computed(() => ({
        "text-center": true,
        "text-white": props.theme === "secondary",
        "text-neutral-900": props.theme !== "secondary",
        "hover:text-white":
          props.theme !== "secondary" && props.theme !== "default",
        "bg-white hover:bg-neutral-50": props.theme === "default",
        "ring-inset ring-1 ring-neutral-900 hover:ring-neutral-500":
          props.theme === "default",
        "bg-accent-500 hover:bg-accent-600": props.theme === "primary",
        "bg-neutral-800 hover:bg-neutral-900": props.theme === "secondary",
        "bg-green-500 hover:bg-green-600": props.theme === "success",
        "bg-blue-500 hover:bg-blue-600": props.theme === "info",
        "bg-yellow-500 hover:bg-yellow-600": props.theme === "warning",
        "bg-red-500 hover:bg-red-600": props.theme === "danger",
        "bg-purple-500 hover:bg-purple-600": props.theme === "help",
        "py-0.5 px-6 text-sm font-semibold": props.size === "small",
        "py-1 px-6 text-500": props.size === "medium",
        "py-2 px-6 text-lg font-light": props.size === "large",
      })),
    };
  },
};
</script>
