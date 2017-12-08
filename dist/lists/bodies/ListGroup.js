'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ListGroup;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ListGroup(props) {
  var children = props.children,
      name = props.name;


  return _react2.default.createElement(
    'div',
    { className: 'ListGroup' },
    name ? _react2.default.createElement(
      'div',
      { className: 'ListGroup-label' },
      name
    ) : null,
    children
  );
}

ListGroup.propTypes = {
  children: _propTypes2.default.node,
  name: _propTypes2.default.string
};