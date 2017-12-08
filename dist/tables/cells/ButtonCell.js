'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ButtonCell;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _buttons = require('../../buttons');

var _TableCell = require('./TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ButtonCell(props) {
  var column = props.column,
      record = props.record;
  var buttonClassName = column.buttonClassName,
      isDisabledFn = column.isDisabledFn,
      text = column.text,
      _onClick = column.onClick,
      hrefFn = column.hrefFn;

  var to = void 0;
  if (hrefFn) {
    to = hrefFn(record);
  }

  var disabled = false;
  if (isDisabledFn) {
    disabled = isDisabledFn(record);
  }

  return _react2.default.createElement(
    _TableCell2.default,
    { className: 'ButtonCell', column: column, record: record },
    _react2.default.createElement(
      _buttons.Button,
      {
        className: buttonClassName,
        disabled: disabled,
        onClick: function onClick() {
          if (_onClick) {
            _onClick(record);
          }
        },
        to: to
      },
      text
    )
  );
}

ButtonCell.propTypes = {
  column: _propTypes2.default.shape({
    buttonClassName: _propTypes2.default.string,
    text: _propTypes2.default.string.isRequired,
    onClick: _propTypes2.default.func
  }),
  isDisabledFn: _propTypes2.default.func,
  record: _propTypes2.default.object
};