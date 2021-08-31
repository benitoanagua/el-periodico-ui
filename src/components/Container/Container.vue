<template>
  <div :class="containerClass">
    <slot />
  </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "CsContainer",
  props: {
    maxWidth: {
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
      containerClass: computed(() => ({
        "mx-auto": true,
        [`${props.maxWidth}`]: props.maxWidth != null,
        [`${props.backgroundColor}`]: props.backgroundColor != null,
        [`${props.margin}`]: props.margin != null,
        [`${props.padding}`]: props.padding != null,
      })),
    };
  },
};
</script>
