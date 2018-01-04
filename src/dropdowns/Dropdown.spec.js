import React from 'react';
import { shallow, mount } from 'enzyme';

import Dropdown from './Dropdown';
import Button from '../buttons/Button';

describe('components/Dropdown', () => {
  it('should render without error', () => {
    const wrapper = shallow(
      <Dropdown
        groups={[
          { elements: [{ action: () => { }, name: 'Drew' }] },
          {
            elements: [
              { action: () => { }, name: 'Phil' },
              { action: () => { }, name: 'Will' },
            ],
          },
        ]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders dropdown component 2', () => {
    const dropdown = mount(
      <Dropdown
        groups={[
          { elements: [{ action: () => { }, name: 'Drew' }] },
          {
            elements: [
              { action: () => { }, name: 'Phil' },
              { action: () => { }, name: 'Will' },
            ],
          },
        ]}
      />
    );

    // Should find two buttons.
    expect(dropdown.findWhere((n) => n.type() === Button && n.text() === 'Drew').length).toBe(1);

    expect(dropdown.find('.Dropdown-item').length).toBe(3);
    expect(dropdown.find('.Dropdown-item').at(1).text()).toBe('Phil');
    expect(dropdown.find('.Dropdown-item').at(2).text()).toBe('Will');
  });

  it('clickable dropdown', () => {
    const clickFirst = jest.fn();
    const clickBodyItem = jest.fn();
    const unclicked = jest.fn();
    const dropdown = shallow(
      <Dropdown
        groups={[
          { elements: [{ action: clickFirst, name: 'Drew' }] },
          {
            elements: [
              { action: clickBodyItem, name: 'Phil' },
              { action: unclicked, name: 'Will' },
            ],
          },
        ]}
      />
    );

    // Click first item should trigger clickFirst
    dropdown.find('.Dropdown-first').simulate('click');
    // Click toggle should open body
    dropdown.find('.Dropdown-toggle').simulate('click');
    // Click first menu item should trigger clickBodyItem
    dropdown.find('.Dropdown-item').at(1).simulate('mousedown');
    // Last menu item goes unclicked

    expect(clickFirst).toHaveBeenCalledTimes(1);
    expect(dropdown.find('.Dropdown--open').length).toBe(1);
    expect(clickBodyItem).toHaveBeenCalledTimes(1);
    expect(unclicked).toHaveBeenCalledTimes(0);

    // Mousedown did not hide dropdown
    expect(dropdown.find('.Dropdown--open').length).toBe(1);
    // But onblur does
    dropdown.find('.Dropdown').simulate('blur');
    expect(dropdown.find('.Dropdown--open').length).toBe(0);
  });

  it('closes on second click', () => {
    const noAction = () => { };
    const dropdown = shallow(
      <Dropdown
        groups={[
          { elements: [{ action: noAction, name: '' }] },
          { elements: [{ action: noAction, name: '' }] },
        ]}
      />
    );

    dropdown.find('.Dropdown-toggle').simulate('click');
    expect(dropdown.find('.Dropdown--open').length).toBe(1);
    dropdown.find('.Dropdown-toggle').simulate('click');
    expect(dropdown.find('.Dropdown--open').length).toBe(0);
  });

  it('closes on blur', () => {
    const noAction = () => { };
    const dropdown = shallow(
      <Dropdown
        groups={[
          { elements: [{ action: noAction, name: '' }] },
          { elements: [{ action: noAction, name: '' }] },
        ]}
      />
    );

    const toggle = dropdown.findWhere((n) => {
      return n.type() === Button && n.hasClass('Dropdown-toggle');
    });

    toggle.simulate('click');
    expect(dropdown.find('.Dropdown--open').length).toBe(1);

    dropdown.simulate('blur');
    expect(dropdown.find('.Dropdown--open').length).toBe(0);
  });
});
