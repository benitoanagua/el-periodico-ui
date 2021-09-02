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
    submenuWidth: {
      type: String,
      default: null,
    },
    menuWidth: {
      type: String,
      default: null,
    },
    breakpoint: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      navClass: computed(() => ({
        // Mobile
        hidden: true,
        // Desktop
        [`${props.breakpoint}:inline-flex`]: !props.submenu,
        "flex-row": props.inline,
        "flex-col": !props.inline,
        [`${props.menuWidth} divide-y divide-secondary-200`]: !props.inline,
        "bg-secondary-50 shadow-xl": props.submenu,
        [`${props.submenuWidth}`]: props.submenuWidth != null,
        "-ml-3 mt-4": props.submenu,
        "rounded overflow-hidden": props.submenu,
        "divide-y divide-secondary-200": props.submenu,
        "group-hover:block absolute hidden": props.submenu,
      })),
    };
  },
};
</script>