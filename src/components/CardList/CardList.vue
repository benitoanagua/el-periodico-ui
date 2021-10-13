<template>
  <div :class="classCard">
    <div :class="classCaption">
      <cs-button theme="primary" size="small" @click="onClick" class="w-40">
        {{ caption }}
      </cs-button>
    </div>
    <div :class="classList">
      <slot />
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import CsButton from "@/components/Button/Button.vue";

export default {
  name: "CsCardList",
  components: {
    CsButton,
  },
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
  emits: ["click"],
  setup(props, { emit }) {
    props = reactive(props);
    const classCard = computed(() => ({
      "w-full md:max-w-xs": true,
      "flex flex-col mt-3 shadow-lg": true,
      [`bg-${props.theme}-100`]: true,
    }));
    const classCaption = computed(() => ({
      "mx-auto -mt-3 mb-1.5": true,
    }));
    const classList = computed(() => ({
      "flex flex-col px-6 pb-4": true,
      "divide-y divide-black divide-opacity-10": true,
    }));

    return {
      classCard,
      classCaption,
      classList,
      onClick() {
        emit("click");
      },
    };
  },
};
</script>
