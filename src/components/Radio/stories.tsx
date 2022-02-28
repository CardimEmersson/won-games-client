import { Meta, Story } from '@storybook/react/types-6-0';
import { Radio, RadioProps } from '.';

export default {
  title: 'Form/Radio',
  component: Radio,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta;

export const Basic: Story<RadioProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        label="Primeiro"
        labelFor="primeiro"
        id="primeiro"
        name="name"
        value="primeiro"
        defaultChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        label="Segundo"
        labelFor="segundo"
        id="segundo"
        name="name"
        value="segundo"
        defaultChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        label="Terceiro"
        labelFor="terceiro"
        id="terceiro"
        name="name"
        value="terceiro"
        defaultChecked
        {...args}
      />
    </div>
  </>
);
