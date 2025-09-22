import React, { ChangeEvent, useState } from 'react';
import classNames from 'classnames';
import styles from './Switch.module.scss';

interface SwitchProps {
  label?: string;
  disabled?: boolean;
  checked: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Switch: React.FC<SwitchProps> = ({
  label,
  disabled = false,
  checked,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handleSwitchChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    setIsChecked((prev) => !prev);
    onChange?.(e);
  };

  const rootClasses = classNames(styles.root, disabled && styles.disabled);
  const switchClasses = classNames(styles.switch, isChecked && styles.checked);

  return (
    <label className={rootClasses}>
      <div className={switchClasses}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleSwitchChange}
          className={styles.hiddenCheckbox}
        />
      </div>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};
