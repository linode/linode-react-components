'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PasswordInput;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var str = ['an extremely weak', 'a very weak', 'a weak', 'a strong', 'a very strong'];

function PasswordInput(props) {
  // eslint-disable-next-line no-undef
  var strength = zxcvbn(props.value);

  return _react2.default.createElement(
    'div',
    { className: 'PasswordInput ' + props.className },
    _react2.default.createElement(_Input2.default, {
      value: props.value,
      name: props.name,
      className: 'PasswordInput-input',
      onChange: props.onChange,
      autoComplete: 'off',
      type: 'password',
      disabled: props.disabled,
      id: props.id
    }),
    _react2.default.createElement(
      'div',
      { className: 'PasswordInput-strength PasswordInput-strength--' + strength.score },
      _react2.default.createElement('span', null),
      _react2.default.createElement('span', null),
      _react2.default.createElement('span', null),
      _react2.default.createElement('span', null)
    ),
    props.value === '' ? null : _react2.default.createElement(
      'small',
      { className: 'PasswordInput-strength-text' },
      'This is ',
      str[strength.score],
      ' password.'
    )
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
  className: _propTypes2.default.string
};

PasswordInput.defaultProps = {
  passwordType: 'offline_fast_hashing_1e10_per_second',
  disabled: false,
  className: ''
};