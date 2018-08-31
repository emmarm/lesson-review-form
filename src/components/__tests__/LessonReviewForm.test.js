import React from 'react';
import { shallow } from 'enzyme';

import LessonReviewForm from '../LessonReviewForm';

it('renders LessonReviewForm correctly', () => {
  const wrapper = shallow(<LessonReviewForm />);
  expect(wrapper).toMatchSnapshot();
});