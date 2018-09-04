import React from 'react';
import { shallow } from 'enzyme';

import RangeInput from '../RangeInput';

describe('RangeInput', () => {
  let wrapper;
  it('renders RangeInput correctly', () => {
    const props = {
      input: { value: '' },
      className: 'dummy',
      inputId: 'dummy',
      label: 'Dummy Input'
    };
    wrapper = shallow(<RangeInput {...props} />);
    expect(wrapper).toMatchSnapshot();
    expect(
      wrapper
        .find('div')
        .first()
        .hasClass('dummy')
    ).toBeTruthy();
    expect(
      wrapper
        .find('label')
        .first()
        .hasClass('dummy__label')
    ).toBeTruthy();
    expect(
      wrapper
        .find('input')
        .first()
        .hasClass('dummy__input')
    ).toBeTruthy();
    const display = wrapper.find('div').last();
    expect(display.hasClass('dummy__display')).toBeTruthy();
    expect(display.text()).toBe('0');
  });
});
