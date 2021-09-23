import CsDescriptionList from "@/components/DescriptionList/DescriptionList.vue";

export default {
  title: "Design System/Base/Typography",
  component: CsDescriptionList,
  argTypes: {
    nameFamily: {
      name: "Name Font Family",
      type: { name: "string", required: false },
      control: {
        type: null,
      },
    },
    dummyText: {
      name: "Lorem Ipsum",
      type: { name: "string", required: false },
      control: {
        type: "text",
      },
    },
  },
};

const Template = (args) => ({
  components: { CsDescriptionList },
  setup() {
    return { ...args };
  },
  template: `
  <h3 class="">{{nameFamily}}</h3>
  <cs-description-list  :loremIpsum="dummyText" :items="fontFamily" :divider="true"/>
  `,
});

export const Serif = Template.bind({});
Serif.args = {
  nameFamily: "Caladea",
  dummyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
  dummyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  fontFamily: [
    { variant: "Extra-light 200", font: "font-sans font-extralight" },
    { variant: "Light 300", font: "font-sans font-light" },
    { variant: "Regular 400", font: "font-sans font-normal" },
    { variant: "Semi-bold 600", font: "font-sans font-semibold" },
    { variant: "Bold 700", font: "font-sans font-bold" },
  ],
};
