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
    breakpoint: {
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
  },
  setup(props) {
    props = reactive(props);
    return {
      navItemClass: computed(() => ({
        "text-neutral-900 font-semibold": true,
        "bg-black bg-opacity-0": true,
        [`${props.margin || "my-0"}`]: true,
        [`${props.padding || "px-3 py-3"}`]: true,
        "cursor-pointer": !props.active,
        "hover:bg-opacity-5": !props.active,
        "bg-opacity-5 mix-blend-luminosity": props.active,
        // "border-l-2 border-black border-opacity-5": props.active,
        // [`${props.breakpoint}:border-b-2
        //   ${props.breakpoint}:border-l-0`]: props.active,
      })),
    };
  },
};
</script>