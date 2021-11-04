<template>
  <div :class="classTabItem" @click="activeteTab">
    <slot />
  </div>
</template>

<script>
import { computed, inject, watchEffect, getCurrentInstance } from "vue";

export default {
  name: "TabItem",
  setup(props) {
    const instance = getCurrentInstance();
    const { tabs, selectTab, active } = inject("tabsState", {
      tabs: [],
      selectTab: () => {},
    });
    const index = computed(() =>
      tabs.value.findIndex((target) => target.uid === instance.uid)
    );
    const isActive = computed(() => index.value === active.value);

    const activeteTab = () => {
      selectTab(index.value);
    };

    watchEffect(() => {
      if (index.value === -1) {
        tabs.value.push(instance);
      }
    });

    return {
      activeteTab,
      isActive,

      classTabItem: computed(() => ({
        "inline-flex items-center px-4 py-2": true,
        "cursor-pointer": true,
        [`${
          isActive.value ? "bg-accent-500 text-white" : "bg-primary-200"
        }`]: true,
      })),
    };
  },
};
</script>
