import React, { InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './TextField.module.scss';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  label?: string;
  helperText?: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  error = false,
  label,
  helperText,
  className,
  ...inputProps
}) => {
  const rootClasses = classNames(styles.root, className);

  const inputClasses = classNames(styles.input, error && styles.error);

  const helperClasses = classNames(helperText, error && styles.error);

  return (
    <div className={rootClasses}>
      {label && <label className={styles.label}>{label}</label>}
      <input className={inputClasses} aria-invalid={error} {...inputProps} />
      {helperText && <p className={helperClasses}>{helperText}</p>}
    </div>
  );
};
