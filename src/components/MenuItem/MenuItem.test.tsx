import React from 'react';
import { render } from '@testing-library/react';
import { MenuItem } from './MenuItem';

describe('MenuItem Component', () => {
  test('renders with correct value and text', () => {
    const { getByText } = render(<MenuItem value={10}>Item One</MenuItem>);

    expect(getByText('Item One')).toBeInTheDocument();
  });
});
