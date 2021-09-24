import { colors } from "@/helpers/Data";

export default {
  title: "Design System/Layout/Columns",
};

const Template = (args) => ({
  setup() {
    return { ...args };
  },
  template: `
    <div
      v-for="parent in items.length"
      :class="'flex ' + space + ' ' + margin"
    >
      <div
        v-for="child in parent"
        :class="'flex-1 ' + items[child - 1].bg + ' text-center ' + items[child - 1].text"
      >
        {{ child }}
      </div>
    </div>
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
