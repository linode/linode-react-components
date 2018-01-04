import React from 'react';
import { shallow } from 'enzyme';

import Error from './Error';

describe('components/Error', () => {
  it('should render without error', () => {
    const wrapper = shallow(
      <Error status={404} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders a 404 component', () => {
    const error = shallow(<Error status={404} />);

    expect(error.find('h1').text()).toBe('404');
    expect(error.find('h2').text()).toBe('Whoops!');
    expect(error.find('.Error-body').text())
      .toBe('The page you\'re trying to reach does not exist.');
  });

  it('renders a 400 component', () => {
    const error = shallow(<Error status={400} />);

    expect(error.find('h1').text()).toBe('400');
    expect(error.find('h2').text()).toBe('Doh!');
    expect(error.find('.Error-body').text()).toBe('You are not authorized to access this page.');
  });

  it('renders a 500 component', () => {
    const error = shallow(<Error status={500} href="foobar" />);

    expect(error.find('h1').text()).toBe('500');
    expect(error.find('h2').text()).toBe('Uh-oh!');
    expect(error.find({ href: 'foobar' }).text()).toBe('contact support');
  });
});
