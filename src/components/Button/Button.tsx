import React, { ButtonHTMLAttributes, FC } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'text' | 'outlined' | 'contained';
  size?: 'small' | 'medium' | 'large';
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
