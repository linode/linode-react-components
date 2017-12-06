'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = CancelButton;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CancelButton(props) {
  return _react2.default.createElement(
    _Button2.default,
    _extends({}, props, { buttonClass: 'btn-link btn-cancel' }),
    props.children
  );
}

CancelButton.propTypes = {
  children: _propTypes2.default.node
};

CancelButton.defaultProps = {
  children: 'Cancel'
};