import CsSection from "@/components/Section/Section.vue";
import CsContainer from "@/components/Container/Container.vue";
import CsCtaBar from "@/components/CtaBar/CtaBar.vue";
import CsLogo from "@/components/Logo/Logo.vue";
import CsButton from "@/components/Button/Button.vue";

export default {
  title: "Design System/Components/CtaBar",
  component: {
    CsSection,
    CsContainer,
    CsCtaBar,
    CsLogo,
    CsButton,
  },
};

const Template = (args) => ({
  components: {
    CsSection,
    CsContainer,
    CsCtaBar,
    CsLogo,
    CsButton,
  },
  setup() {
    return { ...args };
  },
  template: `
    <cs-section
      :backgroundColor="backgroundColor"
    >
      <cs-container
        breakpoint="lg"
        maxWidth="max-w-screen-lg"
        >
        <cs-cta-bar :breakpoint="breakpoint">
          <template v-slot:left>
            <cs-button
              theme="default"
              size="medium"
              link="#login"
              class="uppercase"
              >
              Acceder
            </cs-button>
          </template>
    
          <template v-slot:center>
            <cs-logo height="h-12" />
          </template>
    
          <template v-slot:right>
            <cs-button
              theme="secondary"
              size="medium"
              link="#subscribe"
              class="uppercase"
            >
              Suscríbase
            </cs-button>
          </template>

          </cs-cta-bar>
      </cs-container>
    </cs-section>
  `,
});

export const Default = Template.bind({});
Default.args = {
  backgroundColor: "bg-neutral-50",
  breakpoint: "sm",
};
