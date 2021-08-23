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
    width: {
      type: String,
      default: null,
    },
    height: {
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
      columnClass: computed(() => ({
        "flex-1": props.width == null,
        [`${props.width}`]: props.width != null,
        [`${props.height}`]: props.height != null,
        [`${props.text}`]: props.text != null,
        [`${props.background}`]: props.background != null,
        [`${props.margin}`]: props.margin != null,
        [`${props.padding}`]: props.padding != null,
      })),
    };
  },
};
</script>