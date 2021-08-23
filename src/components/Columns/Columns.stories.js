import CsColumns from "@/components/Columns/Columns.vue";
import CsColumn from "@/components/Columns/Column.vue";
import { colors } from "@/helpers/Data";

export default {
  title: "Design System/Layout/Columns",
  component: { CsColumns, CsColumn },
};

const Template = (args) => ({
  components: { CsColumns, CsColumn },
  setup() {
    return { ...args };
  },
  template: `
    <cs-columns
      v-for="parent in items.length"
      :space="space"
      :margin="margin"
    >
      <cs-column
        v-for="child in parent"
        :background="items[child - 1].bg"
        :text="items[child - 1].text + ' text-center'"
      >
        {{ child }}
      </cs-column>
    </cs-columns>
  `,
});

export const CollapseGap = Template.bind({});
CollapseGap.args = {
  space: "space-x-0",
  margin: "py-1",
  items: colors,
};

export const SmallGap = Template.bind({});
SmallGap.args = {
  space: "space-x-2",
  margin: "py-1",
  items: colors,
};

export const MediumGap = Template.bind({});
MediumGap.args = {
  space: "space-x-4",
  margin: "py-1",
  items: colors,
};

export const LargeGap = Template.bind({});
LargeGap.args = {
  space: "space-x-6",
  margin: "py-1",
  items: colors,
};

export const XLargeGap = Template.bind({});
XLargeGap.args = {
  space: "space-x-8",
  margin: "py-1",
  items: colors,
};
