import React from 'react';
import { StyledInputError } from './InputErrorStyles';
import PropTypes from 'prop-types';

export const InputError = ({ errorText }) => (
  <StyledInputError>{errorText}</StyledInputError>
);

InputError.propTypes = {
  /**
   * Error text
   */
  errorText: PropTypes.string,
};
