import React, { FC, HTMLAttributes, useContext, MouseEvent } from 'react';
import classNames from 'classnames';

import styles from './MenuItem.module.scss';
import { FormContext } from '../FormControl';

export interface MenuItemProps extends HTMLAttributes<HTMLLIElement> {
  value: string | number;
  changeHandler?: (event: SelectChangeEvent) => void;
  isActive?: boolean;
}

export type SelectChangeEvent = {
  target: {
    value: string | number;
  };
};

export const MenuItem: FC<MenuItemProps> = ({
  value,
  children,
  changeHandler,
  onClick,
  isActive = false,
}) => {
  const { setIsOpen, setCurrentValue } = useContext(FormContext);

  const menuItemClasses = classNames(
    styles.menuItem,
    isActive && styles.active,
  );

  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    setCurrentValue(value);
    setIsOpen(false);
    changeHandler?.({ target: { value } });
    onClick?.(e);
  };

  return (
    <li className={menuItemClasses} onClick={handleClick}>
      {children}
    </li>
  );
};
