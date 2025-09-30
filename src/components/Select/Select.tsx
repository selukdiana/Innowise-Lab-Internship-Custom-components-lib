import React, { FC, useRef, useContext, useEffect, ReactElement } from 'react';
import classNames from 'classnames';

import styles from './Select.module.scss';
import { MenuItemProps, SelectChangeEvent } from '../MenuItem/MenuItem';
import { FormContext } from '../FormControl';

export interface SelectProps {
  label?: string;
  value?: string | number;
  children: ReactElement<MenuItemProps>[];
  id: string;
  labelId: string;
  onChange?: (event: SelectChangeEvent) => void;
}

export const Select: FC<SelectProps> = ({
  value,
  children,
  onChange,
  labelId,
  id,
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const { isOpen, setIsOpen, currentValue, setCurrentValue } =
    useContext(FormContext);
  const hasValue = currentValue !== undefined;
  let displayedLabel = '';

  children.forEach((child) => {
    if (child.props.value === currentValue) {
      displayedLabel = child.props.children as string;
    }
  });

  const toggleOpen = () => {
    setIsOpen?.((prev) => !prev);
  };

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);
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

  const selectBoxClasses = classNames(
    styles.selectBox,
    isOpen ? styles.focused : styles.default,
  );
  const arrowClasses = classNames(styles.arrow, isOpen && styles.open);

  return (
    <div className={styles.root} ref={rootRef}>
      <button
        className={selectBoxClasses}
        onClick={toggleOpen}
        aria-labelledby={labelId}
        id={id}
      >
        {hasValue && <span>{displayedLabel}</span>}
        <svg
          className={arrowClasses}
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path d="M7 10l5 5 5-5z"></path>
        </svg>
      </button>
      {isOpen && (
        <ul className={styles.menu}>
          {children.map((child, index) => {
            const props = child.props;
            const isActive = props.value === currentValue;
            return React.cloneElement(child, {
              ...props,
              changeHandler: onChange,
              isActive,
              tabIndex: index,
            });
          })}
        </ul>
      )}
    </div>
  );
};
