<template>
  <div :class="classes">
    <slot />
  </div>
</template>-

<script>

import { reactive, computed } from "vue";

export default {
  name: "CsContainer",
  props: {
    backgroundColor: {
      type: String,
    },
  },

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        "container": true,
        [`${props.backgroundColor}`]: true,
      })),
    };
  },
};
</script>
