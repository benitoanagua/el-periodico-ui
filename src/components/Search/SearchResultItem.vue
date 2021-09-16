<template>
  <div :class="classItem">
    <div class="flex-none">
      <img :src="image" alt="" :class="classItemImage" />
    </div>
    <div>
      <h6>{{ title }}</h6>
      <span class="meta">{{ date }}</span>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "CsSearchResultItem",
  props: {
    title: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      default: null,
    },
    date: {
      type: String,
      default: false,
    },
  },
  setup(props) {
    props = reactive(props);

    const classItem = computed(() => ({
      flex: true,
    }));
    const classItemImage = computed(() => ({
      "w-24 h-16": true,
      "mr-2": true,
    }));
    return { classItem, classItemImage };
  },
};
</script>