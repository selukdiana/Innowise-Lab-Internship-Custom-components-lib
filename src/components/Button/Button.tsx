import React, { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

export type VariantType = 'text' | 'outlined' | 'contained';
export type SizeType = 'small' | 'medium' | 'large';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantType;
  size?: SizeType;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'contained',
  size = 'medium',
  className,
  disabled = false,
  ...rest
}) => {
  const buttonClasses = classNames(
    styles.button,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    className,
  );

  return (
    <button className={buttonClasses} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};
