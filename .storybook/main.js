const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  staticDirs: ["../public"],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src"),
    };
    config.module.rules.push({
      // test: /\.scss$/,
      // use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, "../"),
    });
    return config;
  },
  framework: "@storybook/vue3",
  core: {
    builder: "webpack5",
  },
};
