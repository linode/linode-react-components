'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Table;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TableHeaderRow = require('./TableHeaderRow');

var _TableHeaderRow2 = _interopRequireDefault(_TableHeaderRow);

var _TableRow = require('./TableRow');

var _TableRow2 = _interopRequireDefault(_TableRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderRows(columns, data, onToggleSelect, selectedMap) {
  return data.map(function (record, index) {
    return _react2.default.createElement(_TableRow2.default
    // assumes that if one record in the collection does not have an id,
    // than no records should have an id, and all keys will fallback to
    // index usage
    , { key: record.id || index,
      index: index,
      columns: columns,
      record: record,
      onToggleSelect: onToggleSelect,
      selectedMap: selectedMap
    });
  });
}

function Table(props) {
  var className = props.className,
      columns = props.columns,
      data = props.data,
      disableHeader = props.disableHeader,
      id = props.id,
      noDataMessage = props.noDataMessage,
      onToggleSelect = props.onToggleSelect,
      selectedMap = props.selectedMap,
      _props$renderRowsFn = props.renderRowsFn,
      renderRowsFn = _props$renderRowsFn === undefined ? renderRows : _props$renderRowsFn;


  var tableContent = void 0;
  if (!data.length) {
    tableContent = _react2.default.createElement(
      'p',
      null,
      noDataMessage
    );
  } else {
    tableContent = _react2.default.createElement(
      'table',
      { id: id, className: 'Table ' + (disableHeader ? 'Table--noHeader' : '') + ' ' + className },
      _react2.default.createElement(
        'thead',
        null,
        _react2.default.createElement(_TableHeaderRow2.default, { columns: columns, disableHeader: disableHeader })
      ),
      _react2.default.createElement(
        'tbody',
        null,
        renderRowsFn(columns, data, onToggleSelect, selectedMap)
      )
    );
  }

  return tableContent;
}

Table.propTypes = {
  className: _propTypes2.default.string,
  columns: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    cellComponent: _propTypes2.default.any,
    onChange: _propTypes2.default.func,
    className: _propTypes2.default.string,
    dataKey: _propTypes2.default.string,
    formatFn: _propTypes2.default.func
  })),
  data: _propTypes2.default.array.isRequired,
  disableHeader: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  noDataMessage: _propTypes2.default.string,
  onToggleSelect: _propTypes2.default.func,
  selectedMap: _propTypes2.default.object
};

Table.defaultProps = {
  className: '',
  disableHeader: false,
  noDataMessage: 'No data found.'
};