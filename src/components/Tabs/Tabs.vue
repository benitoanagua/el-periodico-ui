<template>
  <div class="w-full md:max-w-xs">
    <div class="inline-flex space-x-2">
      <slot />
    </div>
    <div class="bg-accent-500 h-1 z-10"></div>
  </div>
</template>

<script>
import { provide, computed, ref } from "vue";

export default {
  name: "Tab",
  props: {
    modelValue: {
      type: [String, Number],
    },
  },
  emits: ["update:modelValue"],
  setup(props, { slots, emit }) {
    const active = computed(() => props.modelValue);
    const tabs = ref([]);

    function selectTab(tab) {
      emit("update:modelValue", tab);
    }

    provide("tabsState", {
      active,
      tabs,
      selectTab,
    });
  },
};
</script>
