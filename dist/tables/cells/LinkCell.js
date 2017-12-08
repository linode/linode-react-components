'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = LinkCell;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tooltips = require('../../tooltips');

var _TableCell = require('./TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function LinkCell(props) {
  var cellIndex = props.cellIndex,
      column = props.column,
      record = props.record;
  var _column$className = column.className,
      className = _column$className === undefined ? '' : _column$className,
      hrefFn = column.hrefFn,
      _column$idKey = column.idKey,
      idKey = _column$idKey === undefined ? 'id' : _column$idKey,
      _column$textKey = column.textKey,
      textKey = _column$textKey === undefined ? 'label' : _column$textKey,
      textFn = column.textFn,
      subtitleFn = column.subtitleFn,
      _column$tooltipEnable = column.tooltipEnabled,
      tooltipEnabled = _column$tooltipEnable === undefined ? false : _column$tooltipEnable;


  var children = props.children;
  if (!children) {
    if (textFn) {
      children = textFn(record);
    } else {
      children = record[textKey];
    }
  }

  var name = record[textKey];
  var tooltipComponent = void 0;
  var tooltipAttributes = void 0;
  var tooltipEnabledClass = '';
  if (tooltipEnabled) {
    var tooltipId = 'tooltip-' + record[idKey] + '-' + cellIndex;
    var idText = 'ID: ' + record[idKey];
    var tooltipText = _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        null,
        name
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
      className: 'LinkCell ' + className + ' ' + tooltipEnabledClass,
      column: column,
      record: record
    },
    _react2.default.createElement(
      _reactRouter.Link,
      _extends({ to: hrefFn(record) }, tooltipAttributes),
      children
    ),
    tooltipComponent,
    subtitleFn ? _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'small',
        null,
        subtitleFn(record)
      )
    ) : null
  );
}

LinkCell.propTypes = {
  cellIndex: _propTypes2.default.number,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  column: _propTypes2.default.shape({
    disableTooltip: _propTypes2.default.bool,
    hrefFn: _propTypes2.default.func.isRequired,
    textKey: _propTypes2.default.string,
    // TODO: consider generalizing textFn for formatting
    textFn: _propTypes2.default.func,
    subtitleFn: _propTypes2.default.func
  }).isRequired,
  record: _propTypes2.default.object.isRequired
};