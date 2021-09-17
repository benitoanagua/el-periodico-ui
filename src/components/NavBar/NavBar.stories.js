import CsSection from "@/components/Section/Section.vue";
import CsContainer from "@/components/Container/Container.vue";
import CsNavBar from "@/components/NavBar/NavBar.vue";
import { menu } from "@/helpers/Data";

export default {
  title: "Design System/Components/NavBar",
  component: {
    CsSection,
    CsContainer,
    CsNavBar,
  },
};

const Template = (args) => ({
  components: {
    CsSection,
    CsContainer,
    CsNavBar,
  },
  setup() {
    return { ...args };
  },
  template: `
    <cs-section margin="my-4">
      <cs-container
        maxWidth="max-w-screen-lg"
        :breakpoint="breakpoint"
      >
        <div class="w-full h-40 bg-neutral-200" />
      </cs-container>
    </cs-section>

    <cs-section
      class="sticky top-0"
      :backgroundColor="backgroundColor"
    >
      <cs-container
        maxWidth="max-w-screen-lg"
        :breakpoint="breakpoint"
      >
        <cs-nav-bar
          :breakpoint="breakpoint"
          :model="items"
        />
      </cs-container>
    </cs-section>

    <cs-section margin="my-4">
    <cs-container
      maxWidth="max-w-screen-lg"
      :breakpoint="breakpoint"  
    >
      <div class="space-y-2">
          <div
            v-for="n in 50"   
            class="w-full h-4 bg-neutral-200"
          />
      </div>
      </cs-container>
    </cs-section>
  `,
});

export const Default = Template.bind({});
Default.args = {
  breakpoint: "lg",
  backgroundColor: "bg-secondary-400",
  items: menu,
};
