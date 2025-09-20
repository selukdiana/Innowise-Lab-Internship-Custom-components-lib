import { FC, HTMLAttributes, ReactNode, useContext } from 'react';
import styles from './MenuItem.module.scss';
import React from 'react';
import classNames from 'classnames';
import { FormContext } from '../FormControl';

export interface MenuItemProps extends HTMLAttributes<HTMLLIElement> {
  value: string;
  children: ReactNode;
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
  className,
  changeHandler,
  onClick,
  isActive,
  ...rest
}) => {
  const { setIsOpen, setCurrentValue } = useContext(FormContext);

  const menuItemClasses = classNames(
    styles.menuItem,
    isActive && styles.active,
    className,
  );

  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    console.log('click');
    setCurrentValue(value);
    setIsOpen(false);
    // if (selectBoxRef && selectBoxRef.current) {
    //   const event = new InputEvent('change', {
    //     bubbles: true,
    //     cancelable: true,
    //     data: value,
    //   });
    //   selectBoxRef.current.dispatchEvent(event);
    // }
    changeHandler?.({ target: { value } });
    onClick?.(e);
  };

  return (
    <li className={menuItemClasses} onClick={handleClick} {...rest}>
      {children}
    </li>
  );
};
