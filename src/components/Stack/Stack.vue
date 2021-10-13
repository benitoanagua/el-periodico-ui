<template>
  <div :class="classStack">
    <slot />
  </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "CsStack",
  props: {
    breakpoint: {
      type: String,
      default: "md",
    },
  },
  setup(props) {
    props = reactive(props);

    const classStack = computed(() => ({
      [`mx-3 ${props.breakpoint}:mx-0`]: true,
    }));
    return {
      classStack,
    };
  },
};
</script>
