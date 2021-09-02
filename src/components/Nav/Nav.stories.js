import CsSection from "@/components/Section/Section.vue";
import CsContainer from "@/components/Container/Container.vue";
import CsNav from "@/components/Nav/Nav.vue";
import CsNavItem from "@/components/Nav/NavItem.vue";
import CsIconNav from "@/components/IconNav/IconNav.vue";
import CsIcon from "@/components/IconNav/Icon.vue";
import CsLogo from "@/components/Logo/Logo.vue";
import { PhList, PhMagnifyingGlass } from "phosphor-vue";
import { menu } from "@/helpers/Data";

export default {
  title: "Design System/Layout/Nav",
  component: {
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
};

const Template = (args) => ({
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
  setup() {
    return { ...args };
  },
  template: `
  <cs-section
    :backgroundColor="backgroundColor"
  >
    <cs-container :maxWidth="maxWidth">

      <cs-icon-nav
        :inline="inline"
        :fullWidth="fullWidth"
        :breakpoint="breakpoint"
        :padding="paddingItem"
        >
        <cs-icon link="#">
          <ph-list :size="24"/>
        </cs-icon>
        <cs-icon link="#">
          <cs-logo height="h-6"/>
        </cs-icon>
        <cs-icon link="#">
          <ph-magnifying-glass :size="24"/>
        </cs-icon>
      </cs-icon-nav>

      <cs-nav
        :inline="inline"
        :menuWidth="menuWidth"
        :breakpoint="breakpoint"
      >
        <cs-nav-item
          v-for="item in items"
          :padding="paddingItem"
          :margin="marginItem"
          :title="item.title"
          :link="item.link"
          :active="item.active"
          :isParent="item.submenu.length > 0"
        >
          <template 
            v-if="item.submenu.length > 0"
            >
            <cs-nav
              :submenu="true"
              :submenuWidth="submenuWidth"
            >
              <cs-nav-item
                v-for="child in item.submenu"
                :title="child.title"
                :link="child.link"
                :active="child.active"
                :isChild="true"
              />
            </cs-nav>
          </template>
        </cs-nav-item>
      </cs-nav>
    </cs-container>
  </cs-section>
  `,
});

export const Horizontal = Template.bind({});
Horizontal.args = {
  // Mobile
  fullWidth: true,
  breakpoint: "lg",
  //Desktop
  maxWidth: "max-w-screen-lg",
  menuWidth: "w-60",
  submenuWidth: "w-40",
  backgroundColor: "bg-secondary-400",
  paddingItem: "px-3 py-3",
  marginItem: "my-0",
  inline: true,
  items: menu,
};
