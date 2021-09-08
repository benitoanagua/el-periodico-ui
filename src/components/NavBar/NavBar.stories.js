import CsSection from "@/components/Section/Section.vue";
import CsContainer from "@/components/Container/Container.vue";
import CsNavBar from "@/components/NavBar/NavBar.vue";
import { menu } from "@/helpers/Data";

export default {
  title: "Design System/Layout/NavBar",
  component: {
    CsSection,
    CsContainer,
    CsNavBar,
  },
};

const Template = (args) => ({
  components: {
    CsSection,
    CsContainer,
    CsNavBar,
  },
  setup() {
    return { ...args };
  },
  template: `
    <cs-section :backgroundColor="backgroundColor">
      <cs-container maxWidth="max-w-screen-lg">
        <cs-nav-bar
            :backgroundColor="backgroundColor"
            :breakpoint="breakpoint"
            :model="items"
        />
      </cs-container>
    </cs-section>
  `,
});

export const Default = Template.bind({});
Default.args = {
  breakpoint: "lg",
  backgroundColor: "bg-secondary-400",
  items: menu,
};
