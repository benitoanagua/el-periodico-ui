import CsIconNav from "@/components/IconNav/IconNav.vue";
import CsIconNavItem from "@/components/IconNav/IconNavItem.vue";
import CsLogo from "@/components/Logo/Logo.vue";

export default {
  title: "Design System/Components/Logo",
  component: {
    CsIconNav,
    CsIconNavItem,
    CsLogo,
  },
};

const Template = (args) => ({
  components: {
    CsIconNav,
    CsIconNavItem,
    CsLogo,
  },
  setup() {
    return { ...args };
  },
  template: `
    <cs-icon-nav
      :backgroundColor="backgroundColor"
      :padding="padding"
      :margin="margin"
    >
      <cs-icon-nav-item link="#">
        <cs-logo
          :fill="fill"
          :width="width"
          :height="height"
        />
      </cs-icon-nav-item> 
    </cs-icon-nav>
  `,
});

export const Original = Template.bind({});
Original.args = {
  backgroundColor: "bg-primary-200",
  padding: "p-4",
  margin: "m-0",
  height: "h-8",
  width: null,
  fill: null,
};

export const Monochrome = Template.bind({});
Monochrome.args = {
  backgroundColor: "bg-primary-200",
  padding: "p-4",
  margin: "m-0",
  height: "h-8",
  width: null,
  fill: "text-primary-700",
};

export const Negative = Template.bind({});
Negative.args = {
  backgroundColor: "bg-primary-700",
  padding: "p-4",
  margin: "m-0",
  height: "h-8",
  width: null,
  fill: "text-white",
};
