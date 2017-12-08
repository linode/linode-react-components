'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TableCell;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TableCell(props) {
  var _props$className = props.className,
      className = _props$className === undefined ? '' : _props$className,
      column = props.column,
      record = props.record;
  var formatFn = column.formatFn;

  var columnClassName = column.className || '';

  // TODO: add dynamic class name based on column type ( numeric/text/etc )
  var children = props.children;
  if (!children) {
    if (column.dataKey) {
      children = record[column.dataKey];
    } else if (column.dataFn) {
      children = column.dataFn(record);
    }

    if (formatFn) {
      children = formatFn(children);
    }
  }

  return _react2.default.createElement(
    'td',
    {
      className: 'TableCell ' + className + ' ' + columnClassName
    },
    _react2.default.createElement(
      'div',
      { className: 'TableCell-content' },
      children
    )
  );
}

TableCell.propTypes = {
  cellIndex: _propTypes2.default.number,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  column: _propTypes2.default.shape({
    className: _propTypes2.default.string,
    dataKey: _propTypes2.default.string,
    dataFn: _propTypes2.default.func,
    disableTooltip: _propTypes2.default.bool
  }).isRequired,
  formatFn: _propTypes2.default.func,
  record: _propTypes2.default.shape({
    id: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
  }).isRequired,
  title: _propTypes2.default.string
};