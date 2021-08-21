import CsContainer from "./Container.vue";

export default {
  title: "Design System/Layout/Container",
  component: CsContainer,
};

const Template = (args) => ({
  components: { CsContainer },
  setup() {
    return { args };
  },
  template: '<cs-container v-bind="args"><br></cs-container>',
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
