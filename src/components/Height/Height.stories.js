import CsColumns from "@/components/Columns/Columns.vue";
import CsColumn from "@/components/Columns/Column.vue";
import { colors, scale } from "@/helpers/Data";

export default {
  title: "Design System/Components/Height",
  component: { CsColumns, CsColumn },
};

const Template = (args) => ({
  components: { CsColumns, CsColumn },
  setup() {
    return { ...args };
  },
  template: `
    <cs-columns
      v-for="row in columns"
      :horizontal="horizontal"
      :vertical="vertical"
      :space="space"
      :margin="margin"
    >
      <cs-column
        v-for="(child, index) in row"
        width="w-24"
        :height="'h-' + child"
        :background="items[index].bg"
        :text="items[index].text"
      >
        <div class="h-full flex justify-center items-center">
          h-{{ child }}
        </div>
      </cs-column>
    </cs-columns>
  `,
});

export const ItemsStart = Template.bind({});
ItemsStart.args = {
  horizontal: "justify-center",
  vertical: "items-start",
  margin: "py-4",
  space: "space-x-4",
  columns: scale,
  items: colors,
};

export const ItemsCenter = Template.bind({});
ItemsCenter.args = {
  horizontal: "justify-center",
  vertical: "items-center",
  margin: "py-4",
  space: "space-x-4",
  columns: scale,
  items: colors,
};

export const ItemsEnd = Template.bind({});
ItemsEnd.args = {
  horizontal: "justify-center",
  vertical: "items-end",
  margin: "py-4",
  space: "space-x-4",
  columns: scale,
  items: colors,
};
