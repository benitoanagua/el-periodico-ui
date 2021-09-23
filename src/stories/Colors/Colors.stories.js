import CsPalette from "@/components/Palette/Palette.vue";

export default {
  title: "Design System/Base/Colors",
  component: CsPalette,
};

const Template = (args) => ({
  components: { CsPalette },
  setup() {
    return { ...args };
  },
  template: `
  <h3 class="">{{nameColor}}</h3>
  <cs-palette :name="nameColor" :items="colors"/>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  nameColor: "Primary",
  colors: [
    { name: "50", value: "#FFFEF0" },
    { name: "100", value: "#FCFBED" },
    { name: "200", value: "#F0EEE1" },
    { name: "300", value: "#E3E0CF" },
    { name: "400", value: "#D6CCA1" },
    { name: "500", value: "#C9B777" },
    { name: "600", value: "#A39058" },
    { name: "700", value: "#7D6B3D" },
    { name: "800", value: "#574726" },
    { name: "900", value: "#302715" },
  ],
};
export const Secondary = Template.bind({});
Secondary.args = {
  nameColor: "Secondary",
  colors: [
    { name: "50", value: "#FFFBE6" },
    { name: "100", value: "#FFF1B8" },
    { name: "200", value: "#FFE58F" },
    { name: "300", value: "#FFD666" },
    { name: "400", value: "#FFC53D" },
    { name: "500", value: "#FAAD14" },
    { name: "600", value: "#D48806" },
    { name: "700", value: "#AD6800" },
    { name: "800", value: "#874D00" },
    { name: "900", value: "#613400" },
  ],
};
export const Accent = Template.bind({});
Accent.args = {
  nameColor: "Accent",
  colors: [
    { name: "50", value: "#FFF2E8" },
    { name: "100", value: "#FFD8BF" },
    { name: "200", value: "#FFBB96" },
    { name: "300", value: "#FF9C6E" },
    { name: "400", value: "#FF7A45" },
    { name: "500", value: "#FA541C" },
    { name: "600", value: "#D4380D" },
    { name: "700", value: "#AD2102" },
    { name: "800", value: "#871400" },
    { name: "900", value: "#610B00" },
  ],
};
export const Neutral = Template.bind({});
Neutral.args = {
  nameColor: "Neutral",
  colors: [
    { name: "50", value: "#FAFAF9" },
    { name: "100", value: "#F5F5F4" },
    { name: "200", value: "#E7E5E4" },
    { name: "300", value: "#D6D3D1" },
    { name: "400", value: "#A8A29E" },
    { name: "500", value: "#78716C" },
    { name: "600", value: "#57534E" },
    { name: "700", value: "#44403C" },
    { name: "800", value: "#292524" },
    { name: "900", value: "#1C1917" },
  ],
};
