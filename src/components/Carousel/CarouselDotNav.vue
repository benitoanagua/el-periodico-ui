<template>
  <div @click="dotClick">
    <ph-square :class="classIcon" :size="24" weight="fill" />
  </div>
</template>
<script>
import { reactive, computed, inject } from "vue";
import { PhSquare } from "phosphor-vue";

export default {
  name: "CsCarouselDotNav",
  components: {
    PhSquare,
  },
  props: {
    item: {
      type: Number,
    },
  },
  setup(props) {
    props = reactive(props);
    const { slides, items } = inject("carouselState");

    const active = computed(() =>
      items.value.findIndex((target) => target.uid === slides.value[0].uid)
    );

    const dotClick = () => {
      while (props.item !== active.value) {
        if (props.item > active.value) {
          slides.value.push(slides.value.shift());
        } else {
          slides.value.unshift(slides.value.pop());
        }
      }
    };

    return {
      dotClick,
      classIcon: computed(() => ({
        [`${
          props.item === active.value ? "text-accent-500" : "text-primary-400"
        }`]: true,
      })),
    };
  },
};
</script>
