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
  title: "Design System/Components/IconNav",
  argTypes: {
    weight: {
      options: ["thin", "light", "regular", "bold", "fill", "duotone"],
      control: { type: "inline-radio" },
    },
  },
  component: {
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
    <cs-icon-nav
      :fullWidth="fullWidth"
      :inline="inline"
      :spaceX="spaceX"
      :spaceY="spaceY"
      :backgroundColor="backgroundColor"
      :padding="padding"
      :margin="margin"
    >
      <cs-icon-nav-item link="#">
        <ph-facebook-logo :size="24" :weight="weight"/>
      </cs-icon-nav-item> 
      <cs-icon-nav-item link="#">
        <ph-twitter-logo :size="24" :weight="weight"/>
      </cs-icon-nav-item> 
      <cs-icon-nav-item link="#">
        <ph-youtube-logo :size="24" :weight="weight"/>
      </cs-icon-nav-item> 
      <cs-icon-nav-item link="#">
        <ph-instagram-logo :size="24" :weight="weight"/>
      </cs-icon-nav-item> 
      <cs-icon-nav-item link="#">
        <ph-whatsapp-logo :size="24" :weight="weight"/>
      </cs-icon-nav-item> 
    </cs-icon-nav>
  `,
});

export const Float = Template.bind({});
Float.args = {
  fullWidth: null,
  spaceX: "space-x-2",
  spaceY: "space-y-2",
  inline: true,
  weight: "regular",
  backgroundColor: "bg-white",
  padding: null,
  margin: null,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
  spaceX: null,
  spaceY: null,
  inline: true,
  weight: "regular",
  backgroundColor: "bg-secondary-400",
  padding: "p-2",
  margin: "m-0",
};
