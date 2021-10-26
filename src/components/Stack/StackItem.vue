<template>
  <div class="relative block w-full">
    <div :class="classStackItem">
      <div class="-mb-3 z-10">
        <cs-button
          :theme="active"
          size="small"
          class="w-40"
          @click="onClickBtn"
        >
          {{ caption }}
        </cs-button>
      </div>
      <slot />
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import { useStore } from "vuex";
import CsButton from "@/components/Button/Button.vue";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "CsStackItem",
  components: {
    CsButton,
  },
  props: {
    breakpoint: {
      type: String,
      default: "md",
    },
    caption: {
      type: String,
      default: "Titulo",
    },
    total: {
      type: Number,
      default: 1,
    },
    order: {
      type: Number,
      default: 1,
    },
  },
  setup(props) {
    props = reactive(props);

    const store = useStore();
    store.dispatch("stack/addItem", {
      id: uuidv4(),
      zIndex: props.order,
      title: props.caption,
    });

    return {
      classStackItem: computed(() => ({
        absolute: true,
        "flex items-center flex-col": true,
        [`z-${(props.total - props.order + 1) * 10}`]: true,
        [`top-${(props.total - props.order) * 8}`]: true,
        [`${props.breakpoint}:left-${(props.order - 1) * 4}`]: true,
      })),

      active: computed(() => (props.order === 1 ? "secondary" : "primary")),

      onClickBtn: () => {
        if (props.order !== 1) {
          const current = store.getters["stack/getStackItem"](props.order);
          store.dispatch("stack/sendFront", {
            id: current.id,
            zIndex: current.zIndex,
            title: props.caption,
          });
        }
      },
    };
  },
};
</script>
