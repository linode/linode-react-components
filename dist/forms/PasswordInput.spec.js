'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _linodeComponents = require('linode-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('components/forms/PasswordInput', function () {
  it('calls onChange when appropriate', function () {
    var change = jest.fn();
    var input = (0, _enzyme.shallow)(_react2.default.createElement(_linodeComponents.PasswordInput, _defineProperty({
      onChange: change,
      name: 'password',
      value: ''
    }, 'name', 'password')));

    input.find('Input').simulate('change', { target: { value: 'password' } });
    expect(change).toHaveBeenCalledTimes(1);
  });

  it('should calculate password strength', function () {
    var input = (0, _enzyme.mount)(_react2.default.createElement(_linodeComponents.PasswordInput, {
      value: 'correct horse battery staple',
      onChange: function onChange() {},
      name: 'password'
    }));

    expect(input.find('.PasswordInput-strength--4').length).toBe(1);
    expect(input.find('.PasswordInput-strength-text').length).toBe(1);
    expect(input.find('.PasswordInput-strength-text').text()).toBe('This is a very strong password.');
  });
});