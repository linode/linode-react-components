'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ConfirmModalBody;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormModalBody = require('./FormModalBody');

var _FormModalBody2 = _interopRequireDefault(_FormModalBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ConfirmModalBody(props) {
  return _react2.default.createElement(_FormModalBody2.default, _extends({
    buttonText: 'Confirm',
    buttonDisabledText: 'Confirmed'
  }, props));
}