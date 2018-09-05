import React from 'react';
import { shallow } from 'enzyme';

import { LessonReviewForm } from '../LessonReviewForm';
import RATING_FIELDS from '../data/ratingFields';

describe('LessonReviewForm', () => {
  const wrapper = shallow(<LessonReviewForm />);

  it('renders LessonReviewForm snapshot correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders a RangeInput for each ratingField', () => {
    const ratingFields = wrapper.find('.rating-field');
    expect(ratingFields.length).toEqual(RATING_FIELDS.length);
  });
});
