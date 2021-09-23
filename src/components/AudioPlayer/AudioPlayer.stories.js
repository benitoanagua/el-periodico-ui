import CsAudioPlayer from "@/components/AudioPlayer/AudioPlayer.vue";

export default {
  title: "Design System/Components/AudioPlayer",
  component: {
    CsAudioPlayer,
  },
};

const Template = (args) => ({
  components: {
    CsAudioPlayer,
  },
  setup() {
    return { ...args };
  },
  template: `
    <cs-audio-player />
  `,
});

export const Default = Template.bind({});
Default.args = {
  breakpoint: "md",
  //   title: "90.1 FM",
  //   tagline: "CORREO DEL SUR - RADIO",
  //   ctaIcons: "Escúchanos en:",
};
