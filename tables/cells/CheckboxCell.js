'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CheckboxCell;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _forms = require('../../forms');

var _TableCell = require('./TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CheckboxCell(props) {
  var checked = props.checked,
      column = props.column,
      _onChange = props.onChange,
      record = props.record;


  return _react2.default.createElement(
    _TableCell2.default,
    { className: 'CheckboxCell', column: column, record: record },
    _react2.default.createElement(_forms.Checkbox, {
      checked: checked,
      className: 'TableRow-selector',
      onChange: function onChange(e) {
        _onChange(record, e.target.checked, column);
      }
    })
  );
}

CheckboxCell.propTypes = {
  checked: _propTypes2.default.bool,
  column: _propTypes2.default.object.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  record: _propTypes2.default.object.isRequired
};

CheckboxCell.defaultProps = {
  checked: false
};