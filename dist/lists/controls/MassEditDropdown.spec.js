'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _MassEditDropdown = require('./MassEditDropdown');

var _MassEditDropdown2 = _interopRequireDefault(_MassEditDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('components/lists/MassEditDropdown', function () {
  it('should render without error', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_MassEditDropdown2.default, {
      groups: [{ elements: [{ name: 'Test', action: function action() {} }] }],
      onChange: function onChange() {}
    }));

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a checkbox and a dropdown', function () {
    var massEditDropdown = (0, _enzyme.mount)(_react2.default.createElement(_MassEditDropdown2.default, {
      groups: [{ elements: [{ name: 'Test', action: function action() {} }] }],
      onChange: function onChange() {}
    }));

    expect(massEditDropdown.find('input[type="checkbox"]').length).toBe(1);
    expect(massEditDropdown.find('Dropdown').length).toBe(1);
  });

  it('should have a default checked state', function () {
    var massEditDropdown = (0, _enzyme.mount)(_react2.default.createElement(_MassEditDropdown2.default, {
      groups: [{ elements: [{ name: 'Test', action: function action() {} }] }],
      onChange: function onChange() {}
    }));

    expect(massEditDropdown.props().checked).toBe(false);
  });

  it('should accept a checked state', function () {
    var massEditDropdown = (0, _enzyme.mount)(_react2.default.createElement(_MassEditDropdown2.default, {
      checked: true,
      groups: [{ elements: [{ name: 'Test', action: function action() {} }] }],
      onChange: function onChange() {}
    }));

    expect(massEditDropdown.props().checked).toBe(true);
  });

  it('should accept an onChange handler', function () {
    var onChange = jest.fn();
    var massEditDropdown = (0, _enzyme.mount)(_react2.default.createElement(_MassEditDropdown2.default, {
      checked: true,
      groups: [{ elements: [{ name: 'Test', action: function action() {} }] }],
      onChange: onChange
    }));

    massEditDropdown.find('input[type="checkbox"]').simulate('change');

    expect(onChange.mock.calls.length).toBe(1);
    expect(onChange.mock.calls[0][0]).toBe(true);
  });
});