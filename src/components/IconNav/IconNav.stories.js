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
    <cs-icon-nav :inline="inline" :spaceX="spaceX" :spaceY="spaceY">
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

export const Thin = Template.bind({});
Thin.args = {
  spaceX: "space-x-2",
  spaceY: "space-y-2",
  inline: true,
  weight: "thin",
};

export const Light = Template.bind({});
Light.args = {
  spaceX: "space-x-2",
  spaceY: "space-y-2",
  inline: true,
  weight: "light",
};

export const Regular = Template.bind({});
Regular.args = {
  spaceX: "space-x-2",
  spaceY: "space-y-2",
  inline: true,
  weight: "regular",
};

export const Bold = Template.bind({});
Bold.args = {
  spaceX: "space-x-2",
  spaceY: "space-y-2",
  inline: true,
  weight: "bold",
};

export const Fill = Template.bind({});
Fill.args = {
  spaceX: "space-x-2",
  spaceY: "space-y-2",
  inline: true,
  weight: "fill",
};

export const Duotone = Template.bind({});
Duotone.args = {
  spaceX: "space-x-2",
  spaceY: "space-y-2",
  inline: true,
  weight: "duotone",
};
