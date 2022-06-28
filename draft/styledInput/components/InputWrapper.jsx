import React from 'react';
import { StyledInputWrapper } from './InputWrapperStyles';
import { Label, InputField, InputError } from './components';
import PropTypes from 'prop-types';

export const InputWrapper = ({
  label,
  disabled,
  value,
  handleValue,
  active,
  focus,
  errorText,
  ...props
}) => {
  return (
    <StyledInputWrapper>
      {label && (
        <Label
          active={active || value !== ''}
          focused={focus}
          disabled={disabled}
        >
          {label}
        </Label>
      )}
      <InputField
        disabled={disabled}
        value={value}
        handleValue={handleValue}
        hasError={!!errorText}
        {...props}
      />
      <InputError errorText={errorText} />
    </StyledInputWrapper>
  );
};

InputWrapper.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  active: PropTypes.bool,
  focus: PropTypes.bool,
  errorText: PropTypes.string,
  hasError: PropTypes.bool,
  handleValue: PropTypes.func,
};
