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

    <div :class="classNav">
      <div
        class="text-right"
        :class="breakpoint + ':hidden'"
        padding="p-0"
        @click="closeOffCanvas"
      >
        <cs-icon backgroundColor="bg-accent-500" padding="p-1" margin="m-1">
          <ph-x :size="24" />
        </cs-icon>
      </div>
      <cs-nav
        class="border-r-0 border-black border-opacity-5"
        :class="breakpoint + ':border-r ' + breakpoint + ':w-auto w-full'"
        :breakpoint="breakpoint"
        :divide="true"
      >
        <cs-nav-item
          v-for="(item, index) in model"
          :breakpoint="breakpoint"
          :title="item.title"
          :link="item.link"
          :active="item.active"
        />
      </cs-nav>
    </div>

    <div class="inline-flex items-center" :class="breakpoint + ':hidden'">
      <slot name="logoMobile" />
    </div>
    <div>
      <slot name="search" />
    </div>
  </div>
</template>

<script>
import { ref, computed, reactive } from "vue";

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
  setup(props) {
    props = reactive(props);
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
    const classNav = computed(() => ({
      [`bg-primary-50 bg-opacity-95 ${props.breakpoint}:bg-transparent`]: true,
      "w-full": true,
      [`h-full ${props.breakpoint}:h-auto`]: true,
      "-translate-x-full": !displayOffCanvas.value,
      "translate-x-0": displayOffCanvas.value,
      [`transform transition duration-500 ease-in-out ${props.breakpoint}:translate-x-0`]: true,
      "fixed top-0 left-0": true,
      [`${props.breakpoint}:contents`]: true,
    }));
    return {
      classNavBar,
      classNav,
      displayOffCanvas,
      openOffCanvas,
      closeOffCanvas,
    };
  },
};
</script>