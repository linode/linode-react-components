'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SubmitButton;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _buttons = require('../buttons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SubmitButton(props) {
  return _react2.default.createElement(
    _buttons.Button,
    {
      type: 'submit',
      className: 'btn ' + props.className,
      disabled: props.disabled,
      onClick: props.onClick
    },
    props.disabled ? props.disabledChildren : props.children
  );
}

SubmitButton.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  disabledChildren: _propTypes2.default.string,
  onClick: _propTypes2.default.func
};

SubmitButton.defaultProps = {
  children: 'Save',
  disabledChildren: 'Saving',
  className: 'btn-default',
  disabled: false
};