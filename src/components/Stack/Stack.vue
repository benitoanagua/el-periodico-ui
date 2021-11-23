<template>
  <div class="mx-3 md:mx-0" :style="{ height: heightContainer + 'px' }">
    <slot />
  </div>
</template>

<script>
import { ref, provide, watchEffect } from "vue";

export default {
  name: "CsStack",
  setup() {
    const items = ref([]);
    const sizes = ref([]);
    const heightContainer = ref(0);

    const setHeight = () => {
      heightContainer.value = Math.max(...sizes.value);
    };

    watchEffect(() => {
      setHeight();
    });

    provide("itemsState", {
      items,
      sizes,
    });

    return {
      heightContainer,
    };
  },
};
</script>
