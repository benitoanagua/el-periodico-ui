import CsColumns from "@/components/Columns/Columns.vue";
import CsWidth from "@/components/Width/Width.vue";

export default {
  title: "Design System/Layout/Width",
  component: { CsColumns, CsWidth },
};

const Data = [
  { bg: "bg-red-light", text: "text-red-dark" },
  { bg: "bg-yellow-light", text: "text-yellow-dark" },
  { bg: "bg-green-light", text: "text-green-dark" },
  { bg: "bg-blue-light", text: "text-blue-dark" },
  { bg: "bg-indigo-light", text: "text-indigo-dark" },
  { bg: "bg-purple-light", text: "text-purple-dark" },
  { bg: "bg-pink-light", text: "text-pink-dark" },
];

const Template = (args) => ({
  components: { CsColumns, CsWidth },
  setup() {
    return { ...args };
  },
  template: `
    <cs-columns
      v-for="parent in (length - 1)"
      :space="space"
      :margin="margin"
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
    <cs-columns :space="space" :margin="margin">
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
  margin: "py-1",
  space: "space-x-0",
  length: 2,
  items: Data,
};

export const Thirds = Template.bind({});
Thirds.args = {
  margin: "py-1",
  space: "space-x-0",
  length: 3,
  items: Data,
};

export const Quarter = Template.bind({});
Quarter.args = {
  margin: "py-1",
  space: "space-x-0",
  length: 4,
  items: Data,
};

export const Fifth = Template.bind({});
Fifth.args = {
  margin: "py-1",
  space: "space-x-0",
  length: 5,
  items: Data,
};

export const Sixth = Template.bind({});
Sixth.args = {
  margin: "py-1",
  space: "space-x-0",
  length: 6,
  items: Data,
};

export const Seventh = Template.bind({});
Seventh.args = {
  margin: "py-1",
  space: "space-x-0",
  length: 7,
  items: Data,
};
