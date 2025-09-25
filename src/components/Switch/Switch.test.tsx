import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Switch } from './Switch';

describe('Switch Component', () => {
  const mockChange = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders with correct label', () => {
    render(
      <Switch checked={false} onChange={mockChange} label="Enable Feature" />,
    );
    expect(screen.getByText('Enable Feature')).toBeInTheDocument();
  });

  test('calls onChange handler when clicked', () => {
    render(<Switch checked={false} onChange={mockChange} />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(mockChange).toHaveBeenCalledTimes(1);
  });

  test('is disabled when disabled prop is true', () => {
    render(<Switch checked={false} onChange={mockChange} disabled />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  test('does not call onChange when disabled', () => {
    render(<Switch checked={true} onChange={mockChange} disabled />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(mockChange).not.toHaveBeenCalled();
  });
});
