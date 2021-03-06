import { Meta, Story } from '@storybook/react/types-6-0';
import { Highlight, HighlightProps } from '.';
import item from './mock';

export default {
  title: 'Highlight',
  component: Highlight,
  args: { ...item }
} as Meta;

export const Basic: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
);

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlight {...args} />
  </div>
);

WithFloatImage.args = {
  title: "Read Dead it's back",
  subtitle: "Come see John's new adventures",
  buttonLabel: 'Buy now',
  buttonLink: 'https://www.amazon.com',
  backgroundImage: '/img/red-dead-img.jpg',
  floatImage: '/img/red-dead-float.png'
};
