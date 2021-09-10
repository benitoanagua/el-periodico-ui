import CsSection from "@/components/Section/Section.vue";
import CsContainer from "@/components/Container/Container.vue";
import CsNav from "@/components/Nav/Nav.vue";
import CsNavItem from "@/components/Nav/NavItem.vue";
import { menu } from "@/helpers/Data";

export default {
  title: "Design System/Components/Nav",
  component: {
    CsSection,
    CsContainer,
    CsNav,
    CsNavItem,
  },
};

const Template = (args) => ({
  components: {
    CsSection,
    CsContainer,
    CsNav,
    CsNavItem,
  },
  setup() {
    return { ...args };
  },
  template: `
    <cs-section :backgroundColor="backgroundColor">
      <cs-container maxWidth="max-w-screen-lg">
        <cs-nav
          :breakpoint="breakpoint"
          :offCanvasWidth="offCanvasWidth"
          :divide="divide"
          >
          <cs-nav-item
            v-for="item in items"
            :breakpoint="breakpoint"
            :title="item.title"
            :link="item.link"
            :active="item.active"
          >
          </cs-nav-item>
        </cs-nav>
      </cs-container>
    </cs-section>
  `,
});

export const Default = Template.bind({});
Default.args = {
  backgroundColor: "bg-white",
  breakpoint: "lg",
  offCanvasWidth: "w-60",
  divide: true,
  items: menu,
};
