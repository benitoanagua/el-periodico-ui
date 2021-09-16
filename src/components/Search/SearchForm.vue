<template>
  <form :class="formClass">
    <input
      :class="inputClass"
      placeholder="Buscar"
      :value="search"
      @input="$emit('update:search', $event.target.value)"
    />
    <cs-icon
      @click="onClick"
      class="text-neutral-300 h-8 cursor-pointer"
      padding="p-1"
      margin="-ml-10 mt-2"
    >
      <ph-x :size="24" />
    </cs-icon>
  </form>
</template>

<script>
import { reactive, computed } from "vue";
import CsIcon from "@/components/Icon/Icon.vue";
import { PhX } from "phosphor-vue";

export default {
  name: "CsSearchForm",
  components: { CsIcon, PhX },
  props: {
    search: {
      type: String,
      default: null,
    },
  },
  emits: ["click", "update:search"],
  setup(props, { emit }) {
    props = reactive(props);

    const formClass = computed(() => ({
      "flex h-12 content-center": true,
    }));
    const inputClass = computed(() => ({
      "text-xl font-light": true,
      "h-12 p-3 w-full": true,
      "ring-1 ring-neutral-100": true,
      "focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-opacity-50": true,
    }));

    return {
      formClass,
      inputClass,
      onClick() {
        emit("click");
      },
    };
  },
};
</script>