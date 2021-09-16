<template>
  <div :class="classResult">
    <slot />
  </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "CsSearchResult",
  props: {
    space: {
      type: String,
      default: null,
    },
    divide: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    props = reactive(props);

    const classResult = computed(() => ({
      "flex flex-col": true,
      [`${props.space || "space-y-0"}`]: true,
      [`${props.divide || "divide-y-0"}`]: true,
    }));

    return { classResult };
  },
};
</script>