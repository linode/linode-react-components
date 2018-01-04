import React from 'react';
import { mount, shallow } from 'enzyme';

import MassEditDropdown from './MassEditDropdown';

describe('components/lists/MassEditDropdown', function () {
  it('should render without error', () => {
    const wrapper = shallow(
      <MassEditDropdown
        groups={[{ elements: [{ name: 'Test', action: () => { } }] }]}
        onChange={() => { }}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a checkbox and a dropdown', function () {
    const massEditDropdown = mount(
      <MassEditDropdown
        groups={[{ elements: [{ name: 'Test', action: () => { } }] }]}
        onChange={() => { }}
      />
    );

    expect(massEditDropdown.find('input[type="checkbox"]').length).toBe(1);
    expect(massEditDropdown.find('Dropdown').length).toBe(1);
  });

  it('should have a default checked state', function () {
    const massEditDropdown = mount(
      <MassEditDropdown
        groups={[{ elements: [{ name: 'Test', action: () => { } }] }]}
        onChange={() => { }}
      />
    );

    expect(massEditDropdown.props().checked).toBe(false);
  });

  it('should accept a checked state', function () {
    const massEditDropdown = mount(
      <MassEditDropdown
        checked
        groups={[{ elements: [{ name: 'Test', action: () => { } }] }]}
        onChange={() => { }}
      />
    );

    expect(massEditDropdown.props().checked).toBe(true);
  });

  it('should accept an onChange handler', function () {
    const onChange = jest.fn();
    const massEditDropdown = mount(
      <MassEditDropdown
        checked
        groups={[{ elements: [{ name: 'Test', action: () => { } }] }]}
        onChange={onChange}
      />
    );

    massEditDropdown.find('input[type="checkbox"]').simulate('change');

    expect(onChange.mock.calls.length).toBe(1);
    expect(onChange.mock.calls[0][0]).toBe(true);
  });
});
