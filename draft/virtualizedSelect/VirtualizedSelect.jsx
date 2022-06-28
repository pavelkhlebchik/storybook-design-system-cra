import List from './components/list';
import Option from './components/option';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import classNames from 'classnames';
import './virtualizedSelect.css';

const filterOption = (option, searchValue) =>
  searchValue
    ? option.label.toLowerCase().includes(searchValue.toLowerCase())
    : true;

const VirtualizedSelect = (props) => {
  return (
    <Select
      autosize
      className={classNames('virtualized-select', {
        disabled: props.isDisabled,
        required: props.isRequired,
      })}
      components={{ MenuList: List }}
      defaultValue={props.value}
      filterOption={filterOption}
      formatOptionLabel={Option}
      isDisabled={props.isDisabled}
      noOptionsMessage={() => 'No Options Available'}
      onChange={props.onChange}
      options={props.options}
      placeholder={props.placeholder}
      value={props.value}
    />
  );
};

VirtualizedSelect.propTypes = {
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
    }),
  ).isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.object,
};

export default VirtualizedSelect;
