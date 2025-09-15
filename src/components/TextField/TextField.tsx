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
  className,
  ...inputProps
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
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const rootClasses = classNames(styles.root, className);
  const labelClasses = classNames(
    styles.label,
    (hasValue || isFocused) && styles.labelFloated,
    error && styles.labelError,
  );
  const inputClasses = classNames(
    styles.input,
    error ? styles.inputError : styles.inputDefault,
  );
  const helperClasses = classNames(
    styles.helperText,
    error && styles.helperTextError,
  );

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
          {...inputProps}
        />
      </div>
      {helperText && <p className={helperClasses}>{helperText}</p>}
    </div>
  );
};
