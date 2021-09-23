import CsIconNav from "@/components/IconNav/IconNav.vue";
import CsIconNavItem from "@/components/IconNav/IconNavItem.vue";
import CsQuickTime from "@/components/CustomIcons/QuickTime.vue";
import CsRealPlayer from "@/components/CustomIcons/RealPlayer.vue";
import CsWinamp from "@/components/CustomIcons/Winamp.vue";
import CsWindowsMediaPlayer from "@/components/CustomIcons/WindowsMediaPlayer.vue";

export default {
  title: "Design System/Components/CustomIcon",
  argTypes: {
    color: {
      options: [
        "text-primary-500",
        "text-secondary-500",
        "text-accent-500",
        "text-black",
      ],
      control: { type: "inline-radio" },
    },
  },
  component: {
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
    <cs-icon-nav
      :inline="true"
      spaceX="space-x-2"
      spaceY="space-y-2"
      backgroundColor="bg-white"
    >
      <cs-icon-nav-item link="#">
        <cs-winamp :class="color" class="fill-current h-6 w-6" />
      </cs-icon-nav-item> 
      <cs-icon-nav-item link="#">
        <cs-windows-media-player :class="color" class="fill-current h-6 w-6" />
      </cs-icon-nav-item> 
      <cs-icon-nav-item link="#">
        <cs-real-player :class="color" class="fill-current h-6 w-6" />
      </cs-icon-nav-item> 
      <cs-icon-nav-item link="#">
        <cs-quick-time :class="color" class="fill-current h-6 w-6" />
      </cs-icon-nav-item> 
    </cs-icon-nav>
  `,
});

export const Default = Template.bind({});
Default.args = {
  color: "text-accent-500",
};
