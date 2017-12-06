'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AnchorCell;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TableCell = require('./TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AnchorCell(props) {
  var column = props.column,
      record = props.record;
  var _onClick = column.onClick,
      _column$titleKey = column.titleKey,
      titleKey = _column$titleKey === undefined ? 'id' : _column$titleKey,
      _column$textKey = column.textKey,
      textKey = _column$textKey === undefined ? 'label' : _column$textKey;


  return _react2.default.createElement(
    _TableCell2.default,
    { column: column, record: record },
    _react2.default.createElement(
      'button',
      {
        className: 'TableRow-label btn btn-link',
        onClick: function onClick() {
          _onClick(record);
        },
        title: record[titleKey]
      },
      props.children || record[textKey]
    )
  );
}

AnchorCell.propTypes = {
  children: _propTypes2.default.node,
  column: _propTypes2.default.shape({
    onClick: _propTypes2.default.func,
    titleKey: _propTypes2.default.string,
    textKey: _propTypes2.default.string
  }).isRequired,
  record: _propTypes2.default.object.isRequired
};