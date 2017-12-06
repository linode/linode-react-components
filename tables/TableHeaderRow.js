'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TableHeaderRow;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TableHeaderCell = require('./TableHeaderCell');

var _TableHeaderCell2 = _interopRequireDefault(_TableHeaderCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TableHeaderRow(props) {
  var columns = props.columns,
      disableHeader = props.disableHeader;


  return _react2.default.createElement(
    'tr',
    null,
    columns.map(function (column, index) {
      return _react2.default.createElement(_TableHeaderCell2.default, {
        className: column.headerClassName,
        key: index,
        text: disableHeader ? undefined : column.label
      });
    })
  );
}

TableHeaderRow.propTypes = {
  columns: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    label: _propTypes2.default.string
  })).isRequired,
  disableHeader: _propTypes2.default.bool
};