import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './Footer';

const meta = {
  title: 'Organisms/Footer',
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

// The footer, in all its glory
export const TheFooter: Story = {
  parameters: {
    backgrounds: {
      default: 'Light',
    },
    layout: "padded",
  },
};