import CsSection from "@/components/Section/Section.vue";
import CsContainer from "@/components/Container/Container.vue";
import CsNav from "@/components/Nav/Nav.vue";
import CsNavItem from "@/components/Nav/NavItem.vue";
import { menu } from "@/helpers/Data";

export default {
  title: "Design System/Layout/Nav",
  component: { CsSection, CsContainer, CsNav, CsNavItem },
};

const Template = (args) => ({
  components: { CsSection, CsContainer, CsNav, CsNavItem },
  setup() {
    return { ...args };
  },
  template: `
  <cs-section
    :backgroundColor="backgroundColor"
  >
    <cs-container :maxWidth="maxWidth">
      <cs-nav
        :inline="inline"
        :menuWidth="menuWidth"
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
                isChild="true"
              />
            </cs-nav>
          </template>
        </cs-nav-item>
      </cs-nav>
    </cs-section>
  </cs-container>
  `,
});

export const Horizontal = Template.bind({});
Horizontal.args = {
  maxWidth: "max-w-screen-lg",
  menuWidth: "w-60",
  submenuWidth: "w-40",
  backgroundColor: "bg-secondary-400",
  paddingItem: "px-3 py-3",
  marginItem: "my-0",
  inline: true,
  items: menu,
};

export const Vertical = Template.bind({});
Vertical.args = {
  maxWidth: "max-w-screen-lg",
  menuWidth: "w-60",
  submenuWidth: "w-40",
  backgroundColor: "bg-white",
  paddingItem: "px-3 py-3",
  marginItem: "my-0",
  inline: false,
  items: menu,
};
