'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ExternalLink;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ExternalLink(props) {
  var children = props.children,
      disabled = props.disabled,
      to = props.to,
      className = props.className,
      id = props.id;


  return _react2.default.createElement(
    'a',
    {
      target: '_blank',
      rel: 'nofollow noopener noreferrer',
      className: className,
      href: to,
      id: id,
      disabled: disabled
    },
    children,
    _react2.default.createElement('i', { className: 'fa fa-external-link' })
  );
}

ExternalLink.propTypes = {
  children: _propTypes2.default.node.isRequired,
  to: _propTypes2.default.string.isRequired,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  id: _propTypes2.default.string
};