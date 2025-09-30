import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Switch',
  component: Switch,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    label: 'Switch',
    checked: true,
  },
};

export const Unchecked: Story = {
  args: { label: 'Switch', checked: false },
};

export const CheckedDisabled: Story = {
  args: {
    label: 'Switch',
    checked: true,
    disabled: true,
  },
};

export const UnchackedDisabled: Story = {
  args: {
    label: 'Switch',
    checked: false,
    disabled: true,
  },
};
