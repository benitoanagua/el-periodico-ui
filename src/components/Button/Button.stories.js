import CsButton from "@/components/Button/Button.vue";
import { modifiers } from "@/helpers/Data";

export default {
  title: "Design System/Components/Button",
  component: { CsButton },
};

const Template = (args) => ({
  components: { CsButton },
  setup() {
    return { ...args };
  },
  template: `
    <div class="inline-flex flex-col space-y-1">
        <cs-button
            v-for="item in items"
            :theme="item.style"
            :size="size"
            :class="custom"
        >
            {{ item.style }}
        </cs-button>
    </div>
  `,
});

export const Small = Template.bind({});
Small.args = {
  size: "small",
  custom: "uppercase",
  items: modifiers,
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  custom: "uppercase",
  items: modifiers,
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  custom: "uppercase",
  items: modifiers,
};
