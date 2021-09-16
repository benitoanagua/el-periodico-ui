import CsSection from "@/components/Section/Section.vue";
import CsContainer from "@/components/Container/Container.vue";
import CsSearch from "@/components/Search/Search.vue";

export default {
  title: "Design System/Components/Search",
  component: {
    CsSection,
    CsContainer,
    CsSearch,
  },
};

const Template = (args) => ({
  components: {
    CsSection,
    CsContainer,
    CsSearch,
  },
  setup() {
    return { ...args };
  },
  template: `
    <cs-section backgroundColor="bg-white">
      <cs-container maxWidth="max-w-screen-lg">
        <cs-search :breakpoint="breakpoint"/>
      </cs-container>
    </cs-section>
  `,
});

export const Default = Template.bind({});
Default.args = {
  backgroundColor: "bg-neutral-100",
  breakpoint: "lg",
};
