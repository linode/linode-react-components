import React from 'react';
import { shallow, mount } from 'enzyme';

import PasswordInput from './PasswordInput';

describe('components/forms/PasswordInput', () => {
  it('calls onChange when appropriate', () => {
    const change = jest.fn();
    const input = shallow(
      <PasswordInput
        onChange={change}
        name="password"
        value=""
        name="password"
      />
    );

    input.find('Input').simulate('change', { target: { value: 'password' } });
    expect(change).toHaveBeenCalledTimes(1);
  });

  it('should calculate password strength', () => {
    const input = mount(
      <PasswordInput
        value="correct horse battery staple"
        onChange={() => {}}
        name="password"
      />
    );

    expect(input.find('.PasswordInput-strength--4').length).toBe(1);
    expect(input.find('.PasswordInput-strength-text').length).toBe(1);
    expect(input.find('.PasswordInput-strength-text').text())
      .toBe('This is a very strong password.');
  });
});
