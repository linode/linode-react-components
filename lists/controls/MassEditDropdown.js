'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dropdowns = require('../../dropdowns');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MassEditDropdown = function (_Component) {
  _inherits(MassEditDropdown, _Component);

  function MassEditDropdown() {
    _classCallCheck(this, MassEditDropdown);

    return _possibleConstructorReturn(this, (MassEditDropdown.__proto__ || Object.getPrototypeOf(MassEditDropdown)).apply(this, arguments));
  }

  _createClass(MassEditDropdown, [{
    key: 'componentDidUpdate',

    // Indeterminate is a javascript-only property of a DOM node. We must modify it directly.
    value: function componentDidUpdate() {
      this.checkbox.indeterminate = this.props.indeterminate;
      this.checkbox.checked = this.props.checked;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          checked = _props.checked,
          disabled = _props.disabled,
          groups = _props.groups,
          _onChange = _props.onChange;


      return _react2.default.createElement(
        'div',
        { className: 'input-group' },
        _react2.default.createElement(
          'span',
          { className: 'input-group-addon' },
          _react2.default.createElement('input', {
            type: 'checkbox',
            name: 'select-all',
            id: 'select-all',
            onChange: function onChange(e) {
              _onChange(e.target.checked);
            },
            ref: function ref(element) {
              _this2.checkbox = element;
            },
            checked: checked
          })
        ),
        _react2.default.createElement(_dropdowns.Dropdown, { groups: groups, disabled: disabled, leftOriented: true })
      );
    }
  }]);

  return MassEditDropdown;
}(_react.Component);

exports.default = MassEditDropdown;


MassEditDropdown.propTypes = {
  checked: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  indeterminate: _propTypes2.default.bool,
  onChange: _propTypes2.default.func.isRequired,
  groups: _propTypes2.default.array.isRequired
};

MassEditDropdown.defaultProps = {
  checked: false
};