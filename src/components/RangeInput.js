import React from 'react';

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

export default RangeInput;