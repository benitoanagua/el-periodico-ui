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
    isParent: {
      type: Boolean,
      default: false,
    },
    isChild: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      navItemClass: computed(() => ({
        "text-neutral-900 font-semibold": true,
        [`${props.margin}`]: props.margin != null,
        [`${props.padding}`]: props.padding != null,
        "hover:bg-secondary-500": !props.active,
        "bg-secondary-500": props.active,
        "border-b-4 border-secondary-600": props.active,
        "group inline-block relative": props.isParent,
        "pl-3 pt-2 pb-2": props.isChild,
      })),
    };
  },
};
</script>