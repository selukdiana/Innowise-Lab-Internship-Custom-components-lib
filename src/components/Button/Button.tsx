import React, { ButtonHTMLAttributes, FC } from 'react';
import classnames from 'classnames';
import styles from './Button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'text' | 'outlined' | 'contained';
  size?: 'small' | 'medium' | 'large';
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'contained',
  size = 'medium',
  ...rest
}) => {
  console.log(styles);
  const buttonClasses = classnames(
    styles.button,
    styles[variant],
    styles[size],
  );

  return (
    <button {...rest} className={buttonClasses}>
      {children}
    </button>
  );
};
