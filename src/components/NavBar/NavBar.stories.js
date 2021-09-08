import CsNavBar from "@/components/NavBar/NavBar.vue";
import { menu } from "@/helpers/Data";

export default {
  title: "Design System/Layout/NavBar",
  component: {
    CsNavBar,
  },
};

const Template = (args) => ({
  components: {
    CsNavBar,
  },
  setup() {
    return { ...args };
  },
  template: `
    <cs-nav-bar
        :backgroundColor="backgroundColor"
        :breakpoint="breakpoint"
        :model="items"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
  breakpoint: "lg",
  backgroundColor: "bg-secondary-400",
  items: menu,
};
