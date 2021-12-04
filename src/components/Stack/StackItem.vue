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
  watch,
  getCurrentInstance,
  onMounted,
  onUnmounted,
} from "vue";
import CsButton from "@/components/Button/Button.vue";
import { gsap } from "gsap";

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
    const { items, itemsHeight } = inject("itemsState", {
      items: [],
      itemsHeight: [],
    });
    const index = computed(() =>
      items.value.findIndex((target) => target.uid === instance.uid)
    );

    const sendFront = () => {
      items.value.splice(index.value, 1);
      items.value.unshift(instance);
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
        itemsHeight.value[index.value] =
          container.value.offsetHeight +
          32 * (items.value.length - (index.value + 1));
      });
    });
    onUnmounted(() => observer?.disconnect());

    watch(
      () => index.value,
      (current, previous) => {
        if (previous !== -1) {
          let sideRotation = (current + 1) % 2 === 0 ? 1 : -1;
          let tween = gsap.fromTo(
            container.value,
            { y: items.value.length * 8, rotation: sideRotation * 2 },
            {
              y: 0,
              rotation: 0,
              duration: items.value.length - (index.value + 1) + 1,
              ease: "expo",
            }
          );
        }
      }
    );

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
