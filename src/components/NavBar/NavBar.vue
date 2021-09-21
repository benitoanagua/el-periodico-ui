<template>
  <div :class="classNavBar">
    <div
      class="inline-flex items-center"
      :class="breakpoint + ':hidden'"
      @click="openOffCanvas"
    >
      <slot name="menuMobile" />
    </div>

    <div class="hidden items-center" :class="breakpoint + ':inline-flex'">
      <slot name="menuDesktop" />
    </div>

    <cs-nav
      class="border-r-0 border-black border-opacity-5"
      :class="breakpoint + ':border-r'"
      :breakpoint="breakpoint"
      offCanvasWidth="w-60"
      :visible="displayOffCanvas"
      :divide="true"
    >
      <cs-nav-item
        class="text-right"
        :class="breakpoint + ':hidden'"
        padding="p-0"
        @click="closeOffCanvas"
      >
        <cs-icon backgroundColor="bg-accent-500" padding="p-1" margin="m-1">
          <ph-x :size="24" />
        </cs-icon>
      </cs-nav-item>

      <cs-nav-item
        v-for="(item, index) in model"
        :breakpoint="breakpoint"
        :title="item.title"
        :link="item.link"
        :active="item.active"
      />
    </cs-nav>

    <div class="inline-flex items-center" :class="breakpoint + ':hidden'">
      <slot name="logoMobile" />
    </div>
    <div>
      <slot name="search" />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

import CsNav from "@/components/Nav/Nav.vue";
import CsNavItem from "@/components/Nav/NavItem.vue";
import CsIcon from "@/components/Icon/Icon.vue";
import { PhX } from "phosphor-vue";

export default {
  name: "CsNavBar ",
  components: {
    CsNav,
    CsNavItem,
    CsIcon,
    PhX,
  },
  props: {
    breakpoint: {
      type: String,
      default: "md",
    },
    model: {
      type: Object,
      default: null,
    },
  },
  setup() {
    const displayOffCanvas = ref(false);
    const openOffCanvas = () => {
      displayOffCanvas.value = true;
    };
    const closeOffCanvas = () => {
      displayOffCanvas.value = false;
    };
    const classNavBar = computed(() => ({
      "flex justify-between": true,
    }));
    return {
      classNavBar,
      displayOffCanvas,
      openOffCanvas,
      closeOffCanvas,
    };
  },
};
</script>