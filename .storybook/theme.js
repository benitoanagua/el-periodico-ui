import { create } from "@storybook/theming";
import logo from "../src/assets/storybook.svg";

export default create({
  base: "light",

  colorPrimary: "#9bd4b5",
  colorSecondary: "#4cbb88",

  // UI
  appBg: "#ebfaf0",
  appContentBg: "white",
  appBorderColor: "#dfede5",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "#082119",
  textInverseColor: "#ebfaf0",

  // Toolbar default and active colors
  barTextColor: "#226e4f",
  barSelectedColor: "#082119",
  barBg: "#dfede5",

  // Form colors
  inputBg: "#ebfaf0",
  inputBorder: "#226e4f",
  inputTextColor: "#082119",
  inputBorderRadius: 2,

  brandTitle: "My custom storybook",
  brandUrl: "#",
  brandImage: logo,
});
