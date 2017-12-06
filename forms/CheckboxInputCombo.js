'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CheckboxInputCombo;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CheckboxInputCombo(props) {
  return _react2.default.createElement(
    'div',
    { className: 'CheckboxInputCombo' },
    _react2.default.createElement(_Checkbox2.default, {
      checked: props.checkboxChecked,
      onChange: props.checkboxOnChange,
      label: props.checkboxLabel,
      value: props.checkboxValue
    }),
    _react2.default.createElement(_Input2.default, {
      value: props.inputValue,
      type: props.inputType,
      onChange: props.inputOnChange,
      label: props.inputLabel,
      disabled: !props.checkboxChecked || props.inputDisabled,
      placeholder: props.inputPlaceholder
    })
  );
}

CheckboxInputCombo.propTypes = {
  checkboxOnChange: _propTypes2.default.func.isRequired,
  checkboxLabel: _propTypes2.default.string.isRequired,
  checkboxChecked: _propTypes2.default.bool.isRequired,
  checkboxValue: _propTypes2.default.object,
  inputOnChange: _propTypes2.default.func.isRequired,
  inputValue: _propTypes2.default.any.isRequired,
  inputType: _propTypes2.default.string,
  inputDisabled: _propTypes2.default.bool,
  inputLabel: _propTypes2.default.string,
  inputPlaceholder: _propTypes2.default.string
};