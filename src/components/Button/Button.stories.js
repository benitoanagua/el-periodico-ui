import CsColumns from "@/components/Columns/Columns.vue";
import CsButton from "@/components/Button/Button.vue";
import { modifiers } from "@/helpers/Data";

export default {
  title: "Design System/Components/Button",
  component: { CsColumns, CsButton },
};

const Template = (args) => ({
  components: { CsColumns, CsButton },
  setup() {
    return { ...args };
  },
  template: `
    <cs-columns space="space-x-1">
        <cs-button
            v-for="item in items"
            :theme="item.style"
            :size="size"
            :class="custom"
        >
            {{ item.style }}
        </cs-button>
    </cs-columns>
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
