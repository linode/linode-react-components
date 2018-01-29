'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Error = require('./Error');

var _Error2 = _interopRequireDefault(_Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('components/Error', function () {
  it('should render without error', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Error2.default, { status: 404 }));

    expect(wrapper).toMatchSnapshot();
  });

  it('renders a 404 component', function () {
    var error = (0, _enzyme.shallow)(_react2.default.createElement(_Error2.default, { status: 404 }));

    expect(error.find('h1').text()).toBe('404');
    expect(error.find('h2').text()).toBe('Whoops!');
    expect(error.find('.Error-body').text()).toBe('The page you\'re trying to reach does not exist.');
  });

  it('renders a 400 component', function () {
    var error = (0, _enzyme.shallow)(_react2.default.createElement(_Error2.default, { status: 400 }));

    expect(error.find('h1').text()).toBe('400');
    expect(error.find('h2').text()).toBe('Doh!');
    expect(error.find('.Error-body').text()).toBe('You are not authorized to access this page.');
  });

  it('renders a 500 component', function () {
    var error = (0, _enzyme.shallow)(_react2.default.createElement(_Error2.default, { status: 500, href: 'foobar' }));

    expect(error.find('h1').text()).toBe('500');
    expect(error.find('h2').text()).toBe('Uh-oh!');
    expect(error.find({ href: 'foobar' }).text()).toBe('contact support');
  });
});