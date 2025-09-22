import { FC, HTMLAttributes, useContext } from 'react';
import styles from './MenuItem.module.scss';
import React from 'react';
import classNames from 'classnames';
import { FormContext } from '../FormControl';

export interface MenuItemProps extends HTMLAttributes<HTMLLIElement> {
  value: string;
  changeHandler?: (event: SelectChangeEvent) => void;
  isActive?: boolean;
}

export type SelectChangeEvent = {
  target: {
    value: string;
  };
};

export const MenuItem: FC<MenuItemProps> = ({
  value,
  children,
  changeHandler,
  onClick,
  isActive,
}) => {
  const { setIsOpen, setCurrentValue } = useContext(FormContext);

  const menuItemClasses = classNames(
    styles.menuItem,
    isActive && styles.active,
  );

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
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
