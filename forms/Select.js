'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelectPlus = require('react-select-plus');

var _reactSelectPlus2 = _interopRequireDefault(_reactSelectPlus);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This allows us to look up 'Select' in tests and differentiate between our component and the
// upstream one.
_reactSelectPlus2.default.displayName = 'VendorSelect';

var Select = function (_Component) {
  _inherits(Select, _Component);

  function Select() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.onChange = function (e) {
      var rawValue = e.target ? e.target.value : e.value;
      var value = _this.props.multi ? e.map(function (o) {
        return o.target ? o.target.value : o.value;
      }) : rawValue;
      if (_this.props.name && !_this.props.analytics.noTrack) {
        (0, _utils.EmitEvent)(_utils.SELECT_CHANGE, 'select', 'change', _this.props.name, value);
      }

      _this.props.onChange({ target: { value: value, name: _this.props.name } });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Select, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _realValue = this.realValue(),
          _realValue2 = _slicedToArray(_realValue, 2),
          value = _realValue2[0],
          modified = _realValue2[1];

      if (modified) {
        this.onChange({ target: { value: value } });
      }
    }
  }, {
    key: 'realValue',
    value: function realValue() {
      var _props = this.props,
          options = _props.options,
          value = _props.value;

      var defaultValue = void 0;

      // Putting a try-catch in here as a final resort because this commit is a patch and may not
      // have been thoroughly tested.
      try {
        if (options && options.length) {
          if (options[0] && options[0].value) {
            defaultValue = options[0].value;
          } else if (options[0].options && options[0].options.length) {
            // The grouping can be at most 1 level deep.
            defaultValue = options[0].options[0].value;
          }
        }
      } catch (e) {}
      // Nothing to do.


      // Update the form so the value with the default value so the state is no longer unset
      // -- unless the default is itself unset (in which case we enter an infinite loop).
      var unset = function unset(v) {
        return [undefined, null].indexOf(v) !== -1;
      };
      if (unset(value) && !unset(defaultValue)) {
        return [defaultValue, true];
      }

      return [value, false];
    }
  }, {
    key: 'render',
    value: function render() {
      var _realValue3 = this.realValue(),
          _realValue4 = _slicedToArray(_realValue3, 1),
          value = _realValue4[0];

      if (!this.props.multi) {
        var options = this.props.options.map(function (_ref2) {
          var value = _ref2.value,
              label = _ref2.label,
              options = _ref2.options;

          if (options) {
            return _react2.default.createElement(
              'optgroup',
              { key: label, label: label },
              options.map(function (_ref3) {
                var value = _ref3.value,
                    label = _ref3.label;
                return _react2.default.createElement(
                  'option',
                  { key: label + '-' + value, value: value },
                  label
                );
              })
            );
          }

          return _react2.default.createElement(
            'option',
            { key: label + '-' + value, value: value },
            label
          );
        });

        return _react2.default.createElement(
          'select',
          {
            id: this.props.id || this.props.name,
            name: this.props.name,
            onChange: this.props.onChange,
            value: value,
            className: 'Select Select--native form-control'
          },
          options
        );
      }

      return _react2.default.createElement(
        'span',
        { className: this.props.className },
        _react2.default.createElement('input', {
          type: 'hidden',
          id: this.props.id || this.props.name,
          name: this.props.name,
          onChange: this.onChange,
          value: value
        }),
        _react2.default.createElement(_reactSelectPlus2.default, _extends({
          clearable: false,
          name: this.props.name + '-internal'
        }, _lodash2.default.omit(this.props, ['className', 'id', 'name']), {
          value: value,
          onChange: this.onChange
        })),
        !this.props.label ? null : _react2.default.createElement(
          'label',
          { className: 'Select-label' },
          this.props.label
        )
      );
    }
  }]);

  return Select;
}(_react.Component);

exports.default = Select;


Select.propTypes = {
  onChange: _propTypes2.default.func.isRequired,
  options: _propTypes2.default.array.isRequired,
  name: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.any,
  label: _propTypes2.default.string,
  className: _propTypes2.default.string,
  id: _propTypes2.default.string,
  multi: _propTypes2.default.bool,
  analytics: _propTypes2.default.shape({
    noTrack: _propTypes2.default.bool.isRequired
  })
};

Select.defaultProps = {
  analytics: {
    noTrack: false
  },
  className: ''
};