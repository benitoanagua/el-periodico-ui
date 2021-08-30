import CsNav from "@/components/Nav/Nav.vue";
import CsNavItem from "@/components/Nav/NavItem.vue";
// import CsNavSub from "@/components/Nav/NavSub.vue";
import { menu } from "@/helpers/Data";

export default {
  title: "Design System/Layout/Nav",
  component: { CsNav, CsNavItem },
};

const Template = (args) => ({
  components: { CsNav, CsNavItem },
  setup() {
    return { ...args };
  },
  template: `
    <cs-nav :inline="inline">
        <cs-nav-item
          v-for="item in items"
          :title="item.title"
          :link="item.link"
          :active="item.active"
          :submenu="item.submenu.length > 0"
        >
          <template 
            v-if="item.submenu.length > 0"
            >
            <cs-nav
              :submenu="true"
            >
              <cs-nav-item
                v-for="child in item.submenu"
                :title="child.title"
                :link="child.link"
                :active="child.active"
              />
            </cs-nav>
          </template>
        </cs-nav-item>
    </cs-nav>
  `,
});

export const Default = Template.bind({});
Default.args = {
  // spaceX: "space-x-2",
  // spaceY: "space-y-2",
  inline: true,
  items: menu,
};
