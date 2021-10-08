export default {
  title: "Design System/Base/Typography",
  argTypes: {
    nameFamily: {
      name: "Name Font Family",
      type: { name: "string", required: false },
      control: {
        type: null,
      },
    },
  },
};

const Template = (args) => ({
  setup() {
    const dummyText =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    return { ...args, dummyText };
  },
  template: `
  <h3 class="">{{nameFamily}}</h3>
  <div class="inline-flex flex-col space-y-2 divide-y divide-neutral-100">
    <div
      class="inline-flex flex-col"  
      v-for="item in fontFamily"
    >
      <div class="font-sans text-sm text-neutral-500 pt-2">
        {{ item.variant }}
      </div>
      <div :class="item.font">
        {{ dummyText }}
      </div>
    </div>
  </div>
  `,
});

export const Serif = Template.bind({});
Serif.args = {
  nameFamily: "Caladea",
  fontFamily: [
    { variant: "Regular 400", font: "font-serif font-normal" },
    { variant: "Regular 400 italic", font: "font-serif font-normal italic" },
    { variant: "Bold 700", font: "font-serif font-bold" },
    { variant: "Bold 700 italic", font: "font-serif font-bold italic" },
  ],
};

export const Sans = Template.bind({});
Sans.args = {
  nameFamily: "Blinker",
  fontFamily: [
    { variant: "Extra-light 200", font: "font-sans font-extralight" },
    { variant: "Light 300", font: "font-sans font-light" },
    { variant: "Regular 400", font: "font-sans font-normal" },
    { variant: "Semi-bold 600", font: "font-sans font-semibold" },
    { variant: "Bold 700", font: "font-sans font-bold" },
  ],
};
