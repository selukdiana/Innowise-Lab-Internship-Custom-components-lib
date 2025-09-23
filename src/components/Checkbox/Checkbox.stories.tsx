import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Checkbox } from '../Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Unchecked: Story = {
  args: {
    checked: false,
  },
};

export const CheckedDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};

export const UnchackedDisabled: Story = {
  args: {
    checked: false,
    disabled: true,
  },
};

export const Label: Story = {
  args: {
    label: 'Label',
  },
};
