<template>
  <div class="relative block w-full">
    <div :class="classStackItem" ref="container">
      <div class="-mb-3 z-10">
        <cs-button
          :theme="getTheme"
          size="small"
          class="w-40"
          @click="sendFront"
          :disabled="index === 0"
        >
          {{ caption }}
        </cs-button>
      </div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  computed,
  inject,
  watchEffect,
  getCurrentInstance,
  onMounted,
  onUnmounted,
} from "vue";
import CsButton from "@/components/Button/Button.vue";

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
  },
  setup(props) {
    props = reactive(props);

    const container = ref(null);

    const instance = getCurrentInstance();
    const { items, sizes } = inject("itemsState", { items: [], sizes: [] });
    const index = computed(() =>
      items.value.findIndex((target) => target.uid === instance.uid)
    );

    const sendFront = () => {
      items.value.splice(index.value, 1);
      items.value.splice(0, 1, instance);
    };

    const observeMutations = (targetNode, callback) => {
      const config = { attributes: true, childList: true, subtree: true };
      const observer = new MutationObserver(callback);
      observer.observe(targetNode, config);
      return observer;
    };

    let observer = null;
    onMounted(() => {
      observer = observeMutations(container.value, () => {
        sizes.value[index.value] =
          container.value.offsetHeight +
          32 * (items.value.length - (index.value + 1));
      });
    });
    onUnmounted(() => observer?.disconnect());

    watchEffect(() => {
      if (index.value === -1) {
        items.value.push(instance);
      }
    });

    return {
      sendFront,
      index,
      container,

      classStackItem: computed(() => ({
        absolute: true,
        "flex items-center flex-col": true,
        [`z-${(items.value.length - (index.value + 1) + 1) * 10}`]: true,
        [`top-${(items.value.length - (index.value + 1)) * 8}`]: true,
        [`${props.breakpoint}:left-${(index.value + 1 - 1) * 4}`]: true,
      })),

      getTheme: computed(() => (index.value === 0 ? "secondary" : "primary")),
    };
  },
};
</script>
