<template>
  <div :class="radioBarClass">
    <div :class="radioBarColumnClass">
      <slot name="left" />
    </div>
    <div :class="radioBarColumnClass">
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
        "flex justify-between": true,
        // [`${props.breakpoint}:divide-y-0`]: props.divide,
      })),
      radioBarColumnClass: computed(() => ({
        flex: true,
      })),
    };
  },
};
</script>