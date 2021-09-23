import CsRadioBar from "@/components/RadioBar/RadioBar.vue";
import CsIconNav from "@/components/IconNav/IconNav.vue";
import CsIconNavItem from "@/components/IconNav/IconNavItem.vue";
import CsQuickTime from "@/components/CustomIcons/QuickTime.vue";
import CsRealPlayer from "@/components/CustomIcons/RealPlayer.vue";
import CsWinamp from "@/components/CustomIcons/Winamp.vue";
import CsWindowsMediaPlayer from "@/components/CustomIcons/WindowsMediaPlayer.vue";

export default {
  title: "Design System/Components/RadioBar",
  component: {
    CsRadioBar,
    CsIconNav,
    CsIconNavItem,
    CsQuickTime,
    CsRealPlayer,
    CsWinamp,
    CsWindowsMediaPlayer,
  },
};

const Template = (args) => ({
  components: {
    CsRadioBar,
    CsIconNav,
    CsIconNavItem,
    CsQuickTime,
    CsRealPlayer,
    CsWinamp,
    CsWindowsMediaPlayer,
  },
  setup() {
    return { ...args };
  },
  template: `
    <cs-radio-bar>
      <template v-slot:left>
        <div class="flex flex-col">
          <span class="-mb-1 text-4xl font-bold bg-clip-text bg-gradient-to-tl to-secondary-500 from-accent-500 text-transparent">
            {{ title }}
          </span>
          <span class="-mt-0.5 text-sm text-neutral-700 font-semibold">
            {{ tagline }}
          </span>
        </div>  
      </template>
      <template v-slot:right>
        <span class="mr-2 text-neutral-700">
          {{ ctaIcons }}
        </span>
        <cs-icon-nav
          :inline="true"
          spaceX="space-x-2"
          spaceY="space-y-2"
          backgroundColor="bg-white"
        >
          <cs-icon-nav-item link="#">
            <cs-winamp class="fill-current text-neutral-700 h-6 w-6" />
          </cs-icon-nav-item> 
          <cs-icon-nav-item link="#">
            <cs-windows-media-player class="fill-current text-neutral-700 h-6 w-6" />
          </cs-icon-nav-item> 
          <cs-icon-nav-item link="#">
            <cs-real-player class="fill-current text-neutral-700 h-6 w-6" />
          </cs-icon-nav-item> 
          <cs-icon-nav-item link="#">
            <cs-quick-time class="fill-current text-neutral-700 h-6 w-6" />
          </cs-icon-nav-item> 
        </cs-icon-nav>
      </template>
    </cs-radio-bar>
  `,
});

export const Default = Template.bind({});
Default.args = {
  breakpoint: "md",
  title: "90.1 FM",
  tagline: "CORREO DEL SUR - RADIO",
  ctaIcons: "Escúchanos en:",
};
