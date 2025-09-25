import React from 'react';
import { render } from '@testing-library/react';
import { FormControl } from './FormControl';

describe('FormControl Component', () => {
  test('renders children correctly', () => {
    const { getByText } = render(
      <FormControl fullWidth>
        <span>Child Component</span>
      </FormControl>,
    );

    expect(getByText('Child Component')).toBeInTheDocument();
  });

  test('applies fullWidth class when fullWidth prop is true', () => {
    const { container } = render(
      <FormControl fullWidth>
        <span>Child Component</span>
      </FormControl>,
    );

    expect(container.firstChild).toHaveClass('fullWidth'); // Ensure the class is applied
  });
});
