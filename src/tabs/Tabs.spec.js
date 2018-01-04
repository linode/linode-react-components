import React, { Component } from 'react';
import { mount } from 'enzyme';

import Tabs from './Tabs';

describe('components/Tabs', async () => {
  // eslint-disable-next-line react/prefer-stateless-function
  class Test extends Component {
    render() {
      // eslint-disable-next-line react/prop-types
      return <Tabs tabs={this.props.tabs} onClick={this.props.onClick} />;
    }
  }

  const tabs = [
    { name: 'One', link: '/one' },
    { name: 'Two', link: '/two' },
  ];

  it('renders tabs', () => {
    const dispatch = jest.fn();
    const page = mount(
      <Test
        dispatch={dispatch}
        tabs={tabs}
      />);

    const tabComponents = page.find('Tabs').find('Tab');
    expect(tabComponents.length).toBe(tabs.length);
    tabs.forEach(({ name }, i) => {
      expect(tabComponents.at(i).children().text()).toBe(name);
    });
  });

  it('supports click handling on tabs', () => {
    const handleClick = jest.fn();
    const dispatch = jest.fn();

    const page = mount(
      <Test
        dispatch={dispatch}
        tabs={tabs}
        onClick={handleClick}
      />
    );

    const tabComponents = page.find('Tabs').find('Tab');
    tabComponents.at(0).simulate('click');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
