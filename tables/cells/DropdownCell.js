'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DropdownCell;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dropdowns = require('../../dropdowns');

var _TableCell = require('./TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DropdownCell(props) {
  var column = props.column,
      record = props.record;


  return _react2.default.createElement(
    _TableCell2.default,
    { className: 'DropdownCell', column: column, record: record },
    _react2.default.createElement(_dropdowns.Dropdown, { groups: column.groups(record) })
  );
}

DropdownCell.propTypes = {
  column: _propTypes2.default.object.isRequired,
  record: _propTypes2.default.object.isRequired
};