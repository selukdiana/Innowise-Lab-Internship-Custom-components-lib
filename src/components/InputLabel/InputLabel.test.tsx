import React from 'react';
import { render } from '@testing-library/react';
import { InputLabel } from './InputLabel';

describe('InputLabel Component', () => {
  test('renders with correct text', () => {
    const { getByText } = render(
      <InputLabel id="test-label">Test Label</InputLabel>,
    );

    expect(getByText('Test Label')).toBeInTheDocument();
  });
});
