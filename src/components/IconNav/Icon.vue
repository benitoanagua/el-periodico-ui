<template>
  <li :class="iconClass">
    <a v-if="link" :href="link"><slot /></a>
    <span v-else><slot /></span>
  </li>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "CsIcon",
  props: {
    link: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      iconClass: computed(() => ({
        "text-neutral-900 hover:text-neutral-700": props.link != null,
      })),
    };
  },
};
</script>