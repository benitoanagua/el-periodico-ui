<template>
  <div :class="classTopBar">
    <div :class="classTopBarItem"><slot name="left" /></div>
    <div :class="classTopBarItem"><slot name="right" /></div>
  </div>
</template>
<script>
import { reactive, computed } from "vue";

export default {
  name: "CsCtaBar",
  props: {
    breakpoint: {
      type: String,
      default: "md",
    },
  },
  setup(props) {
    props = reactive(props);
    const classTopBar = computed(() => ({
      hidden: true,
      [`${props.breakpoint}:flex justify-between`]: true,
      "py-1": true,
    }));
    const classTopBarItem = computed(() => ({
      "flex items-center": true,
    }));

    return {
      classTopBar,
      classTopBarItem,
    };
  },
};
</script>