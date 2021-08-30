<template>
  <li :class="navItemClass">
    <a v-if="!active" :href="link">{{ title }}</a>
    <span v-else>{{ title }}</span>
    <slot />
  </li>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "CsNavItem",
  props: {
    title: {
      type: String,
      default: null,
    },
    link: {
      type: String,
      default: null,
    },
    active: {
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
      navItemClass: computed(() => ({
        "px-2": true,
        "text-neutral-900 font-semibold": true,
        "text-opacity-100": !props.active,
        "hover:bg-black hover:bg-opacity-5": !props.active,
        "text-opacity-50 bg-black bg-opacity-5": props.active,
        "group inline-block relative": props.submenu,
      })),
    };
  },
};
</script>