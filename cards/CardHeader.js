'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CardHeader;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CardHeader(props) {
  return _react2.default.createElement(
    'header',
    { className: 'CardHeader clearfix' },
    _react2.default.createElement(
      'h2',
      { className: 'CardHeader-title float-sm-left' },
      props.title
    ),
    _react2.default.createElement(
      'div',
      { className: 'float-sm-right' },
      props.nav
    )
  );
}

CardHeader.propTypes = {
  title: _propTypes2.default.node,
  className: _propTypes2.default.string,
  nav: _propTypes2.default.node
};