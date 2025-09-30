import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from './Button';

describe('Button Component', () => {
  const mockClick = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders with default props', () => {
    render(<Button onClick={mockClick}>Default Button</Button>);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Default Button');
    expect(button).toHaveClass('contained');
    expect(button).toHaveClass('medium');
  });

  test('renders with correct variant and size', () => {
    render(
      <Button variant="outlined" size="large" onClick={mockClick}>
        Outlined Button
      </Button>,
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('outlined');
    expect(button).toHaveClass('large');
  });

  test('calls onClick handler when clicked', () => {
    render(<Button onClick={mockClick}>Clickable Button</Button>);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockClick).toHaveBeenCalledTimes(1);
  });

  test('is disabled when disabled prop is true', () => {
    render(
      <Button disabled onClick={mockClick}>
        Disabled Button
      </Button>,
    );

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(mockClick).not.toHaveBeenCalled();
  });
});
