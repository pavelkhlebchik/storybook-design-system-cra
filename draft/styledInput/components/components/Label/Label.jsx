import React from 'react';
import { StyledLabel } from './LabelStyles';
import PropTypes from 'prop-types';

export const Label = ({ children, active, focused, disabled }) => {
  return (
    <StyledLabel
      active={active}
      focused={focused}
      disabled={disabled}
    >
      {children}
    </StyledLabel>
  );
};

Label.propTypes = {
  /**
   * Is this label active?
   */
  active: PropTypes.bool,
  /**
   * Does it have children?
   */
  children: PropTypes.array,
  /**
   * Is that focused on it?
   */
  focused: PropTypes.bool,
  /**
   * Is it disabled?
   */
  disabled: PropTypes.bool,
  /**
   * How is it disabled?
   */
  disableType: PropTypes.string,
};
