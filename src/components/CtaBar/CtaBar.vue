<template>
  <div :class="classCtaBar">
    <div :class="classCtaBarItem"><slot name="left" /></div>
    <div :class="classCtaBarItem"><slot name="center" /></div>
    <div :class="classCtaBarItem"><slot name="right" /></div>
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
    const classCtaBar = computed(() => ({
      hidden: true,
      [`${props.breakpoint}:flex justify-between`]: true,
      "py-6": true,
    }));
    const classCtaBarItem = computed(() => ({
      "flex items-center": true,
    }));

    return {
      classCtaBar,
      classCtaBarItem,
    };
  },
};
</script>