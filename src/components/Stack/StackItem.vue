<template>
  <div class="relative block w-full">
    <div :class="classStackItem">
      <slot />
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "CsStackItem",
  props: {
    breakpoint: {
      type: String,
      default: "md",
    },
    total: {
      type: Number,
      default: 1,
    },
    order: {
      type: Number,
      default: 1,
    },
  },
  setup(props) {
    props = reactive(props);

    const classStackItem = computed(() => ({
      absolute: true,
      [`z-${(props.total - props.order + 1) * 10}`]: true,
      [`top-${(props.total - props.order) * 8}`]: true,
      [`${props.breakpoint}:left-${(props.order - 1) * 4}`]: true,
    }));

    return {
      classStackItem,
    };
  },
};
</script>
