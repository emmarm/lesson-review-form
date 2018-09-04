import React from 'react';
import PropTypes from 'prop-types';

const RangeInput = ({ input, className, inputId, label, title }) => (
  <div className={className}>
    <label className={className + '__label'} htmlFor={inputId} title={title}>
      {label}
    </label>
    <input
      {...input}
      id={inputId}
      className={className + '__input'}
      type="range"
      min={0}
      max={10}
      step={1}
      value={input.value || '0'}
    />
    <div className={className + '__display'}>{input.value || '0'}</div>
  </div>
);

RangeInput.propTypes = {
  className: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default RangeInput;
