<template>
  <div :class="radioBarClass">
    <div class="flex items-center">
      <slot name="left" />
    </div>
    <div :class="radioBarRightClass">
      <slot name="right" />
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "CsRadioBar",
  props: {
    breakpoint: {
      type: String,
      default: "md",
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      radioBarClass: computed(() => ({
        [`flex ${props.breakpoint}:justify-between justify-center`]: true,
      })),
      radioBarRightClass: computed(() => ({
        [`${props.breakpoint}:flex hidden items-center`]: true,
      })),
    };
  },
};
</script>