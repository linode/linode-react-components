'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = List;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function List(props) {
  var children = props.children,
      className = props.className,
      id = props.id;


  return _react2.default.createElement(
    'div',
    { id: id, className: 'List ' + className },
    children
  );
}

List.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  dispatch: _propTypes2.default.func,
  id: _propTypes2.default.string
};

List.defaultProps = {
  className: ''
};