// src/components/Select/Select.stories.tsx

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { FormControl, FormControlProps } from '../FormControl';
import { InputLabel, LabelProps } from '../InputLabel';
import { Select, SelectProps } from './Select';
import { MenuItem, MenuItemProps } from '../MenuItem/MenuItem';

// Расширяем SelectProps, чтобы в args появился массив values
type SelectStoryProps = FormControlProps & {
  values: Array<number | string>;
} & SelectProps &
  MenuItemProps &
  LabelProps;

const meta: Meta<SelectStoryProps> = {
  title: 'Select',
  component: FormControl,
  tags: ['autodocs'],
} satisfies Meta<typeof FormControl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    fullWidth: false,
    labelId: 'demo-simple-select-label',
    id: 'demo-simple-select',
    label: 'Age',
    value: 10,
    values: [10, 20, 30],
    onChange: action('change'),
  },
  render: ({ fullWidth, labelId, id, label, value, values, onChange }) => (
    <FormControl fullWidth={fullWidth}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        id={id}
        value={value}
        label={label}
        onChange={onChange}
      >
        {values.map((val) => {
          let text = String(val);
          if (val === 10) text = 'Ten';
          if (val === 20) text = 'Twenty';
          if (val === 30) text = 'Thirty';

          return (
            <MenuItem key={val} value={val}>
              {text}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  ),
};
