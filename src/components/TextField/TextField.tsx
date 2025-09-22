import React, { ChangeEvent, InputHTMLAttributes, useState } from 'react';
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
  value,
  onChange,
  className,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const hasValue = inputValue !== undefined && inputValue !== '';

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e);
  };

  const rootClasses = classNames(styles.root, className);
  const labelClasses = classNames(
    styles.label,
    (hasValue || isFocused) && styles.floated,
    isFocused && styles.ficused,
    error && styles.error,
  );
  const inputClasses = classNames(
    styles.input,
    error ? styles.error : styles.default,
  );
  const helperClasses = classNames(styles.helperText, error && styles.error);

  return (
    <div className={rootClasses}>
      <div className={styles.inputContainer}>
        {label && <label className={labelClasses}>{label}</label>}
        <input
          className={inputClasses}
          aria-invalid={error}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleInputChange}
          {...rest}
        />
      </div>
      {helperText && <p className={helperClasses}>{helperText}</p>}
    </div>
  );
};
