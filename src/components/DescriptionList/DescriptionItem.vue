<template>
  <dt :class="titleClass">{{ title }}</dt>
  <dd :class="descriptionClass">{{ placeholder }}</dd>
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "CsDescriptionItem",
  props: {
    title: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    divider: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      titleClass: computed(() => ({
        "font-sans text-sm text-neutral-500": true,
      })),
      descriptionClass: computed(() => ({
        "mb-2 pb-1": true,
        "border-b border-neutral-200": props.divider,
        [props.description]: true,
      })),
    };
  },
};
</script>