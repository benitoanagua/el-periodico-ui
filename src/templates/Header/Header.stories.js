import CsSection from "@/components/Section/Section.vue";
import CsContainer from "@/components/Container/Container.vue";
import CsTopBar from "@/components/TopBar/TopBar.vue";
import CsCtaBar from "@/components/CtaBar/CtaBar.vue";
import CsNavBar from "@/components/NavBar/NavBar.vue";
import CsLogo from "@/components/Logo/Logo.vue";
import CsButton from "@/components/Button/Button.vue";
import CsIconNav from "@/components/IconNav/IconNav.vue";
import CsIconNavItem from "@/components/IconNav/IconNavItem.vue";
import {
  PhFacebookLogo,
  PhTwitterLogo,
  PhYoutubeLogo,
  PhInstagramLogo,
  PhWhatsappLogo,
} from "phosphor-vue";
import { menu } from "@/helpers/Data";

export default {
  title: "Design System/Templates/Header",
  component: {
    CsSection,
    CsContainer,
    CsTopBar,
    CsCtaBar,
    CsNavBar,
    CsLogo,
    CsButton,
    CsIconNav,
    CsIconNavItem,
    PhFacebookLogo,
    PhTwitterLogo,
    PhYoutubeLogo,
    PhInstagramLogo,
    PhWhatsappLogo,
  },
};

const Template = (args) => ({
  components: {
    CsSection,
    CsContainer,
    CsTopBar,
    CsCtaBar,
    CsNavBar,
    CsLogo,
    CsButton,
    CsIconNav,
    CsIconNavItem,
    PhFacebookLogo,
    PhTwitterLogo,
    PhYoutubeLogo,
    PhInstagramLogo,
    PhWhatsappLogo,
  },
  setup() {
    return { ...args };
  },
  template: `
    <cs-section
      backgroundColor="bg-neutral-50"
      class="border-b border-neutral-200"
    >
      <cs-container
        breakpoint="xl"
        maxWidth="max-w-screen-lg"
        >
        <cs-top-bar breakpoint="sm">
          <template v-slot:left>
            {{ date }}
          </template>
          <template v-slot:right>
            <cs-icon-nav
              :inline="true"
              spaceX="space-x-2"
            >
              <cs-icon-nav-item link="#">
                <ph-facebook-logo size="20"/>
              </cs-icon-nav-item> 
              <cs-icon-nav-item link="#">
                <ph-twitter-logo size="20"/>
              </cs-icon-nav-item> 
              <cs-icon-nav-item link="#">
                <ph-youtube-logo size="20"/>
              </cs-icon-nav-item> 
              <cs-icon-nav-item link="#">
                <ph-instagram-logo size="20"/>
              </cs-icon-nav-item> 
              <cs-icon-nav-item link="#">
                <ph-whatsapp-logo size="20"/>
              </cs-icon-nav-item> 
            </cs-icon-nav>
          </template>
          </cs-top-bar>
      </cs-container>
    </cs-section>

    <cs-section
      backgroundColor="bg-neutral-50"
    >
      <cs-container
        breakpoint="xl"
        maxWidth="max-w-screen-lg"
        >
        <cs-cta-bar breakpoint="lg">
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

    <cs-section
      class="sticky top-0"
      backgroundColor="bg-secondary-400"
    >
      <cs-container
        maxWidth="max-w-screen-lg"
        breakpoint="xl"
      >
        <cs-nav-bar
          breakpoint="lg"
          :model="items"
        />
      </cs-container>
    </cs-section>
  `,
});

export const Default = Template.bind({});
Default.args = {
  date: "Sucre, jueves 16 de septiembre del 2021",
  items: menu,
};