import CsSection from "./Section.vue";

export default {
  title: "Design System/Layout/Section",
  component: { CsSection },
};

const Template = (args) => ({
  components: { CsSection },
  setup() {
    return { args };
  },
  template: '<cs-section v-bind="args"><br></cs-section>',
});

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: "bg-primary-500",
};

export const Secondary = Template.bind({});
Secondary.args = {
  backgroundColor: "bg-secondary-500",
};

export const Accent = Template.bind({});
Accent.args = {
  backgroundColor: "bg-accent-500",
};
