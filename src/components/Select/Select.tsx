import React, { FC, useRef, ReactNode, useContext, useEffect } from 'react';
import styles from './Select.module.scss';
import { MenuItemProps, SelectChangeEvent } from '../MenuItem/MenuItem';
import classNames from 'classnames';
import { FormContext } from '../FormControl';

export interface SelectProps {
  label?: string;
  value?: string;
  children: ReactNode;
  id: string;
  labelId: string;
  onChange?: (event: SelectChangeEvent) => void;
}

export const Select: FC<SelectProps> = ({ value, children, onChange }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const { isOpen, setIsOpen, currentValue, setCurrentValue } =
    useContext(FormContext);
  const hasValue = currentValue !== undefined;

  useEffect(() => {
    setCurrentValue(value);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        rootRef.current &&
        !rootRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const toggleOpen = () => {
    setIsOpen?.((prev) => !prev);
  };

  let displayedLabel = '';
  React.Children.forEach(children, (child) => {
    if (
      React.isValidElement(child) &&
      (child.props as MenuItemProps).value === currentValue
    ) {
      displayedLabel = child.props.children as string;
    }
  });

  const selectBoxClasses = classNames(
    styles.selectBox,
    isOpen ? styles.focused : styles.default,
  );
  const arrowClasses = classNames(styles.arrow, isOpen && styles.open);

  return (
    <div className={styles.root} ref={rootRef}>
      <div className={selectBoxClasses} onClick={toggleOpen}>
        {hasValue && <span>{displayedLabel}</span>}
        <svg
          className={arrowClasses}
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path d="M7 10l5 5 5-5z"></path>
        </svg>
      </div>
      {isOpen && (
        <ul className={styles.menu}>
          {React.Children.map(children, (child, index) => {
            if (!React.isValidElement(child)) return child;

            const props = child.props as MenuItemProps;
            const isActive = props.value === currentValue;
            return React.cloneElement(
              child as React.ReactElement<MenuItemProps>,
              {
                ...props,
                changeHandler: onChange,
                isActive,
                tabIndex: index,
              },
            );
          })}
        </ul>
      )}
    </div>
  );
};
