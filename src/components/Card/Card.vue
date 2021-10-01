<template>
  <div :class="classCard">
    <div :class="classCardImage">
      <img :src="image" alt="" class="w-full" />
    </div>
    <div :class="classCardBody">
      <div class="meta-category">{{ category }}</div>
      <div :class="classCardBodyTitle">
        <h1 v-if="heading === 1">{{ title }}</h1>
        <h2 v-else-if="heading === 2">{{ title }}</h2>
        <h3 v-else-if="heading === 3">{{ title }}</h3>
        <h4 v-else-if="heading === 4">{{ title }}</h4>
        <h5 v-else-if="heading === 5">{{ title }}</h5>
        <h6 v-else>{{ title }}</h6>
      </div>
      <div :class="classCardBodyMeta">
        <div v-if="author" class="meta-author">{{ author }}</div>
        <span v-if="author" class="h-3 border-l border-neutral-300"></span>
        <div class="meta-ago">{{ date }}</div>
      </div>
      <p v-if="excerpt" class="meta-paragraph">{{ excerpt }}</p>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "CsCard",
  props: {
    breakpoint: {
      type: String,
      default: "md",
    },
    heading: {
      type: Number,
      default: 1,
    },
    title: {
      type: String,
      default: "Title",
    },
    media: {
      type: String,
      default: "left",
      validator: function (value) {
        return ["top", "bottom", "left", "right"].indexOf(value) !== -1;
      },
    },
    image: {
      type: String,
      default: "",
    },
    excerpt: {
      type: String,
    },
    author: {
      type: String,
    },
    category: {
      type: String,
      default: "Category",
    },
    date: {
      type: String,
      default: "DD-MM-YYYY",
    },
    mediaFraction: {
      type: String,
      default: "w-1/2",
    },
    bodyFraction: {
      type: String,
      default: "w-1/2",
    },
  },
  setup(props) {
    props = reactive(props);

    const classCard = computed(() => ({
      "flex space-y-4": true,
      [`flex-col ${props.breakpoint}:flex-row`]: props.media === "left",
      [`${props.breakpoint}:space-x-4`]: props.media === "left",
      [`flex-col-reverse space-y-reverse ${props.breakpoint}:flex-row-reverse`]:
        props.media === "right",
      [`${props.breakpoint}:space-x-reverse ${props.breakpoint}:space-x-4`]:
        props.media === "right",
      "flex-col": props.media === "top",
      "flex-col-reverse space-y-reverse": props.media === "bottom",
    }));
    const classCardImage = computed(() => ({
      flex: true,
      [`${props.breakpoint}:${props.mediaFraction || "w-1/2"} w-full`]:
        props.media === "left" || props.media === "right",
    }));
    const classCardBody = computed(() => ({
      "flex flex-col space-y-2": true,
      [`${props.breakpoint}:${props.bodyFraction || "w-1/2"} w-full`]:
        props.media === "left" || props.media === "right",
    }));
    const classCardBodyTitle = computed(() => ({
      "flex text-neutral-900": true,
    }));
    const classCardBodyMeta = computed(() => ({
      "flex space-x-2 items-center": true,
    }));

    return {
      classCard,
      classCardImage,
      classCardBody,
      classCardBodyTitle,
      classCardBodyMeta,
    };
  },
};
</script>