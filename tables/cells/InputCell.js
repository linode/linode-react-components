'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InputCell;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _forms = require('linode-components/forms');

var _TableCell = require('./TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InputCell(props) {
  var column = props.column,
      _onChange = props.onChange,
      placeholder = props.placeholder,
      record = props.record,
      value = props.value;


  return _react2.default.createElement(
    _TableCell2.default,
    { column: column, record: record },
    _react2.default.createElement(_forms.Input, {
      onChange: function onChange(e) {
        _onChange(record, e.target.value);
      },
      placeholder: placeholder,
      value: value
    })
  );
}

InputCell.propTypes = {
  column: _propTypes2.default.object.isRequired,
  onChange: _propTypes2.default.func,
  placeholder: _propTypes2.default.string,
  record: _propTypes2.default.object.isRequired,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};