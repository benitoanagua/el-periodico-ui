import CsIcon from "@/components/Icon/Icon.vue";
import {
  PhX,
  PhArrowsOutSimple,
  PhPlay,
  PhMonitorPlay,
  PhImage,
} from "phosphor-vue";

export default {
  title: "Design System/Components/Icon",
  component: {
    CsIcon,
    PhX,
    PhArrowsOutSimple,
    PhPlay,
    PhMonitorPlay,
    PhImage,
  },
};

const Template = (args) => ({
  components: {
    CsIcon,
    PhX,
    PhArrowsOutSimple,
    PhPlay,
    PhMonitorPlay,
    PhImage,
  },
  setup() {
    return { ...args };
  },
  template: `
    <div class="flex space-x-4">
      <cs-icon
        :backgroundColor="backgroundColor"
        :borderRadius="borderRadius"
        :padding="padding"
      >
        <ph-x :size="24"/>
      </cs-icon> 
      <cs-icon
        :backgroundColor="backgroundColor"
        :borderRadius="borderRadius"
        :padding="padding"
      >
        <ph-arrows-out-simple :size="24"/>
      </cs-icon> 
      <cs-icon
        :backgroundColor="backgroundColor"
        :borderRadius="borderRadius"
        :padding="padding"
      >
        <ph-play :size="24"/>
      </cs-icon> 
      <cs-icon
        :backgroundColor="backgroundColor"
        :borderRadius="borderRadius"
        :padding="padding"
      >
        <ph-monitor-play :size="24"/>
      </cs-icon> 
      <cs-icon
        :backgroundColor="backgroundColor"
        :borderRadius="borderRadius"
        :padding="padding"
      >
        <ph-image :size="24"/>
      </cs-icon>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {
  backgroundColor: "bg-accent-500",
  borderRadius: "rounded-none",
  padding: "p-2",
};

export const Rounded = Template.bind({});
Rounded.args = {
  backgroundColor: "bg-accent-500",
  borderRadius: "rounded-md",
  padding: "p-2",
};

export const Circle = Template.bind({});
Circle.args = {
  backgroundColor: "bg-accent-500",
  borderRadius: "rounded-full",
  padding: "p-2",
};
