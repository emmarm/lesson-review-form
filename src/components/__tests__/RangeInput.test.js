import React from 'react';
import { shallow } from 'enzyme';

import RangeInput from '../RangeInput';

describe('RangeInput', () => {
  const props = {
    input: { value: '' },
    className: 'dummy',
    inputId: 'dummy',
    label: 'Dummy Input'
  };
  const wrapper = shallow(<RangeInput {...props} />);

  it('renders RangeInput snapshot correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies class names passed through props', () => {
    const container = wrapper.find('div').first();
    const label = wrapper.find('label').first();
    const input = wrapper.find('input').first();
    const display = wrapper.find('div').last();

    expect(container.hasClass('dummy')).toBeTruthy();
    expect(label.hasClass('dummy__label')).toBeTruthy();
    expect(input.hasClass('dummy__input')).toBeTruthy();
    expect(display.hasClass('dummy__display')).toBeTruthy();
  });

  it('applies value 0 when undefined value is passed in', () => {
    const input = wrapper.find('input').first();
    const display = wrapper.find('div').last();
    expect(input.props().value).toBe('0');
    expect(display.text()).toBe('0');
  });
});
