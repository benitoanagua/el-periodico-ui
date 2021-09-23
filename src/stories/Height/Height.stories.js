import { colors, scale } from "@/helpers/Data";

export default {
  title: "Design System/Layout/Height",
};

const Template = (args) => ({
  setup() {
    return { ...args };
  },
  template: `
    <div
      v-for="row in columns"
      :class="'flex justify-center py-4 space-x-4 ' + vertical"
    >
      <div
        v-for="(child, index) in row"
        class="flex-1 w-24"
        :class="'h-' + child + ' ' + items[index].bg + ' ' + items[index].text"
      >
        <div class="h-full flex justify-center items-center">
          h-{{ child }}
        </div>
      </div>
    </div>
  `,
});

export const ItemsStart = Template.bind({});
ItemsStart.args = {
  vertical: "items-start",
  columns: scale,
  items: colors,
};

export const ItemsCenter = Template.bind({});
ItemsCenter.args = {
  vertical: "items-center",
  columns: scale,
  items: colors,
};

export const ItemsEnd = Template.bind({});
ItemsEnd.args = {
  vertical: "items-end",
  columns: scale,
  items: colors,
};
