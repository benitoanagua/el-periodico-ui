<template>
  <cs-icon-nav
    :class="breakpoint + ':hidden'"
    backgroundColor="transparent"
    :inline="true"
    :fullWidth="true"
    padding="px-3 py-3"
  >
    <cs-icon @click="openOffCanvas">
      <ph-list :size="24" />
    </cs-icon>
    <cs-icon link="#">
      <cs-logo height="h-6" />
    </cs-icon>
    <cs-icon>
      <ph-magnifying-glass :size="24" />
    </cs-icon>
  </cs-icon-nav>

  <div class="flex justify-between">
    <div :class="'hidden ' + breakpoint + ':inline-flex items-center'">
      <cs-logo height="h-6" />
    </div>
    <cs-nav
      :class="
        'border-r-0 border-black border-opacity-5 ' + breakpoint + ':border-r'
      "
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
        v-for="(item, index) in model"
        :breakpoint="breakpoint"
        :title="item.title"
        :link="item.link"
        :active="item.active"
      />
    </cs-nav>
    <div :class="'hidden ' + breakpoint + ':inline-flex items-center'">
      <ph-magnifying-glass :size="24" />
    </div>
  </div>
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