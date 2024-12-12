import type { Meta, StoryObj } from '@storybook/react';

import { MainNav } from './MainNav';

const meta = {
  title: 'Organisms/MainNav',
  component: MainNav,
} satisfies Meta<typeof MainNav>;

export default meta;
type Story = StoryObj<typeof meta>;

// The main navigation, up the top there
export const TheMainNav: Story = {
  parameters: {
    backgrounds: {
      default: 'Light',
    },
    layout: "padded",
  },
};