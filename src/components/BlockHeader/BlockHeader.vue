<template>
  <div :class="classBlockHeader">
    <div :class="classLine">
      <div :class="classLineFraction"></div>
    </div>
    <div :class="classBody">
      <span :class="classBodyTitle">
        {{ title }}
      </span>
      <ph-caret-right :size="24" :class="classBodyIcon" />
    </div>
  </div>
</template>
<script>
import { reactive, computed } from "vue";
import { PhCaretRight } from "phosphor-vue";

export default {
  name: "CsBlockHeader",
  components: {
    PhCaretRight,
  },
  props: {
    breakpoint: {
      type: String,
      default: "md",
    },
    title: {
      type: String,
      default: "Title",
    },
    textColor: {
      type: String,
      default: null,
    },
    lineColor: {
      type: String,
      default: null,
    },
    lineFractionColor: {
      type: String,
      default: null,
    },
    lineFraction: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    props = reactive(props);
    const classBlockHeader = computed(() => ({
      "mb-4": true,
    }));
    const classLine = computed(() => ({
      "h-1 mb-1": true,
      [`${props.lineColor || "bg-primary-500"}`]: true,
    }));
    const classLineFraction = computed(() => ({
      "h-1": true,
      [`${props.breakpoint}:${props.lineFraction || "w-1/2"} w-full`]: true,
      [`${props.lineFractionColor || "bg-primary-900"}`]: true,
    }));
    const classBody = computed(() => ({
      "inline-flex items-center": true,
    }));
    const classBodyTitle = computed(() => ({
      "font-sans font-semibold": true,
      [`${props.breakpoint}:text-2xl text-xl`]: true,
      [`${props.textColor || "text-primary-900"}`]: true,
    }));
    const classBodyIcon = computed(() => ({
      [`fill-current ${props.textColor || "text-primary-900"}`]: true,
    }));

    return {
      classBlockHeader,
      classLine,
      classLineFraction,
      classBody,
      classBodyTitle,
      classBodyIcon,
    };
  },
};
</script>