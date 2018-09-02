import React from 'react';
import { Field, reduxForm } from 'redux-form';

import RangeInput from './RangeInput';

const RATING_FIELDS = [
  {
    inputId: 'fluency',
    label: 'Fluency'
  },
  {
    inputId: 'pronun',
    label: 'Pronunciation'
  },
  {
    inputId: 'comp',
    label: 'Comprehension'
  },
  {
    inputId: 'vocab',
    label: 'Active Vocabulary'
  },
  {
    inputId: 'grammar',
    label: 'Active Grammar'
  }
];

const LessonReviewForm = () => (
  <form className="review-form">
    {RATING_FIELDS.map(field => (
      <Field
        name={field.inputId}
        component={RangeInput}
        key={field.inputId}
        inputId={field.inputId}
        className="rating-field"
        label={field.label}
      />
    ))}
  </form>
);

export default reduxForm({
  form: 'lessonReview'
})(LessonReviewForm);
