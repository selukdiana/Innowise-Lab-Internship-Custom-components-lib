import React, { createContext, FC, ReactNode, useState } from 'react';
import classNames from 'classnames';
import styles from './FormControl.module.scss';

export interface FormControlProps {
  fullWidth?: boolean;
  children?: ReactNode;
}

export interface FormContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentValue: string | undefined;
  setCurrentValue: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const FormContext = createContext<FormContextType>({
  isOpen: false,
  setIsOpen: () => {},
  currentValue: undefined,
  setCurrentValue: () => {},
});

export const FormControl: FC<FormControlProps> = ({
  fullWidth,
  children = null,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(undefined);

  const formControlClasses = classNames(
    styles.formControl,
    fullWidth && styles.fullWidth,
  );

  return (
    <div className={formControlClasses}>
      <FormContext.Provider
        value={{
          isOpen,
          setIsOpen,
          currentValue,
          setCurrentValue: setCurrentValue as React.Dispatch<
            React.SetStateAction<string | undefined>
          >,
        }}
      >
        {children}
      </FormContext.Provider>
    </div>
  );
};
