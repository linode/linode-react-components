'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(props) {
  var children = props.children,
      disabled = props.disabled,
      to = props.to,
      onClick = props.onClick,
      className = props.className,
      buttonClass = props.buttonClass,
      type = props.type,
      id = props.id,
      href = props.href;


  var classes = 'btn ' + buttonClass + ' ' + className;

  if (href) {
    return _react2.default.createElement(
      'a',
      { className: classes, id: id, href: href, disabled: disabled },
      children
    );
  }

  return to ? _react2.default.createElement(
    _reactRouter.Link,
    {
      className: classes,
      id: id,
      to: to,
      onClick: onClick,
      disabled: disabled
    },
    children
  ) : _react2.default.createElement(
    'button',
    {
      type: type,
      id: id,
      className: classes,
      onClick: onClick,
      disabled: disabled
    },
    children
  );
}

Button.propTypes = {
  children: _propTypes2.default.node,
  disabled: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  to: _propTypes2.default.string,
  className: _propTypes2.default.string,
  id: _propTypes2.default.string,
  buttonClass: _propTypes2.default.string.isRequired,
  type: _propTypes2.default.string.isRequired,
  href: _propTypes2.default.string
};

Button.defaultProps = {
  disabled: false,
  buttonClass: 'btn-default',
  type: 'button',
  className: '',
  id: ''
};