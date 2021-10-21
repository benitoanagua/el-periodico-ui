<template>
  <div :class="classCard">
    <div :class="classList">
      <slot />
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "CsCardList",
  props: {
    theme: {
      type: String,
      default: "default",
      validator: function (value) {
        return (
          ["neutral", "primary", "secondary", "accent"].indexOf(value) !== -1
        );
      },
    },
    caption: {
      type: String,
      default: "Title",
    },
  },
  setup(props) {
    props = reactive(props);
    const classCard = computed(() => ({
      "w-full md:max-w-xs": true,
      "flex flex-col shadow-lg": true,
      [`bg-${props.theme}-100`]: true,
    }));
    const classList = computed(() => ({
      "flex flex-col px-6 py-5": true,
      "divide-y divide-black divide-opacity-10": true,
    }));

    return {
      classCard,
      classList,
    };
  },
};
</script>
