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
    <cs-audio-player :url="audio" :radio="radio"/>
  `,
});

export const Default = Template.bind({});
Default.args = {
  breakpoint: "md",
  audio: "https://filesamples.com/samples/audio/mp3/sample4.mp3",
  radio: true,
};
