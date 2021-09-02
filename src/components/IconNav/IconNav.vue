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
    breakpoint: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      iconNavClass: computed(() => ({
        [`${props.breakpoint}:hidden`]: props.breakpoint != null,
        "inline-flex": !props.fullWidth,
        "flex justify-between": props.fullWidth,
        "flex-row": props.inline,
        "flex-col": !props.inline,
        [`${props.spaceX}`]: props.spaceX != null && props.inline,
        [`${props.spaceY}`]: props.spaceY != null && !props.inline,
        [`${props.backgroundColor}`]: props.backgroundColor != null,
        [`${props.margin}`]: props.margin != null,
        [`${props.padding}`]: props.padding != null,
      })),
    };
  },
};
</script>