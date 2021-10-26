<template>
  <div :class="classStack" :style="{ height: 660 + 'px' }">
    <slot />
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "CsStack",
  props: {
    breakpoint: {
      type: String,
      default: "md",
    },
  },
  setup(props) {
    props = reactive(props);

    const store = useStore();
    store.dispatch("stack/cleanItems");
    // console.log("items: " + store.getters["stack/getStackLenght"]);

    return {
      classStack: computed(() => ({
        [`mx-3 ${props.breakpoint}:mx-0`]: true,
      })),
    };
  },
};
</script>
