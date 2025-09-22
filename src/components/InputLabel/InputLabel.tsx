import React, { FC, ReactNode, useContext } from 'react';
import classNames from 'classnames';
import styles from './InputLabel.module.scss';
import { FormContext } from '../FormControl';

export interface LabelProps {
  id: string;
  children: ReactNode;
}

export const InputLabel: FC<LabelProps> = ({ children, id }) => {
  const { isOpen, currentValue } = useContext(FormContext);

  const hasValue = currentValue !== undefined;

  const labelClasses = classNames(
    styles.label,
    (isOpen || hasValue) && styles.floated,
    isOpen && styles.focused,
  );

  return (
    <label className={labelClasses} id={id}>
      {children}
    </label>
  );
};
