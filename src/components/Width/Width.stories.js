import CsColumns from "@/components/Columns/Columns.vue";
import CsWidth from "@/components/Width/Width.vue";
import { colors } from "@/helpers/Data";

export default {
  title: "Design System/Layout/Width",
  component: { CsColumns, CsWidth },
};

const Template = (args) => ({
  components: { CsColumns, CsWidth },
  setup() {
    return { ...args };
  },
  template: `
    <cs-columns
      v-for="parent in (length - 1)"
      :space="space"
      :padding="padding"
    >
      <cs-width
        v-for="child in (length - parent + 1)"
        :background="items[child - 1].bg"
        :text="items[child - 1].text + ' text-center'"
        :fraction="'w-' + ((length - parent + 1) == child ? parent : '1') + '/'+ length"
      >
        w-{{(length - parent + 1) == child ? parent : '1'}}/{{ length }}
      </cs-width>
    </cs-columns>
    <cs-columns :space="space" :padding="padding">
      <cs-width
        :background="items[0].bg"
        :text="items[0].text + ' text-center'"
        fraction="w-full"
      >
        w-full
      </cs-width>
    </cs-columns>
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
