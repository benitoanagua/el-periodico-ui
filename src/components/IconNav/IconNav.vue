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
    spaceX: {
      type: String,
      default: null,
    },
    spaceY: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      iconNavClass: computed(() => ({
        "inline-flex": true,
        "flex-row": props.inline,
        "flex-col": !props.inline,
        [`${props.spaceX}`]: props.spaceX != null && props.inline,
        [`${props.spaceY}`]: props.spaceY != null && !props.inline,
      })),
    };
  },
};
</script>