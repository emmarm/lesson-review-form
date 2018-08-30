import React from 'react';

import RangeInput from './RangeInput';

class LessonReviewForm extends React.Component {
  state = {};

  render() {
    return (
      <form className="review-form">
        <RangeInput
          inputId="test-input"
          label="Test"
        />
      </form>
    );
  }
}

export default LessonReviewForm;