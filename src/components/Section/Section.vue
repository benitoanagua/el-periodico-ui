<template>
  <div :class="sectionclass">
    <slot />
  </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "CsSection",
  props: {
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
      sectionclass: computed(() => ({
        "w-full": true,
        [`${props.backgroundColor}`]: props.backgroundColor != null,
        [`${props.margin}`]: props.margin != null,
        [`${props.padding}`]: props.padding != null,
      })),
    };
  },
};
</script>
