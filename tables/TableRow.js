'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cells = require('./cells');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableRow = function (_Component) {
  _inherits(TableRow, _Component);

  function TableRow() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TableRow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TableRow.__proto__ || Object.getPrototypeOf(TableRow)).call.apply(_ref, [this].concat(args))), _this), _this.onCheckboxChange = function (record, checked) {
      var onToggleSelect = _this.props.onToggleSelect;


      if (onToggleSelect) {
        onToggleSelect(record, checked);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TableRow, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          columns = _props.columns,
          onClick = _props.onClick,
          record = _props.record,
          selectedMap = _props.selectedMap;

      var checkboxColumn = columns.filter(function (column) {
        return column.cellComponent && column.cellComponent === _cells.CheckboxCell && !column.onChange;
      })[0];

      var selected = void 0;
      if (checkboxColumn) {
        var _checkboxColumn$selec = checkboxColumn.selectedKey,
            selectedKey = _checkboxColumn$selec === undefined ? 'id' : _checkboxColumn$selec,
            selectedKeyFn = checkboxColumn.selectedKeyFn;


        if (selectedKeyFn) {
          selected = selectedMap[selectedKeyFn(record)];
        } else {
          selected = selectedMap[record[selectedKey]];
        }
      }

      var selectedClass = selected ? 'TableRow--selected' : '';
      return _react2.default.createElement(
        'tr',
        { className: 'TableRow ' + className + ' ' + selectedClass, onClick: onClick },
        columns.map(function (column, index) {
          // rendering options from most to least specific

          // dependency injected component class or function
          if (column.cellComponent) {
            if (column.cellComponent === _cells.CheckboxCell) {
              return _react2.default.createElement(column.cellComponent, {
                key: index,
                cellIndex: index,
                checked: record[column.dataKey] || selected,
                column: column,
                record: record,
                onChange: column.onChange || _this2.onCheckboxChange
              });
            }

            return _react2.default.createElement(column.cellComponent, {
              key: index,
              cellIndex: index,
              column: column,
              record: record
            });
          }

          // default table cell
          return _react2.default.createElement(_cells.TableCell, {
            key: index,
            cellIndex: index,
            column: column,
            record: record
          });
        })
      );
    }
  }]);

  return TableRow;
}(_react.Component);

exports.default = TableRow;


TableRow.propTypes = {
  className: _propTypes2.default.string,
  columns: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
  onToggleSelect: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  record: _propTypes2.default.object.isRequired,
  selectedMap: _propTypes2.default.object
};

TableRow.defaultProps = {
  className: ''
};