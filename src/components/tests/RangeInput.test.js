import React from 'react';
import { shallow } from 'enzyme';

import RangeInput from '../RangeInput';

const dummyInput = {
  className: 'dummy',
  inputId: 'dummy',
  label: 'Dummy Input',
  value: 5,
  onChange: () => {}
};

it('renders RangeInput correctly', () => {
  const wrapper = shallow(<RangeInput {...dummyInput} />);
  expect(wrapper).toMatchSnapshot();
});