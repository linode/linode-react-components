'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _MassEditDropdown = require('./MassEditDropdown');

var _MassEditDropdown2 = _interopRequireDefault(_MassEditDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MassEditControl = function (_Component) {
  _inherits(MassEditControl, _Component);

  function MassEditControl() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MassEditControl);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MassEditControl.__proto__ || Object.getPrototypeOf(MassEditControl)).call.apply(_ref, [this].concat(args))), _this), _this.onMassEditChange = function () {
      var _this$props = _this.props,
          data = _this$props.data,
          dispatch = _this$props.dispatch,
          objectType = _this$props.objectType,
          selectedMap = _this$props.selectedMap,
          selectedKey = _this$props.selectedKey,
          toggleSelected = _this$props.toggleSelected;


      var allSelected = _this.allSelected();
      var noneSelected = _this.noneSelected();
      var indeterminate = !allSelected && !noneSelected;

      var selected = data;

      // Uncheck all those that have been unchecked if in indeterminate state.
      if (indeterminate) {
        selected = selected.filter(function (record) {
          return selectedMap[record[selectedKey]];
        });
      }

      selected = selected.map(function (record) {
        return record[selectedKey];
      });

      dispatch(toggleSelected(objectType, selected));
    }, _this.allSelected = function () {
      return _this.props.data.every(function (record) {
        return _this.props.selectedMap[record[_this.props.selectedKey]];
      });
    }, _this.noneSelected = function () {
      return Object.keys(_this.props.selectedMap).length === 0;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MassEditControl, [{
    key: 'createMassEditActionHandler',
    value: function createMassEditActionHandler(fn) {
      var _this2 = this;

      return function () {
        var _props = _this2.props,
            data = _props.data,
            selectedMap = _props.selectedMap,
            selectedKey = _props.selectedKey;

        var filteredData = data.filter(function (record) {
          return selectedMap[record[selectedKey]];
        });

        fn(filteredData);
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var massEditGroups = this.props.massEditGroups;


      var allSelected = this.allSelected();
      var noneSelected = this.noneSelected();

      return _react2.default.createElement(_MassEditDropdown2.default, {
        checked: allSelected && !noneSelected,
        indeterminate: !allSelected && !noneSelected,
        disabled: noneSelected,
        groups: massEditGroups.map(function (group) {
          return _extends({}, group, {
            elements: group.elements.map(function (option) {
              return {
                name: option.name,
                action: _this3.createMassEditActionHandler(option.action)
              };
            })
          });
        }),
        onChange: this.onMassEditChange
      });
    }
  }]);

  return MassEditControl;
}(_react.Component);

exports.default = MassEditControl;


MassEditControl.propTypes = {
  data: _propTypes2.default.array.isRequired,
  dispatch: _propTypes2.default.func,
  massEditGroups: _MassEditDropdown2.default.propTypes.groups,
  objectType: _propTypes2.default.string.isRequired,
  selectedKey: _propTypes2.default.string,
  selectedMap: _propTypes2.default.object.isRequired,
  toggleSelected: _propTypes2.default.func
};

MassEditControl.defaultProps = {
  selectedKey: 'id'
};