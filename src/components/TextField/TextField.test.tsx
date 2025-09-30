import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { TextField } from './TextField';

describe('TextField Component', () => {
  const mockChange = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders with correct label', () => {
    render(<TextField label="Name" value="" onChange={mockChange} />);
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
  });

  test('renders with correct helper text', () => {
    render(
      <TextField
        label="Name"
        value=""
        helperText="This is helperText"
        onChange={mockChange}
      />,
    );
    expect(screen.getByText('This is helperText')).toBeInTheDocument();
  });

  test('calls onChange handler when input value changes', () => {
    render(<TextField label="Name" value="" onChange={mockChange} />);
    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'John' },
    });
    expect(mockChange).toHaveBeenCalledTimes(1);
  });

  test('adds an error class if error prop is true', () => {
    const { container } = render(
      <TextField label="Name" value="" onChange={mockChange} error />,
    );
    expect(container.querySelector('input')).toHaveClass('error');
  });
});
