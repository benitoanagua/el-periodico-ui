import CsSection from "@/components/Section/Section.vue";
import CsContainer from "@/components/Container/Container.vue";
import CsBlockHeader from "@/components/BlockHeader/BlockHeader.vue";

export default {
  title: "Design System/Components/BlockHeader",
  component: {
    CsSection,
    CsContainer,
    CsBlockHeader,
  },
};

const Template = (args) => ({
  components: {
    CsSection,
    CsContainer,
    CsBlockHeader,
  },
  setup() {
    return { ...args };
  },
  template: `
  <cs-section backgroundColor="bg-white">
    <cs-container
      breakpoint="lg"
      maxWidth="max-w-screen-lg"
    >
      <cs-block-header
        :breakpoint="breakpoint"
        :title="title"
        :textColor="textColor"
        :lineColor="lineColor"
        :lineFractionColor="lineFractionColor"
        :lineFraction="lineFraction"
        />
    </cs-container>
  </cs-section>
  `,
});

export const Default = Template.bind({});
Default.args = {
  breakpoint: "md",
  title: "Sociedad",
  textColor: "text-accent-900",
  lineColor: "bg-accent-500",
  lineFractionColor: "bg-accent-900",
  lineFraction: "w-1/3",
};
