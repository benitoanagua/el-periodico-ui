<template>
  <ul :class="iconNavClass">
    <slot />
  </ul>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "CsIconNav",
  props: {
    inline: {
      type: Boolean,
      default: false,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    spaceX: {
      type: String,
      default: null,
    },
    spaceY: {
      type: String,
      default: null,
    },
    backgroundColor: {
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
      iconNavClass: computed(() => ({
        "inline-flex": !props.fullWidth,
        "flex justify-between": props.fullWidth,
        "flex-row": props.inline,
        "flex-col": !props.inline,
        [`${props.spaceX || "space-x-2"}`]: props.inline,
        [`${props.spaceY || "space-y-2"}`]: !props.inline,
        [`${props.backgroundColor || "bg-white"}`]: true,
        [`${props.margin || "p-0"}`]: true,
        [`${props.padding || "m-0"}`]: true,
      })),
    };
  },
};
</script>