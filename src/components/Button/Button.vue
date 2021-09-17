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
        [`text-center text-white`]: true,
        "bg-transparent text-neutral-900": props.theme === "default",
        "ring-inset ring-1 ring-neutral-900 hover:ring-neutral-400":
          props.theme === "default",
        "bg-accent-500 hover:bg-accent-700": props.theme === "primary",
        "bg-neutral-700 hover:bg-neutral-900": props.theme === "secondary",
        "bg-green-base hover: hover:bg-green-dark": props.theme === "success",
        "bg-blue-base hover:bg-blue-dark": props.theme === "info",
        "bg-yellow-base hover:bg-yellow-dark": props.mystyle === "warning",
        "bg-red-base hover:bg-red-dark": props.mystyle === "danger",
        "bg-purple-base hover:bg-purple-dark": props.mystyle === "help",
        "py-0.5 px-6 text-sm font-semibold": props.size === "small",
        "py-1 px-6 text-base": props.size === "medium",
        "py-2 px-6 text-lg font-light": props.size === "large",
      })),
    };
  },
};
</script>