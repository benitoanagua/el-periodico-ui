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
    horizontal: {
      type: String,
      default: null,
    },
    vertical: {
      type: String,
      default: null,
    },
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
        [`${props.horizontal}`]: props.horizontal != null,
        [`${props.vertical}`]: props.vertical != null,
        [`${props.space}`]: props.space != null,
        [`${props.margin}`]: props.margin != null,
        [`${props.padding}`]: props.padding != null,
      })),
    };
  },
};
</script>