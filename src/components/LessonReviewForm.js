import React from 'react';
import { Field, reduxForm } from 'redux-form';

import RangeInput from './RangeInput';
import RATING_FIELDS from './data/ratingFields';

const renderField = field => (
  <Field
    name={field.inputId}
    component={RangeInput}
    key={field.inputId}
    inputId={field.inputId}
    className="rating-field"
    label={field.label}
    title={field.description}
  />
);

const LessonReviewForm = () => (
  <form className="review-form">
    {RATING_FIELDS.map(field => renderField(field))}
  </form>
);

export default reduxForm({
  form: 'lessonReview'
})(LessonReviewForm);
