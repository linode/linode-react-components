'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ListHeader;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ListHeader(props) {
  return _react2.default.createElement(
    'header',
    { className: 'List-header' },
    props.children
  );
}

ListHeader.propTypes = {
  children: _propTypes2.default.node
};