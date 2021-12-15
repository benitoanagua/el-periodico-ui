import CsSection from "@/components/Section/Section.vue";
import CsContainer from "@/components/Container/Container.vue";
import CsTopBar from "@/components/TopBar/TopBar.vue";
import CsIconNav from "@/components/IconNav/IconNav.vue";
import CsIconNavItem from "@/components/IconNav/IconNavItem.vue";
import {
  PhFacebookLogo,
  PhTwitterLogo,
  PhYoutubeLogo,
  PhInstagramLogo,
  PhWhatsappLogo,
} from "phosphor-vue";

export default {
  title: "Design System/Components/TopBar",
  component: {
    CsSection,
    CsContainer,
    CsTopBar,
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
      :backgroundColor="backgroundColor"
    >
      <cs-container
        breakpoint="lg"
        maxWidth="max-w-screen-lg"
        >
        <cs-top-bar :breakpoint="breakpoint" >
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
  `,
});

export const Default = Template.bind({});
Default.args = {
  backgroundColor: "bg-neutral-50",
  breakpoint: "sm",
  date: "Tarija, jueves 16 de septiembre del 2021",
};
