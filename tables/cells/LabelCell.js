'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LabelCell;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tooltips = require('../../tooltips');

var _TableCell = require('./TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LabelCell(props) {
  var cellIndex = props.cellIndex,
      column = props.column,
      record = props.record;
  var _column$className = column.className,
      className = _column$className === undefined ? '' : _column$className,
      textFn = column.textFn,
      _column$dataKey = column.dataKey,
      dataKey = _column$dataKey === undefined ? 'name' : _column$dataKey,
      _column$tooltipEnable = column.tooltipEnabled,
      tooltipEnabled = _column$tooltipEnable === undefined ? false : _column$tooltipEnable;


  var children = props.children;
  if (!children) {
    if (textFn) {
      children = textFn(record);
    } else {
      children = record[dataKey];
    }
  }

  var idText = record.id ? _react2.default.createElement(
    'div',
    null,
    'ID: ',
    record.id
  ) : null;
  var tooltipComponent = void 0;
  var tooltipAttributes = void 0;
  var tooltipEnabledClass = '';
  if (tooltipEnabled) {
    var tooltipId = 'tooltip-' + record.id + '-' + cellIndex;
    var tooltipText = _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        null,
        children
      ),
      idText
    );

    tooltipEnabledClass = 'TooltipEnabled';
    tooltipAttributes = { 'data-tip': true, 'data-for': tooltipId };
    tooltipComponent = _react2.default.createElement(
      _tooltips.Tooltip,
      { id: tooltipId },
      tooltipText
    );
  }

  return _react2.default.createElement(
    _TableCell2.default,
    {
      cellIndex: cellIndex,
      className: 'LabelCell ' + className + ' ' + tooltipEnabledClass,
      column: column,
      record: record
    },
    _react2.default.createElement(
      'span',
      tooltipAttributes,
      children
    ),
    tooltipComponent
  );
}

LabelCell.propTypes = {
  cellIndex: _propTypes2.default.number,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  column: _propTypes2.default.shape({
    disableTooltip: _propTypes2.default.bool
  }),
  record: _propTypes2.default.object.isRequired
};