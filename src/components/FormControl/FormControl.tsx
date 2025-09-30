import React, {
  createContext,
  FC,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import classNames from 'classnames';

import styles from './FormControl.module.scss';

export interface FormControlProps {
  fullWidth?: boolean;
  children?: ReactNode;
}

export interface FormContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  currentValue: string | number | undefined;
  setCurrentValue: Dispatch<SetStateAction<string | number | undefined>>;
}

export const FormContext = createContext<FormContextType>({
  isOpen: false,
  setIsOpen: () => {},
  currentValue: undefined,
  setCurrentValue: () => {},
});

export const FormControl: FC<FormControlProps> = ({ fullWidth, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState<undefined | string | number>(
    undefined,
  );

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
          setCurrentValue,
        }}
      >
        {children}
      </FormContext.Provider>
    </div>
  );
};
