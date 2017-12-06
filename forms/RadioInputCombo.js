'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RadioInputCombo;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Radio = require('./Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RadioInputCombo(props) {
  return _react2.default.createElement(
    'div',
    { className: 'RadioInputCombo' },
    _react2.default.createElement(_Radio2.default, {
      name: props.radioName,
      value: props.radioValue,
      checked: props.radioChecked,
      onChange: props.radioOnChange,
      label: props.radioLabel
    }),
    _react2.default.createElement(_Input2.default, {
      id: props.inputId,
      name: props.inputName,
      value: props.inputValue,
      onChange: props.inputOnChange,
      label: props.inputLabel,
      disabled: props.inputDisabled,
      type: props.inputType,
      placeholder: props.inputPlaceholder
    })
  );
}

RadioInputCombo.propTypes = {
  radioName: _propTypes2.default.string,
  radioOnChange: _propTypes2.default.func.isRequired,
  radioLabel: _propTypes2.default.string.isRequired,
  radioChecked: _propTypes2.default.bool.isRequired,
  radioValue: _propTypes2.default.object,
  inputOnChange: _propTypes2.default.func.isRequired,
  inputId: _propTypes2.default.string,
  inputName: _propTypes2.default.string,
  inputValue: _propTypes2.default.any.isRequired,
  inputDisabled: _propTypes2.default.bool,
  inputLabel: _propTypes2.default.string,
  inputType: _propTypes2.default.string,
  inputPlaceholder: _propTypes2.default.string
};