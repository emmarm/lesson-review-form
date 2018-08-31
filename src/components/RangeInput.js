import React from 'react';
import PropTypes from 'prop-types';

const RangeInput = props => (
  <div className={props.className}>
    <label
      className={props.className + '__label'}
      htmlFor={props.inputId}
    >
      {props.label}
    </label>
    <input
      id={props.inputId}
      className={props.className + '__input'}
      type="range"
      min={0}
      max={10}
      step={1}
      onChange={props.onChange}
      value={props.value}
    />
    <div className={props.className + '__display'}>
      {props.value}
    </div>
  </div>
);

RangeInput.propTypes = {
  className: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default RangeInput;
