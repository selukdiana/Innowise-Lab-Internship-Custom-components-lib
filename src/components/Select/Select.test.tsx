import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FormControl } from '../FormControl'; // ensure correct import
import { Select } from './Select';
import { MenuItem } from '../MenuItem'; // ensure correct import
import { InputLabel } from '../InputLabel';

describe('Select Component', () => {
  const options = [
    { value: 10, label: 'Ten' },
    { value: 20, label: 'Twenty' },
    { value: 30, label: 'Thirty' },
  ];

  test('renders with correct options', () => {
    render(
      <FormControl>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          id="demo-simple-select"
          labelId="demo-simple-select-label"
          label="Select Age"
          value={10}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>,
    );
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Ten')).toBeInTheDocument();
    expect(screen.getByText('Twenty')).toBeInTheDocument();
    expect(screen.getByText('Thirty')).toBeInTheDocument();
  });

  test('calls onChange when option is selected', () => {
    const mockOnChange = jest.fn();
    render(
      <FormControl>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          id="demo-simple-select"
          labelId="demo-simple-select-label"
          label="Select Age"
          value={10}
          onChange={mockOnChange}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>,
    );

    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('Twenty'));
    expect(mockOnChange).toHaveBeenCalled();
  });
});
