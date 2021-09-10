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
        [`${props.backgroundColor || "bg-transparent"}`]: true,
        [`${props.margin || "m-0"}`]: true,
        [`${props.padding || "p-0"}`]: true,
      })),
    };
  },
};
</script>
