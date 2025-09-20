import React, { FC, HTMLAttributes, useContext } from 'react';
import classNames from 'classnames';
import styles from './InputLabel.module.scss';
import { FormContext } from '../FormControl';

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  id: string;
  children: string;
}

export const InputLabel: FC<LabelProps> = ({
  children,
  id,
  className,
  ...rest
}) => {
  const { isOpen, currentValue } = useContext(FormContext);

  const hasValue = currentValue !== undefined;

  const labelClasses = classNames(
    styles.label,
    (isOpen || hasValue) && styles.floated,
    isOpen && styles.focused,
    className,
  );

  return (
    <label className={labelClasses} id={id} {...rest}>
      {children}
    </label>
  );
};
