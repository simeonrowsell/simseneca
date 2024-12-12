import type { StorybookConfig } from "@storybook/react-webpack5";
import path from 'path';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "storybook-css-modules",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  // `staticDirs` serves files in `/static` as if they were located at the root `/`
  staticDirs: ['../static'],
  webpackFinal: async (config) => {
    // Add an alias to resolve /fonts to the correct static path
    // This ensures Storybook resolves our @font-face declarations correctly as `staticDirs` isn't working for develop mode Storybook
    config.resolve.alias = {
      ...config.resolve.alias,
      '/fonts': path.resolve(__dirname, '../static/fonts'), // Alias for fonts
    };

    return config;
  },
};
export default config;