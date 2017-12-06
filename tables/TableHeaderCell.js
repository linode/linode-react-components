'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TableHeaderCell;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TableHeaderCell(props) {
  var className = props.className,
      text = props.text;


  return _react2.default.createElement(
    'th',
    { className: className },
    text
  );
}

TableHeaderCell.propTypes = {
  text: _propTypes2.default.string,
  className: _propTypes2.default.string
};

TableHeaderCell.defaultProps = {
  className: ''
};