import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

export const Input = (props) => {
  const { onChange, type, value } = props;
  return (
    <input
      onChange={(e) => onChange(e.target.value)}
      type={type}
      value={value}
    />
  );
};

Input.propTypes = {
  onChange: PropTypes.func,
  type: PropTypes.oneOf([
    'name',
    'password',
    'button',
    'checkbox',
    'color',
  ]),
  value: PropTypes.string,
};

Input.defaultProps = {
  backgroundColor: null,
};
