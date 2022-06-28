import React from 'react';
import { StyledInputField } from './InputFieldStyles';

import PropTypes from 'prop-types';

export const InputField = ({
  value,
  handleValue,
  placeholder,
  type,
  ...props
}) => {
  const handleInput = {
    // (
    // e: React.FormEvent<HTMLInputElement>,
    // ): void => {
    if(handleValue) {
      handleValue(e.currentTarget.value);
    },
  };

  return (
    <StyledInputField
      value={value}
      type={type}
      placeholder={placeholder}
      onInput={handleInput}
      {...props}
    />
  );
};

InputField.propTypes = {
  /**
   * Value of the input
   */
  value: PropTypes.string,
  /**
   * How to handle value
   */
  handleValue: PropTypes.func,
  /**
   * Placeholder for no-value
   */
  placeholder: PropTypes.string,
  /**
   * Types
   */
  type: PropTypes.oneOf([
    'name',
    'password',
    'button',
    'checkbox',
    'color',
  ]),
};
