<template>
  <dl :class="listClass">
    <template v-for="item in items">
      <cs-description-item
        :title="item.variant"
        :description="item.font"
        :placeholder="loremIpsum"
        :divider="true"
      />
    </template>
  </dl>
</template>

<script>
import { reactive, computed } from "vue";
import CsDescriptionItem from "./DescriptionItem.vue";

export default {
  name: "CsDescriptionListClass",
  components: { CsDescriptionItem },
  props: {
    items: {
      type: Array,
      required: true,
    },
    loremIpsum: {
      type: String,
      default: null,
    },
    divider: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      listClass: computed(() => ({
        "my-4": true,
      })),
    };
  },
};
</script>