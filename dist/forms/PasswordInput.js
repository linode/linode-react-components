'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PasswordInput;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isNumber = require('lodash/isNumber');

var _isNumber2 = _interopRequireDefault(_isNumber);

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var str = ['an extremely weak', 'a very weak', 'a weak', 'a strong', 'a very strong'];

var PasswordStrength = function PasswordStrength(_ref) {
  var strength = _ref.strength;

  return [_react2.default.createElement(
    'div',
    { className: 'PasswordInput-strength PasswordInput-strength--' + strength },
    _react2.default.createElement('span', null),
    _react2.default.createElement('span', null),
    _react2.default.createElement('span', null),
    _react2.default.createElement('span', null)
  ), _react2.default.createElement(
    'small',
    { className: 'PasswordInput-strength-text' },
    'This is ',
    str[strength],
    ' password.'
  )];
};

function PasswordInput(_ref2) {
  var name = _ref2.name,
      className = _ref2.className,
      disabled = _ref2.disabled,
      onChange = _ref2.onChange,
      id = _ref2.id,
      strength = _ref2.strength,
      value = _ref2.value;

  var showStrength = !(0, _isEmpty2.default)(value) && (0, _isNumber2.default)(strength);

  return _react2.default.createElement(
    'div',
    { className: 'PasswordInput ' + className },
    _react2.default.createElement(_Input2.default, {
      value: value,
      name: name,
      className: 'PasswordInput-input',
      onChange: onChange,
      autoComplete: 'off',
      type: 'password',
      disabled: disabled,
      id: id
    }),
    showStrength && _react2.default.createElement(PasswordStrength, { strength: strength })
  );
}

PasswordInput.propTypes = {
  onChange: _propTypes2.default.func.isRequired,
  value: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  errors: _propTypes2.default.object,
  errorField: _propTypes2.default.string,
  passwordType: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  className: _propTypes2.default.string,
  strength: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool])
};

PasswordInput.defaultProps = {
  passwordType: 'offline_fast_hashing_1e10_per_second',
  disabled: false,
  className: ''
};