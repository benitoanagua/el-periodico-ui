import CsContainer from "./Container.vue";

export default {
  title: "Layout/Container",
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
  backgroundColor: "bg-gray-100",
};

export const Secondary = Template.bind({});
Secondary.args = {
  backgroundColor: "bg-red-100",
};

export const Accent = Template.bind({});
Accent.args = {
  backgroundColor: "bg-blue-100",
};
