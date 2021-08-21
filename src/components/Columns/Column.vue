<template>
  <div :class="columnClass">
    <slot />
  </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "CsColumn",
  props: {
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
      columnClass: computed(() => ({
        "flex-1": true,
        [`${props.text}`]: true,
        [`${props.background}`]: true,
        [`${props.margin}`]: true,
        [`${props.padding}`]: true,
      })),
    };
  },
};
</script>