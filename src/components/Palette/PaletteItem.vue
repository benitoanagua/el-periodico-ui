<template>
  <div :class="ItemPaletteClass">
    <div :class="rangeClass">{{ range }}</div>
    <div :class="valueClass">{{ value }}</div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "CsPaletteItem",
  props: {
    bgColor: {
      type: String,
      default: null,
    },
    range: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      ItemPaletteClass: computed(() => ({
        "flex flex-row justify-between": true,
        "font-mono text-sm p-1 max-w-xs": true,
        "text-white": props.range > 400,
        [`bg-${props.bgColor}-${props.range}`]: true,
      })),
      rangeClass: computed(() => ({
        "ml-1": true,
      })),
      valueClass: computed(() => ({
        "mr-1": true,
      })),
    };
  },
};
</script>