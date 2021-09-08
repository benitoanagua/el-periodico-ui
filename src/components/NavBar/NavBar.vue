<template>
  <cs-icon-nav
    :inline="true"
    :fullWidth="true"
    :breakpoint="breakpoint"
    padding="px-3 py-3"
  >
    <cs-icon @click="openOffCanvas">
      <ph-list :size="24" />
    </cs-icon>
    <cs-icon link="#">
      <cs-logo height="h-6" />
    </cs-icon>
    <cs-icon link="#">
      <ph-magnifying-glass :size="24" />
    </cs-icon>
  </cs-icon-nav>

  <cs-nav
    :breakpoint="breakpoint"
    offCanvasWidth="w-60"
    :visible="displayOffCanvas"
    :divide="true"
  >
    <cs-nav-item
      :class="'text-right ' + breakpoint + ':hidden'"
      @click="closeOffCanvas"
      ><ph-x-square :size="24" class="inline-block"
    /></cs-nav-item>
    <cs-nav-item
      v-for="item in model"
      :breakpoint="breakpoint"
      :title="item.title"
      :link="item.link"
      :active="item.active"
    />
  </cs-nav>
</template>

<script>
import { ref } from "vue";

import CsNav from "@/components/Nav/Nav.vue";
import CsNavItem from "@/components/Nav/NavItem.vue";
import CsIconNav from "@/components/IconNav/IconNav.vue";
import CsIcon from "@/components/IconNav/Icon.vue";
import CsLogo from "@/components/Logo/Logo.vue";
import { PhList, PhMagnifyingGlass, PhXSquare } from "phosphor-vue";

export default {
  name: "CsNavBar ",
  components: {
    CsNav,
    CsNavItem,
    CsIconNav,
    CsIcon,
    CsLogo,
    PhList,
    PhMagnifyingGlass,
    PhXSquare,
  },
  props: {
    backgroundColor: {
      type: String,
      default: null,
    },
    breakpoint: {
      type: String,
      default: null,
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
    return { displayOffCanvas, openOffCanvas, closeOffCanvas };
  },
};
</script>