<template>
  <div :class="classCard">
    <div :class="classCaption">
      {{ caption }}
    </div>
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
      "flex flex-col mt-4 max-w-xs shadow-lg": true,
      [`bg-${props.theme}-50`]: true,
    }));
    const classCaption = computed(() => ({
      "inline-flex bg-accent-500 min-w-min": true,
      "mx-auto px-8 py-1 -mt-4": true,
      "text-white text-center uppercase font-semibold tracking-widest": true,
    }));
    const classList = computed(() => ({
      "flex flex-col px-6 pb-4": true,
      "divide-y divide-black divide-opacity-10": true,
    }));

    return {
      classCard,
      classCaption,
      classList,
    };
  },
};
</script>
