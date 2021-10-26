import { app } from "@storybook/vue3";
import { store } from "@/store";
import "../src/tailwind.css";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

app.use(store);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
