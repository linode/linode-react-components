'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Textarea;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Textarea(props) {
  return _react2.default.createElement(
    'span',
    { className: 'Textarea' },
    _react2.default.createElement('textarea', _extends({}, props, {
      id: props.id || props.name,
      className: 'form-control ' + props.className
    }))
  );
}

Textarea.propTypes = {
  className: _propTypes2.default.string.isRequired,
  id: _propTypes2.default.string,
  name: _propTypes2.default.string
};

Textarea.defaultProps = {
  className: ''
};