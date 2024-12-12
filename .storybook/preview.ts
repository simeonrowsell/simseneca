import type { Preview } from "@storybook/react";

// Import global CSS from Gatsby
import '../src/styles/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        // Default values
        { name: 'Dark', value: '#110B25' },
        { name: 'Light', value: '#FFEEEE' },
      ],
      // Specify which background is shown by default
      default: 'Dark',
    },
    layout: 'centered',
  },
  // Enables auto-generated documentation for all stories
  tags: ['autodocs'],
};

export default preview;

