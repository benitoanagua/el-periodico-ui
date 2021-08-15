<template>
  <div :class="paletteClass">
    <cs-palette-item
      v-for="item in items"
      :bgColor="name.toLowerCase()"
      :range="item.name"
      :value="item.value"
    />
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import CsPaletteItem from "./PaletteItem.vue";

export default {
  name: "CsPalette",
  components: { CsPaletteItem },
  props: {
    items: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      paletteClass: computed(() => ({
        "flex flex-col": true,
      })),
    };
  },
};
</script>