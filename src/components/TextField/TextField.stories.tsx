import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { TextField } from './TextField';

const meta = {
  title: 'textField',
  component: TextField,
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Value: Story = {
  args: {
    value: 'TextField',
  },
};

export const NoValue: Story = {
  args: {},
};

export const Label: Story = {
  args: {
    value: 'TextField',
    label: 'Label',
  },
};

export const HelperText: Story = {
  args: {
    value: 'TextField',
    helperText: 'Helper Text',
  },
};

export const Error: Story = {
  args: {
    label: 'Label',
    value: 'TextField',
    helperText: 'Helper Text',
    error: true,
  },
};
