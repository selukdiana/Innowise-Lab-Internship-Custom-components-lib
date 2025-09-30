import React, { FC } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { FormControl, FormControlProps } from '../FormControl';
import { InputLabel, LabelProps } from '../InputLabel';
import { Select, SelectProps } from './Select';
import { MenuItem, MenuItemProps } from '../MenuItem/MenuItem';

type SelectStoryProps = FormControlProps & {
  values: Array<number | string>;
} & SelectProps &
  MenuItemProps &
  LabelProps;

const SelectStoryComponent: FC<SelectStoryProps> = ({
  fullWidth,
  id,
  labelId,
  value,
  label,
  onChange,
  values,
}) => {
  return (
    <FormControl fullWidth={fullWidth}>
      <InputLabel id={labelId}>Age</InputLabel>
      <Select
        labelId={labelId}
        id={id}
        value={value}
        label={label}
        onChange={onChange}
      >
        {values.map((val) => {
          let text;
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
  );
};

const meta: Meta<SelectStoryProps> = {
  title: 'Select',
  component: SelectStoryComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof SelectStoryComponent>;

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
};
