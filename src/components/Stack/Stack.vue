<template>
  <div class="mx-3 md:mx-0" :style="{ height: blockHeight + 'px' }">
    <slot />
  </div>
</template>

<script>
import { ref, provide, watchEffect } from "vue";

export default {
  name: "CsStack",
  setup() {
    const items = ref([]);
    const itemsHeight = ref([]);
    const blockHeight = ref(0);

    const setHeight = () => {
      blockHeight.value = Math.max(...itemsHeight.value);
    };

    watchEffect(() => {
      setHeight();
    });

    provide("itemsState", {
      items,
      itemsHeight,
    });

    return {
      blockHeight,
    };
  },
};
</script>
