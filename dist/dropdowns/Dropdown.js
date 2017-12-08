'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../buttons/Button');

var _Button2 = _interopRequireDefault(_Button);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Avoid a circular import by importing ../buttons by itself.


var Dropdown = function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown() {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this));

    _this.close = function () {
      if (typeof _this.props.onClose === 'function') {
        _this.props.onClose();
      }

      _this.emitEvent(_utils.DROPDOWN_CLOSE, 'close');

      _this.setState({ open: false });
    };

    _this.open = function () {
      if (typeof _this.props.onOpen === 'function') {
        _this.props.onOpen();
      }

      _this.emitEvent(_utils.DROPDOWN_OPEN, 'open');

      _this.setState({ open: !_this.state.open });
    };

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(Dropdown, [{
    key: 'emitEvent',
    value: function emitEvent(type, action, item) {
      if (this.props.analytics && this.props.analytics.title) {
        (0, _utils.EmitEvent)(type, 'dropdown', action, this.props.analytics.title, item);
      }
    }
  }, {
    key: 'wrapClick',
    value: function wrapClick(f, item) {
      var _this2 = this;

      return function () {
        _this2.emitEvent(_utils.DROPDOWN_CLICK, 'change', item);
        f.apply(undefined, arguments);
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props$groups = _toArray(this.props.groups),
          _props$groups$0$eleme = _slicedToArray(_props$groups[0].elements, 1),
          first = _props$groups$0$eleme[0],
          groups = _props$groups.slice(1);

      var _props = this.props,
          disabled = _props.disabled,
          dropdownIcon = _props.dropdownIcon;


      var allGroups = this.props.groups;
      if (!this.props.duplicateFirst) {
        allGroups = groups;
      }

      var dropdownMenu = allGroups.map(function (group, i) {
        return _react2.default.createElement(
          'div',
          { className: 'Dropdown-group', key: group.name || i },
          !group.name ? null : _react2.default.createElement(
            'div',
            { className: 'Dropdown-groupLabel' },
            group.name
          ),
          _react2.default.createElement(
            'div',
            { className: 'Dropdown-elements' },
            group.elements.map(function (item) {
              return _react2.default.createElement(
                'button',
                {
                  type: 'button',
                  key: item.name,
                  id: (item || '').name.split(' ').join('-').toLowerCase(),
                  className: 'Dropdown-item'
                  // This onMouseDown is intentional. See https://github.com/linode/manager/pull/223
                  , onMouseDown: _this3.wrapClick(item.action, item.name)
                },
                item.name
              );
            })
          )
        );
      });

      var orientation = !this.props.leftOriented ? 'Dropdown-menu--right' : '';

      return _react2.default.createElement(
        'div',
        {
          className: 'Dropdown btn-group ' + (this.state.open ? 'Dropdown--open' : ''),
          onBlur: this.close,
          tabIndex: '-1' // This allows firefox to treat this as a blurrable element.
        },
        _react2.default.createElement(
          _Button2.default,
          {
            type: 'button',
            className: 'Dropdown-first',
            onClick: first.action ? this.wrapClick(first.action, first.name) : this.open,
            to: first.to,
            disabled: disabled,
            id: first.name.split(' ').join('-').toLowerCase()
          },
          first.icon ? _react2.default.createElement('i', { className: 'fa ' + first.icon }) : null,
          first.name
        ),
        groups.length === 0 ? null : _react2.default.createElement(
          _Button2.default,
          {
            disabled: disabled,
            type: 'button',
            className: 'Dropdown-toggle',
            'data-toggle': 'dropdown',
            'aria-haspopup': 'true',
            'aria-expanded': this.state.open,
            onClick: this.open
          },
          _react2.default.createElement('i', { className: 'fa ' + dropdownIcon })
        ),
        groups.length === 0 ? null : _react2.default.createElement(
          'div',
          { className: 'Dropdown-menu ' + orientation },
          dropdownMenu
        )
      );
    }
  }]);

  return Dropdown;
}(_react.Component);

exports.default = Dropdown;


Dropdown.propTypes = {
  groups: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.node,
    elements: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      name: _propTypes2.default.node.isRequired,
      action: _propTypes2.default.func,
      to: _propTypes2.default.string,
      icon: _propTypes2.default.string
    }))
  })).isRequired,
  leftOriented: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  dropdownIcon: _propTypes2.default.string,
  duplicateFirst: _propTypes2.default.bool,
  onOpen: _propTypes2.default.func,
  onClose: _propTypes2.default.func,
  analytics: _propTypes2.default.shape({
    title: _propTypes2.default.string
  })
};

Dropdown.defaultProps = {
  dropdownIcon: 'fa-caret-down',
  analytics: {},
  duplicateFirst: true
};