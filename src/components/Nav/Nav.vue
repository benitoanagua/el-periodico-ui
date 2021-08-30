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
    inline: {
      type: Boolean,
      default: false,
    },
    submenu: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      navClass: computed(() => ({
        "inline-flex": true,
        "flex-row": props.inline,
        "flex-col": !props.inline,
        "bg-primary-100 rounded shadow-lg": props.submenu,
        // "divide-y divide-y-reverse divide-primary-500": props.submenu,
        "w-40": props.submenu,
        "-ml-2": props.submenu,
        "group-hover:block absolute hidden": props.submenu,
      })),
    };
  },
};
</script>