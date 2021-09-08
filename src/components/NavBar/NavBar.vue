<template>
  <cs-section :backgroundColor="backgroundColor">
    <cs-container maxWidth="max-w-screen-lg">
      <cs-icon-nav
        :inline="true"
        :fullWidth="true"
        :breakpoint="breakpoint"
        padding="px-3 py-3"
      >
        <cs-icon link="#">
          <ph-list :size="24" />
        </cs-icon>
        <cs-icon link="#">
          <cs-logo height="h-6" />
        </cs-icon>
        <cs-icon link="#">
          <ph-magnifying-glass :size="24" />
        </cs-icon>
      </cs-icon-nav>

      <cs-nav :breakpoint="breakpoint" offCanvasWidth="w-60" :divide="true">
        <cs-nav-item
          v-for="item in model"
          :breakpoint="breakpoint"
          padding="px-3 py-3"
          margin="my-0"
          :title="item.title"
          :link="item.link"
          :active="item.active"
        >
        </cs-nav-item>
      </cs-nav>
    </cs-container>
  </cs-section>
</template>
<script>
// import { reactive, computed } from "vue";
import CsSection from "@/components/Section/Section.vue";
import CsContainer from "@/components/Container/Container.vue";
import CsNav from "@/components/Nav/Nav.vue";
import CsNavItem from "@/components/Nav/NavItem.vue";
import CsIconNav from "@/components/IconNav/IconNav.vue";
import CsIcon from "@/components/IconNav/Icon.vue";
import CsLogo from "@/components/Logo/Logo.vue";
import { PhList, PhMagnifyingGlass } from "phosphor-vue";

export default {
  name: "CsNavBar ",
  components: {
    CsSection,
    CsContainer,
    CsNav,
    CsNavItem,
    CsIconNav,
    CsIcon,
    CsLogo,
    PhList,
    PhMagnifyingGlass,
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
  setup() {},
};
</script>