import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Modal } from './Modal';
import React from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: {
    open: true,
    onClose() {},
  },
};

export const Children: Story = {
  args: {
    children: <p>Children</p>,
    open: true,
    onClose() {},
  },
};
