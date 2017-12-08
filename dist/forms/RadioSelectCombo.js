'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RadioSelectCombo;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Radio = require('./Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function RadioSelectCombo(props) {
  return _react2.default.createElement(
    'div',
    { className: 'RadioSelectCombo clearfix' },
    _react2.default.createElement(_Radio2.default, {
      className: 'float-sm-left',
      value: props.radioValue,
      checked: props.radioChecked,
      onChange: props.radioOnChange,
      label: props.radioLabel
    }),
    _react2.default.createElement(_Select2.default, {
      id: props.selectId,
      value: props.selectValue,
      onChange: props.selectOnChange,
      label: props.selectLabel,
      disabled: props.selectDisabled,
      options: props.selectOptions
    })
  );
}

RadioSelectCombo.propTypes = {
  radioOnChange: _propTypes2.default.func.isRequired,
  radioLabel: _propTypes2.default.string.isRequired,
  radioChecked: _propTypes2.default.bool.isRequired,
  radioValue: _propTypes2.default.object,
  selectOnChange: _propTypes2.default.func.isRequired,
  selectId: _propTypes2.default.string,
  selectValue: _propTypes2.default.any.isRequired,
  selectOptions: _propTypes2.default.any,
  selectDisabled: _propTypes2.default.bool,
  selectLabel: _propTypes2.default.string
};

RadioSelectCombo.defaultProps = {
  selectLabel: '',
  selectChildren: null
};