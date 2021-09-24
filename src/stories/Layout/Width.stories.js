import { colors } from "@/helpers/Data";

export default {
  title: "Design System/Layout/Width",
};

const Template = (args) => ({
  setup() {
    return { ...args };
  },
  template: `
    <div
      v-for="parent in (length - 1)"
      :class="'flex ' + space + ' ' + padding"
    >
      <div
        v-for="child in (length - parent + 1)"
        :class="items[child - 1].bg + ' w-' + ((length - parent + 1) == child ? parent : '1') + '/'+ length"
      >
        <span :class="'flow-root '+ items[child - 1].text + ' text-center'">
          w-{{(length - parent + 1) == child ? parent : '1'}}/{{ length }}
        </span>
      </div>
    </div>
    <div :class="space + ' ' + padding">
      <div
        :class="items[0].bg + ' w-full'"
      >
      <span :class="'flow-root '+ items[0].text + ' text-center'">
        w-full
      </span>
      </div>
    </div>
  `,
});

export const Half = Template.bind({});
Half.args = {
  padding: "py-1",
  space: "space-x-0",
  length: 2,
  items: colors,
};

export const Thirds = Template.bind({});
Thirds.args = {
  padding: "py-1",
  space: "space-x-0",
  length: 3,
  items: colors,
};

export const Quarter = Template.bind({});
Quarter.args = {
  padding: "py-1",
  space: "space-x-0",
  length: 4,
  items: colors,
};

export const Fifth = Template.bind({});
Fifth.args = {
  padding: "py-1",
  space: "space-x-0",
  length: 5,
  items: colors,
};

export const Sixth = Template.bind({});
Sixth.args = {
  padding: "py-1",
  space: "space-x-0",
  length: 6,
  items: colors,
};

export const Seventh = Template.bind({});
Seventh.args = {
  padding: "py-1",
  space: "space-x-0",
  length: 7,
  items: colors,
};
