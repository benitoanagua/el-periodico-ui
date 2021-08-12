import CsContainer from "./Container.vue";

export default {
  title: "Layout/Container",
  component: CsContainer,
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
  },
};

const Template = (args) => ({
  components: { CsContainer },
  setup() {
    return { args };
  },
  template: '<cs-container v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Container 1",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Container 2",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Container 3",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Container 4",
};
