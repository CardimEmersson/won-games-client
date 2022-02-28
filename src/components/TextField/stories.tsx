import { Meta, Story } from '@storybook/react/types-6-0';
import { Email } from 'styled-icons/material-outlined';
import { TextField, TextFieldProps } from '.';

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    id: 'email',
    initialValue: '',
    icon: <Email />,
    placeholder: 'emersson@gmail.com'
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: 'string' }
  }
} as Meta;

export const Basic: Story<TextFieldProps> = (args) => {
  return (
    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField {...args} />
    </div>
  );
};

export const WithError: Story<TextFieldProps> = (args) => {
  return (
    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField {...args} />
    </div>
  );
};

WithError.args = {
  error: 'Ops...something went wrong'
};
