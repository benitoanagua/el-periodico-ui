import CsColumns from "@/components/Columns/Columns.vue";
import CsColumn from "@/components/Columns/Column.vue";

export default {
  title: "Design System/Layout/Columns",
  component: { CsColumns, CsColumn },
};

const Data = [
  { columns: [{ bg: "bg-red-light", text: "text-red-dark" }] },
  {
    columns: [
      { bg: "bg-red-light", text: "text-red-dark" },
      { bg: "bg-yellow-light", text: "text-yellow-dark" },
    ],
  },
  {
    columns: [
      { bg: "bg-red-light", text: "text-red-dark" },
      { bg: "bg-yellow-light", text: "text-yellow-dark" },
      { bg: "bg-green-light", text: "text-green-dark" },
    ],
  },
  {
    columns: [
      { bg: "bg-red-light", text: "text-red-dark" },
      { bg: "bg-yellow-light", text: "text-yellow-dark" },
      { bg: "bg-green-light", text: "text-green-dark" },
      { bg: "bg-blue-light", text: "text-blue-dark" },
    ],
  },
  {
    columns: [
      { bg: "bg-red-light", text: "text-red-dark" },
      { bg: "bg-yellow-light", text: "text-yellow-dark" },
      { bg: "bg-green-light", text: "text-green-dark" },
      { bg: "bg-blue-light", text: "text-blue-dark" },
      { bg: "bg-indigo-light", text: "text-indigo-dark" },
    ],
  },
  {
    columns: [
      { bg: "bg-red-light", text: "text-red-dark" },
      { bg: "bg-yellow-light", text: "text-yellow-dark" },
      { bg: "bg-green-light", text: "text-green-dark" },
      { bg: "bg-blue-light", text: "text-blue-dark" },
      { bg: "bg-indigo-light", text: "text-indigo-dark" },
      { bg: "bg-purple-light", text: "text-purple-dark" },
    ],
  },
  {
    columns: [
      { bg: "bg-red-light", text: "text-red-dark" },
      { bg: "bg-yellow-light", text: "text-yellow-dark" },
      { bg: "bg-green-light", text: "text-green-dark" },
      { bg: "bg-blue-light", text: "text-blue-dark" },
      { bg: "bg-indigo-light", text: "text-indigo-dark" },
      { bg: "bg-purple-light", text: "text-purple-dark" },
      { bg: "bg-pink-light", text: "text-pink-dark" },
    ],
  },
];

const Template = (args) => ({
  components: { CsColumns, CsColumn },
  setup() {
    return { ...args };
  },
  template: `
    <cs-columns
      v-for="item in items"
      :space="space"
      :margin="margin"
    >
      <cs-column
        v-for="(item, index) in item.columns"
        :background="item.bg"
        :text="item.text + ' text-center'"
      >
        {{ index + 1 }}
      </cs-column>
    </cs-columns>
  `,
});

export const CollapseGap = Template.bind({});
CollapseGap.args = {
  margin: "py-1",
  items: Data,
};

export const SmallGap = Template.bind({});
SmallGap.args = {
  space: "space-x-2",
  margin: "py-1",
  items: Data,
};

export const MediumGap = Template.bind({});
MediumGap.args = {
  space: "space-x-4",
  margin: "py-1",
  items: Data,
};

export const LargeGap = Template.bind({});
LargeGap.args = {
  space: "space-x-6",
  margin: "py-1",
  items: Data,
};

export const XLargeGap = Template.bind({});
XLargeGap.args = {
  space: "space-x-8",
  margin: "py-1",
  items: Data,
};
