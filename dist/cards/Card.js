'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Card;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Card(props) {
  return _react2.default.createElement(
    'div',
    { className: 'Card ' + props.className, id: props.id },
    props.header,
    _react2.default.createElement(
      'div',
      { className: 'Card-body' },
      props.children
    )
  );
}

Card.propTypes = {
  className: _propTypes2.default.string,
  id: _propTypes2.default.string,
  children: _propTypes2.default.node,
  header: _propTypes2.default.node
};

Card.defaultProps = {
  className: ''
};