import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Modal } from './Modal';

describe('Modal Component', () => {
  const mockClose = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly when open', () => {
    render(
      <Modal open={true} onClose={mockClose}>
        Modal Content
      </Modal>,
    );
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  test('does not render when closed', () => {
    const { container } = render(<Modal open={false} onClose={mockClose} />);
    expect(container).toBeEmptyDOMElement();
  });

  test('calls onClose handler when overlay is clicked', () => {
    render(
      <Modal open={true} onClose={mockClose}>
        Modal Content
      </Modal>,
    );
    fireEvent.click(screen.getByText('Modal Content'));
    fireEvent.click(screen.getByRole('dialog'));
    expect(mockClose).toHaveBeenCalledTimes(1);
  });

  test('does not call onClose handler when modal content is clicked', () => {
    render(
      <Modal open={true} onClose={mockClose}>
        Modal Content
      </Modal>,
    );
    fireEvent.click(screen.getByText('Modal Content')); 
    expect(mockClose).not.toHaveBeenCalled();
  });
});
