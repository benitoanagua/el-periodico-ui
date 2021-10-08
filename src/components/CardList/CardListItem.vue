<template>
  <div :class="classItem">
    <div :class="classItemDecimal">{{ decimal }}</div>
    <div :class="classItembody">
      <div class="meta-category">{{ category }}</div>
      <h6>{{ title }}</h6>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  props: {
    category: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    decimal: {
      type: Number,
      default: null,
    },
  },
  setup(props) {
    props = reactive(props);
    const classItem = computed(() => ({
      "flex items-center space-x-2 py-2": true,
    }));
    const classItemDecimal = computed(() => ({
      "text-4xl text-opacity-20 font-extralight text-black": true,
    }));
    const classItembody = computed(() => ({
      "flex flex-col": true,
    }));

    return {
      classItem,
      classItemDecimal,
      classItembody,
    };
  },
};
</script>
