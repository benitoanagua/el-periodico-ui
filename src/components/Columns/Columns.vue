<template>
  <div :class="columnsClass">
    <slot />
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import CsColumn from "./Column.vue";
export default {
  name: "CsColumns",
  components: { CsColumn },
  props: {
    space: {
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
      columnsClass: computed(() => ({
        flex: true,
        [`${props.space}`]: true,
        [`${props.margin}`]: true,
        [`${props.padding}`]: true,
      })),
    };
  },
};
</script>