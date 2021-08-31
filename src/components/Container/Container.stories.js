import CsSection from "@/components/Section/Section.vue";
import CsContainer from "./Container.vue";

export default {
  title: "Design System/Layout/Container",
  component: { CsSection, CsContainer },
};

const Template = (args) => ({
  components: { CsSection, CsContainer },
  setup() {
    return { ...args };
  },
  template: `
  <cs-section
    backgroundColor="bg-neutral-50"
  >
    <cs-container
      :maxWidth="maxWidth"
      :backgroundColor="backgroundColor"
    >
      <br>
    </cs-section>
  </cs-container>
  `,
});

export const Small = Template.bind({});
Small.args = {
  maxWidth: "max-w-screen-sm",
  backgroundColor: "bg-red-light",
};

export const Medium = Template.bind({});
Medium.args = {
  maxWidth: "max-w-screen-md",
  backgroundColor: "bg-yellow-light",
};

export const Large = Template.bind({});
Large.args = {
  maxWidth: "max-w-screen-lg",
  backgroundColor: "bg-green-light",
};

export const XLarge = Template.bind({});
XLarge.args = {
  maxWidth: "max-w-screen-xl",
  backgroundColor: "bg-blue-light",
};
