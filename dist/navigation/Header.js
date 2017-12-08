'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header(props) {
  var className = props.className;


  return _react2.default.createElement(
    'div',
    { className: 'Header ' + className },
    !props.infoHeader ? null : _react2.default.createElement(
      'div',
      { className: 'MiniHeader' },
      _react2.default.createElement(
        'div',
        { className: 'container' },
        props.infoHeader
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'MainHeader clearfix' },
      _react2.default.createElement(
        'div',
        { className: 'container' },
        props.children
      )
    ),
    !props.contextHeader ? null : _react2.default.createElement(
      'div',
      { className: 'ContextHeader' },
      _react2.default.createElement(
        'div',
        { className: 'container' },
        props.contextHeader
      )
    )
  );
}

Header.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  infoHeader: _propTypes2.default.node,
  contextHeader: _propTypes2.default.node
};