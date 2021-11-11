<template>
  <div class="mx-3 md:mx-0" :style="{ height: 660 + 'px' }">
    <slot />
  </div>
</template>

<script>
import { provide, ref, watchEffect, nextTick } from "vue";

export default {
  name: "CsStack",
  setup() {
    const items = ref([]);
    const height = ref(0);

    const getHeight = async () => {
      await nextTick();
      for (var value of items.value) {
        console.log(value.proxy.$el.querySelector("div").offsetHeight);
      }
    };

    watchEffect(() => {
      getHeight();
    });

    provide("itemsState", {
      items,
      height,
    });
  },
};
</script>
