import CsIconNav from "@/components/IconNav/IconNav.vue";
import CsIcon from "@/components/IconNav/Icon.vue";
import {
  PhFacebookLogo,
  PhTwitterLogo,
  PhYoutubeLogo,
  PhInstagramLogo,
  PhWhatsappLogo,
} from "phosphor-vue";

export default {
  title: "Design System/Layout/IconNav",
  argTypes: {
    weight: {
      options: ["thin", "light", "regular", "bold", "fill", "duotone"],
      control: { type: "inline-radio" },
    },
  },
  component: {
    CsIconNav,
    CsIcon,
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
    CsIcon,
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
      <cs-icon link="#">
        <ph-facebook-logo :size="24" :weight="weight"/>
      </cs-icon> 
      <cs-icon link="#">
        <ph-twitter-logo :size="24" :weight="weight"/>
      </cs-icon> 
      <cs-icon link="#">
        <ph-youtube-logo :size="24" :weight="weight"/>
      </cs-icon> 
      <cs-icon link="#">
        <ph-instagram-logo :size="24" :weight="weight"/>
      </cs-icon> 
      <cs-icon link="#">
        <ph-whatsapp-logo :size="24" :weight="weight"/>
      </cs-icon> 
    </cs-icon-nav>
  `,
});

export const Float = Template.bind({});
Float.args = {
  fullWidth: false,
  spaceX: "space-x-2",
  spaceY: "space-y-2",
  inline: true,
  weight: "regular",
  backgroundColor: "bg-white",
  padding: "p-0",
  margin: "m-0",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
  spaceX: "space-x-2",
  spaceY: "space-y-2",
  inline: true,
  weight: "regular",
  backgroundColor: "bg-secondary-400",
  padding: "p-2",
  margin: "m-0",
};
