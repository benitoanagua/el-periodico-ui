import CsColumns from "@/components/Columns/Columns.vue";
import CsButton from "@/components/Button/Button.vue";
import { modifiers } from "@/helpers/Data";

export default {
  title: "Design System/Layout/Button",
  component: { CsColumns, CsButton },
};

const Template = (args) => ({
  components: { CsColumns, CsButton },
  setup() {
    return { ...args };
  },
  template: `
    <cs-columns :space="space">
        <cs-button
            v-for="item in items"
            :style="item.style"
            :text="text"
            :size="size"
        >
            {{ item.style }}
        </cs-button>
    </cs-columns>
  `,
});

export const Small = Template.bind({});
Small.args = {
  space: "space-x-1",
  text: "text-base capitalize",
  size: "small",
  items: modifiers,
};

export const Medium = Template.bind({});
Medium.args = {
  space: "space-x-1",
  text: "text-base capitalize",
  size: "medium",
  items: modifiers,
};

export const Large = Template.bind({});
Large.args = {
  space: "space-x-1",
  text: "text-base capitalize",
  size: "large",
  items: modifiers,
};
