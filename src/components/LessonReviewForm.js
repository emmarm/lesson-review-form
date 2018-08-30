import React from 'react';

import RangeInput from './RangeInput';

const RATING_FIELDS = [{
  inputId: 'fluency',
  label: 'Fluency'
}, {
  inputId: 'pronun',
  label: 'Pronunciation'
}, {
  inputId: 'comp',
  label: 'Comprehension'
}, {
  inputId: 'vocab',
  label: 'Active Vocabulary'
}, {
  inputId: 'grammar',
  label: 'Active Grammar'
}];

class LessonReviewForm extends React.Component {
  state = {};

  render() {
    return (
      <form className="review-form">
        {RATING_FIELDS.map(field => (
          <RangeInput
            key={field.inputId}
            inputId={field.inputId}
            className="review-form__field"
            labelClass="review-form__label"
            inputClass="review-form__input"
            label={field.label}
          />
        ))}
      </form>
    );
  }
}

export default LessonReviewForm;