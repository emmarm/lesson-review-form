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

const DEFAULT_STATE = {
  fluencyScore: 0,
  pronunScore: 0,
  compScore: 0,
  vocabScore: 0,
  grammarScore: 0
};

class LessonReviewForm extends React.Component {
  state = { ...DEFAULT_STATE };

  onRatingChange = e => {
    const target = e.target;
    const { value, id } = target;

    this.setState(() => ({
      [id + 'Score']: value
    }));
  }

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
            onChange={this.onRatingChange}
            value={this.state[field.inputId + 'Score']}
          />
        ))}
      </form>
    );
  }
}

export default LessonReviewForm;