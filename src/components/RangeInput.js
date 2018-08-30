import React from 'react';

const RangeInput = props => (
  <div>
    <label htmlFor={props.inputId} >
      {props.label}
    </label>
    <input
      id={props.inputId}
      type="range"
      min={0}
      max={10}
      step={1}
    />
  </div>
);

export default RangeInput;