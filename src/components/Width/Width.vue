<template>
  <div :class="widthClass">
    <slot />
  </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "CsWidth",
  props: {
    fraction: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      default: null,
    },
    background: {
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
      widthClass: computed(() => ({
        [`${props.fraction}`]: true,
        [`${props.text}`]: true,
        [`${props.background}`]: true,
        [`${props.margin}`]: true,
        [`${props.padding}`]: true,
      })),
    };
  },
};
</script>