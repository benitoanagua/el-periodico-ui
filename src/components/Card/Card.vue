<template>
  <div :class="classBg">
    <div :class="classCard">
      <div :class="classCardMedia">
        <div class="w-full">
          <div
            :class="classCardMediaImage"
            :style="'background-image: url(' + image + ')'"
          >
            <a :href="url"></a>
          </div>
        </div>
      </div>
      <div :class="classCardBody">
        <div v-if="category" class="meta-category">{{ category }}</div>
        <div :class="classCardBodyTitle">
          <a :href="url">
            <h1 v-if="heading === 1">{{ title }}</h1>
            <h2 v-else-if="heading === 2">{{ title }}</h2>
            <h3 v-else-if="heading === 3">{{ title }}</h3>
            <h4 v-else-if="heading === 4">{{ title }}</h4>
            <h5 v-else-if="heading === 5">{{ title }}</h5>
            <h6 v-else>{{ title }}</h6>
          </a>
        </div>
        <div :class="classCardBodyMeta">
          <div v-if="author" class="meta-author">{{ author }}</div>
          <span v-if="author" class="h-3 border-l border-neutral-300"></span>
          <div v-if="date" class="meta-ago">{{ date }}</div>
        </div>
        <p v-if="excerpt" class="meta-paragraph">{{ excerpt }}</p>
      </div>
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
    url: {
      type: String,
      default: "#",
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
      default: null,
    },
    aspectRatio: {
      type: String,
      default: null,
    },
    excerpt: {
      type: String,
    },
    author: {
      type: String,
    },
    category: {
      type: String,
    },
    date: {
      type: String,
    },
    mediaFraction: {
      type: String,
      default: "w-1/2",
    },
    bodyFraction: {
      type: String,
      default: "w-1/2",
    },
    noWrap: {
      type: Boolean,
      default: false,
    },
    isFloat: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    props = reactive(props);

    const classBg = computed(() => ({
      "bg-primary-200": props.isFloat,
      "-mx-3": props.isFloat,
      [`${props.breakpoint}:mt-8 ${props.breakpoint}:ml-8 ${props.breakpoint}:pr-8 ${props.breakpoint}:mr-0`]:
        props.media === "left" && props.isFloat,
      [`${props.breakpoint}:mt-8 ${props.breakpoint}:mr-8 ${props.breakpoint}:pl-8 ${props.breakpoint}:ml-0`]:
        props.media === "right" && props.isFloat,
      [`${props.breakpoint}:pr-8 ${props.breakpoint}:mt-8 ${props.breakpoint}:ml-8 ${props.breakpoint}:mr-0`]:
        props.media === "top" && props.isFloat,
      [`${props.breakpoint}:ml-8 ${props.breakpoint}:pr-8 ${props.breakpoint}:mr-0`]:
        props.media === "bottom" && props.isFloat,
    }));
    const classCard = computed(() => ({
      flex: true,
      [`${props.noWrap ? "space-x-4 flex-row" : "space-y-2 flex-col"}`]: true,
      [`${props.breakpoint}:flex-row`]: props.media === "left",
      [`${props.breakpoint}:space-x-4 ${props.breakpoint}:space-y-0`]:
        props.media === "left" || props.media === "right",
      [`${props.breakpoint}:flex-row-reverse ${props.breakpoint}:space-x-reverse`]:
        props.media === "right",
      "flex-col": props.media === "top" || props.media === "bottom",
      [`${props.breakpoint}:flex-col-reverse ${props.breakpoint}:space-y-reverse`]:
        props.media === "bottom",
      // BG
      [`${props.breakpoint}:-ml-8 ${props.breakpoint}:-mt-8 ${props.breakpoint}:mb-8`]:
        props.media === "left" && props.isFloat,
      [`${props.breakpoint}:-mr-8 ${props.breakpoint}:-mt-8 ${props.breakpoint}:mb-8`]:
        props.media === "right" && props.isFloat,
      [`${props.breakpoint}:-mt-8 ${props.breakpoint}:-ml-8 `]:
        props.media === "top" && props.isFloat,
      [`${props.breakpoint}:-ml-8 ${props.breakpoint}:-mb-8 `]:
        props.media === "bottom" && props.isFloat,
    }));
    const classCardMedia = computed(() => ({
      flex: true,
      [`${props.mediaFraction || "w-1/2"}`]: props.noWrap,
      [`${props.breakpoint}:${props.mediaFraction || "w-1/2"}`]:
        props.media === "left" || props.media === "right",
    }));
    const classCardMediaImage = computed(() => ({
      "bg-cover bg-center": true,
      [`${props.aspectRatio || "aspect-w-2 aspect-h-2"}`]: true,
    }));

    const classCardBody = computed(() => ({
      "flex flex-col space-y-1": true,
      [`${props.bodyFraction || "w-1/2"}`]: props.noWrap,
      [`${props.breakpoint}:${props.bodyFraction || "w-1/2"}`]:
        props.media === "left" || props.media === "right",
      [`${props.breakpoint}:pt-16`]:
        (props.media === "left" || props.media === "right") && props.isFloat,
      [`${props.breakpoint}:pl-16 ${props.breakpoint}:pb-8`]:
        props.media === "top" && props.isFloat,
      [`${props.breakpoint}:pl-16 ${props.breakpoint}:pt-8`]:
        props.media === "bottom" && props.isFloat,
      [`px-3 pb-3 ${props.breakpoint}:px-0 ${props.breakpoint}:pb-0`]:
        props.isFloat,
    }));
    const classCardBodyTitle = computed(() => ({
      "flex text-neutral-900": true,
    }));
    const classCardBodyMeta = computed(() => ({
      "flex space-x-2 items-center": true,
    }));

    return {
      classBg,
      classCard,
      classCardMedia,
      classCardMediaImage,
      classCardBody,
      classCardBodyTitle,
      classCardBodyMeta,
    };
  },
};
</script>
