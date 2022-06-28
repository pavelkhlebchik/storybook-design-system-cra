import React, { useEffect, useState } from 'react';
// import {OFDButton} from "@/no-typescript/stories/components/button/OFDButton";
import PropTypes from 'prop-types';
import { Button1234 } from './ButtonStyles';

export const Button123 = ({
  children,
  onClick,
  variant,
  isLoading,
  ...rest
}) => {
  const [switchState, setSwitchState] = useState(false);
  // const handleSwitch = (
  //   e: React.MouseEvent<HTMLButtonElement>,
  // ): void => {
  const handleSwitch = (e) => {
    if (!switchState) {
      setSwitchState(true);
      onClick ? onClick(e) : null;
    } else {
      setSwitchState(false);
    }
  };

  if (variant === 'switch') {
    return (
      // <StyledButton
      <Button1234
        onClick={handleSwitch}
        variant={variant}
        switchOn={switchState}
        isLoading={isLoading}
        {...rest}
      >
        {children}
      </Button1234>
      // </StyledButton>
    );
  }
  return (
    // <StyledButton
    <Button1234
      onClick={onClick}
      variant={variant}
      isLoading={isLoading}
      {...rest}
    >
      <span>{children}</span>
    </Button1234>
    // </StyledButton>
  );
};

Button123.propTypes = {
  onClick: PropTypes.func,
  variant: PropTypes.oneOf([
    'filled',
    'outlined',
    'borderless',
    'switch',
  ]),
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'gosotchet',
    'edo',
  ]),
  size: PropTypes.oneOf(['small' | 'large']),
  fullwidth: PropTypes.bool,
  isLoading: PropTypes.bool,
  switchOn: PropTypes.bool,
};
