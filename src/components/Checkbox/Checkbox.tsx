import React, { ChangeEvent, useState } from 'react';
import styles from './Checkbox.module.scss';
import classNames from 'classnames';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  disabled = false,
  checked = false,
  onChange,
  ...rest
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    setIsChecked((prev) => !prev);
    onChange?.(e);
  };

  const checkboxClasses = classNames(
    styles.checkbox,
    isChecked ? styles.checked : styles.default,
    disabled && styles.disabled,
  );

  return (
    <label className={styles.root}>
      <div className={styles.checkboxOuter}>
        <div className={checkboxClasses}>
          {isChecked && (
            <svg viewBox="0 -4.5 33 33" className={styles.icon}>
              <path d="m0 10.909 4.364-4.364 8.727 8.727 15.273-15.273 4.364 4.364-19.636 19.636z" />
            </svg>
          )}
        </div>
      </div>
      {label && <span className={styles.label}>{label}</span>}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        disabled={disabled}
        className={styles.hiddenCheckbox}
        {...rest}
      />
    </label>
  );
};
