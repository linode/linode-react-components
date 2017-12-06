'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ListBody;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ListBody(props) {
  return _react2.default.createElement(
    'div',
    { className: 'List-body' },
    props.children
  );
}

ListBody.propTypes = {
  children: _propTypes2.default.node
};