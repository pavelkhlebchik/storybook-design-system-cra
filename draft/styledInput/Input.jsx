import React, { useEffect, useState } from 'react';
import { InputComponent } from './components';
import PropTypes from 'prop-types';

export const Input = ({ value, errorText, ...props }) => {
  const [inputValue, setInputValue] = useState('');
  const [focus, setFocus] = useState(false);
  const [active, setActive] = useState(false);
  useEffect(() => {
    setInputValue(value || '');
  }, [value]);

  const handleFocus = (): void => {
    setFocus(true);
  };
  const handleBlur = (e): void => {
    setFocus(false);
    if (e.currentTarget.value.trim() !== '') {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  return (
    <>
      <InputComponent
        value={inputValue}
        handleValue={setInputValue}
        focus={focus}
        active={active}
        onFocus={handleFocus}
        onBlur={handleBlur}
        errorText={errorText}
        {...props}
      />
    </>
  );
};

Input.propTypes = {
  /**
   * Input value
   */
  value: PropTypes.string,
  /**
   * The text reproduces error
   */
  errorText: PropTypes.string,
};
