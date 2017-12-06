'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ThumbnailCell;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TableCell = require('./TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ThumbnailCell(props) {
  var column = props.column,
      record = props.record;


  var src = column.srcFn(record);

  return _react2.default.createElement(
    _TableCell2.default,
    { className: 'ThumbnailCell', column: column, record: record },
    !src ? null : _react2.default.createElement('img', { src: src, role: 'presentation' })
  );
}

ThumbnailCell.propTypes = {
  column: _propTypes2.default.object.isRequired,
  record: _propTypes2.default.object.isRequired
};