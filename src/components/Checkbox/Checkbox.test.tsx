import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Checkbox } from './Checkbox';

describe('Checkbox Component', () => {
  const mockChange = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders with correct label', () => {
    render(<Checkbox label="Label" checked={false} onChange={mockChange} />);
    expect(screen.getByText('Label')).toBeInTheDocument();
  });

  test('calls onChange when clicked', () => {
    render(
      <Checkbox label="Label" checked={false} onChange={mockChange} />,
    );
    fireEvent.click(screen.getByRole('checkbox'));
    expect(mockChange).toHaveBeenCalledTimes(1);
  });

  test('is disabled when disabled prop is true', () => {
    render(
      <Checkbox label="Label" checked={false} onChange={mockChange} disabled />,
    );
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });
});
