<template>
  <div class="inline-block bg-primary-200 z-10">
    <slot />
  </div>
</template>

<script>
import { ref, provide, computed } from "vue";

export default {
  name: "TabPanel",
  props: {
    modelValue: [String, Number],
  },
  setup(props) {
    provide("tabsPanelState", {
      active: computed(() => props.modelValue),
      panels: ref([]),
    });
  },
};
</script>
