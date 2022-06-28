import PropTypes from 'prop-types';
import React from 'react';

const Option = (props) => (
  <div className="option-container" key={props.value}>
    <div>{props.label}</div>
    {Boolean(props.subtitle) && (
      <div className="option-subtitle">
        <span>{props.subtitle}</span>
      </div>
    )}
  </div>
);

Option.propTypes = {
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  subtitle: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
};

export default Option;
