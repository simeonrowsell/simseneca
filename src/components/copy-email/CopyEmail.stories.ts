import type { Meta, StoryObj } from '@storybook/react';

import { CopyEmail } from './CopyEmail';

const meta = {
  title: 'Molecules/CopyEmail',
  component: CopyEmail,
} satisfies Meta<typeof CopyEmail>;

export default meta;
type Story = StoryObj<typeof meta>;

// Large
export const Large: Story = {
  args: {
    size: 'large'
  },
  parameters: {
    backgrounds: {
      default: 'Light',
    },
    layout: "padded",
  },
};

// Small
export const Small: Story = {
  args: {
    size: 'small'
  },
  parameters: {
    backgrounds: {
      default: 'Light',
    },
    layout: "padded",
  },
};