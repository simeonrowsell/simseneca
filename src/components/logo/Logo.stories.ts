import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Logo } from './Logo';

const meta = {
  title: 'Atoms/Logo',
  component: Logo,
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

// Light story
export const LightAndOrange: Story = {
  args: {
    colour: 'orange',
    brightness: 'light',
  },
};

// Dark story
export const DarkAndPink: Story = {
  args: {
    colour: 'pink',
    brightness: 'dark',
  },
  parameters: {
    backgrounds: {
      default: 'Light',
    },
  },
};