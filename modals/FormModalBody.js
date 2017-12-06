'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _buttons = require('../buttons');

var _forms = require('../forms');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormModalBody = function (_Component) {
  _inherits(FormModalBody, _Component);

  function FormModalBody(props) {
    var _this2 = this;

    _classCallCheck(this, FormModalBody);

    var _this = _possibleConstructorReturn(this, (FormModalBody.__proto__ || Object.getPrototypeOf(FormModalBody)).call(this, props));

    _this.onCancel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.props.onCancel();

              if (_this.props.analytics && _this.props.analytics.title && !_this.props.noCancelEvent) {
                (0, _utils.EmitEvent)(_utils.MODAL_CANCEL, 'modal', 'cancel', _this.props.analytics.title);
              }

            case 2:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    }));


    _this.state = {};
    _this.onSubmit = _this.props.onSubmit.bind(_this);
    return _this;
  }

  _createClass(FormModalBody, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          buttonText = _props.buttonText,
          buttonDisabledText = _props.buttonDisabledText,
          noCancel = _props.noCancel,
          children = _props.children,
          propsErrors = _props.errors,
          noSubmit = _props.noSubmit,
          noSubmitEvent = _props.noSubmitEvent;
      var _state = this.state,
          loading = _state.loading,
          _state$errors = _state.errors,
          stateErrors = _state$errors === undefined ? {} : _state$errors;

      // This may not be needed. No one may send errors to props, but just in case.

      var errors = _lodash2.default.isEmpty(propsErrors) ? stateErrors : propsErrors;

      var analytics = _extends({}, this.props.analytics, {
        type: 'modal'
      });

      return _react2.default.createElement(
        _forms.Form,
        {
          className: className,
          onSubmit: this.onSubmit,
          noSubmitEvent: noSubmitEvent,
          analytics: analytics
        },
        _react2.default.isValidElement(children) ? children : _react2.default.createElement(
          'p',
          null,
          children
        ),
        _react2.default.createElement(
          'div',
          { className: 'Modal-footer' },
          noCancel ? null : _react2.default.createElement(_buttons.CancelButton, { disabled: loading, onClick: this.onCancel }),
          noSubmit ? null : _react2.default.createElement(
            _forms.SubmitButton,
            {
              disabled: loading,
              disabledChildren: buttonDisabledText
            },
            buttonText
          ),
          _react2.default.createElement(_forms.FormSummary, { errors: errors })
        )
      );
    }
  }]);

  return FormModalBody;
}(_react.Component);

exports.default = FormModalBody;


FormModalBody.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.any,
  buttonText: _propTypes2.default.string,
  buttonDisabledText: _propTypes2.default.string,
  onSubmit: _propTypes2.default.func.isRequired,
  noSubmit: _propTypes2.default.bool,
  noSubmitEvent: _propTypes2.default.bool,
  onCancel: _propTypes2.default.func,
  noCancel: _propTypes2.default.bool.isRequired,
  noCancelEvent: _propTypes2.default.bool,
  analytics: _forms.Form.propTypes.analytics,
  errors: _propTypes2.default.object.isRequired
};

FormModalBody.defaultProps = {
  noCancel: false,
  noCancelEvent: false,
  noSubmit: false,
  errors: {},
  buttonText: 'Save',
  buttonDisabledText: 'Saving',
  analytics: {}
};