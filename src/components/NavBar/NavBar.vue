<template>
  <div class="flex justify-between">
    <div
      :class="
        'inline-flex items-center ' +
        breakpoint +
        ':hidden ' +
        breakpoint +
        ':px-0 px-3 py-3'
      "
      @click="openOffCanvas"
    >
      <ph-list :size="24" />
    </div>

    <div
      :class="
        'hidden ' +
        breakpoint +
        ':inline-flex items-center ' +
        breakpoint +
        ':px-0 px-3 py-3'
      "
    >
      <ph-list :size="24" />
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

    <div
      :class="
        'inline-flex items-center ' +
        breakpoint +
        ':hidden ' +
        breakpoint +
        ':px-0 px-3 py-3'
      "
    >
      <cs-logo height="h-6" />
    </div>

    <div :class="'inline-flex items-center ' + breakpoint + ':px-0 px-3 py-3'">
      <ph-magnifying-glass :size="24" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import CsNav from "@/components/Nav/Nav.vue";
import CsNavItem from "@/components/Nav/NavItem.vue";
import CsLogo from "@/components/Logo/Logo.vue";
import CsIcon from "@/components/Icon/Icon.vue";
import { PhList, PhMagnifyingGlass, PhX } from "phosphor-vue";

export default {
  name: "CsNavBar ",
  components: {
    CsNav,
    CsNavItem,
    CsLogo,
    CsIcon,
    PhList,
    PhMagnifyingGlass,
    PhX,
  },
  props: {
    backgroundColor: {
      type: String,
      default: null,
    },
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
    return { displayOffCanvas, openOffCanvas, closeOffCanvas };
  },
};
</script>