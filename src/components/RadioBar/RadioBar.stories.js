import CsSection from "@/components/Section/Section.vue";
import CsContainer from "@/components/Container/Container.vue";
import CsRadioBar from "@/components/RadioBar/RadioBar.vue";
import CsAudioPlayer from "@/components/AudioPlayer/AudioPlayer.vue";
import CsIconNav from "@/components/IconNav/IconNav.vue";
import CsIconNavItem from "@/components/IconNav/IconNavItem.vue";
import CsQuickTime from "@/components/CustomIcons/QuickTime.vue";
import CsRealPlayer from "@/components/CustomIcons/RealPlayer.vue";
import CsWinamp from "@/components/CustomIcons/Winamp.vue";
import CsWindowsMediaPlayer from "@/components/CustomIcons/WindowsMediaPlayer.vue";

export default {
  title: "Design System/Components/RadioBar",
  component: {
    CsSection,
    CsContainer,
    CsRadioBar,
    CsAudioPlayer,
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
    CsSection,
    CsContainer,
    CsRadioBar,
    CsAudioPlayer,
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
  <cs-section backgroundColor="bg-primary-200">
    <cs-container
      breakpoint="lg"
      maxWidth="max-w-screen-lg"
    >
      <cs-radio-bar :breakpoint="breakpoint">
        <template v-slot:left>
          <div class="flex flex-col mr-4">
            <span
              :class="'text-3xl ' + breakpoint + ':text-4xl'"
              class="-mt-1 -mb-1 font-bold bg-clip-text bg-gradient-to-tl to-secondary-500 from-accent-500 text-transparent"
            >
              {{ title }}
              </span>
            <span
              :class="'hidden ' + breakpoint + ':block'"
              class="-mt-1 text-xs text-neutral-700 font-semibold"
            >
              {{ tagline }}
            </span>
          </div>
          <cs-audio-player :url="audio" :radio="true" :breakpoint="breakpoint"/>  
        </template>
        <template v-slot:right>
          <span class="mr-2 text-neutral-700">
            {{ ctaIcons }}
          </span>
          <cs-icon-nav
            :inline="true"
            spaceX="space-x-2"
            spaceY="space-y-2"
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
    </cs-container>
  </cs-section>
  `,
});

export const Default = Template.bind({});
Default.args = {
  breakpoint: "md",
  audio: "https://whsh4u-panel.com/proxy/gddupgij?mp=/stream",
  title: "99.9 FM",
  tagline: "EL PERIÓDICO - RADIO",
  ctaIcons: "Escúchanos en:",
};
