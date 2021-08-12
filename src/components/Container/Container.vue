<template>
  <div :class="classes">{{ label }}</div>
</template>

<script>

import { reactive, computed } from "vue";
// console.log($faker.lorem.sentence());

export default {
  name: "CsContainer",

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        "storybook-button": true,
        "storybook-button--primary": props.primary,
        "storybook-button--secondary": !props.primary,
        [`storybook-button--${props.size || "medium"}`]: true,
      })),
    };
  },
};
</script>
