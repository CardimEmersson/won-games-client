import { Meta, Story } from '@storybook/react/types-6-0';
import { Checkbox, CheckboxProps } from '.';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta;

export const Basic: Story<CheckboxProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox {...args} isChecked label="Action" labelFor="action" />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox {...args} label="Adventure" labelFor="adventure" />
    </div>

    <div style={{ padding: 10 }}>
      <Checkbox {...args} label="Strategy" labelFor="strategy" />
    </div>
  </>
);
