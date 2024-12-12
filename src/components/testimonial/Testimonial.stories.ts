import type { Meta, StoryObj } from '@storybook/react';

import { Testimonial } from './Testimonial';

const meta = {
  title: 'Molecules/Testimonial',
  component: Testimonial,
} satisfies Meta<typeof Testimonial>;

export default meta;
type Story = StoryObj<typeof meta>;

const smileyProps = {
  size: 'small' as 'small', // Type assertion
  brightness: 'dark' as 'dark',
  images: [
    {src: 'https://static01.nyt.com/images/2020/07/26/arts/26MUPPETSa/merlin_174639525_a9ae2a18-54f6-4e58-aab2-560ea57dad0d-mediumSquareAt3X.jpg', alt: 'Photo of Kermit'}
  ],
  name: 'Kermit the Frog',
  meta: 'Head of The Muppets',
};

// Green Testimonial
export const GreenTestimonial: Story = {
  args: {
    colour: 'green',
    title: 'A Green Team',
    body: 'Jon and Sim helped our team, including Miss Piggy and Fozzie Bear, create something truly magical. Their creativity made the process as fun as a sing-along with the Electric Mayhem. If you want your project to sparkle like my banjo, go with Luminous!',
    smileyProfileProps: smileyProps,
  },
  parameters: {
    backgrounds: {
      default: 'Light',
    },
  },
};