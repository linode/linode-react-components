'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LinkButton;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LinkButton(props) {
  var children = props.children,
      disabled = props.disabled,
      to = props.to,
      onClick = props.onClick,
      className = props.className,
      id = props.id;


  return _react2.default.createElement(
    _Button2.default,
    {
      className: className,
      buttonClass: 'btn-link',
      onClick: onClick,
      to: to,
      id: id,
      disabled: disabled
    },
    children
  );
}

LinkButton.propTypes = {
  children: _propTypes2.default.node,
  disabled: _propTypes2.default.bool,
  to: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  className: _propTypes2.default.string,
  id: _propTypes2.default.string
};