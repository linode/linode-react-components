'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Form;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function Form(props) {
  var handleSubmit = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
      var _ref2, title, _ref2$type, type, _ref2$action, action;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              _context.next = 3;
              return props.onSubmit(event);

            case 3:
              _ref2 = props.analytics || {}, title = _ref2.title, _ref2$type = _ref2.type, type = _ref2$type === undefined ? 'form' : _ref2$type, _ref2$action = _ref2.action, action = _ref2$action === undefined ? 'edit' : _ref2$action;


              if (props.analytics && !props.noSubmitEvent) {
                (0, _utils.EmitEvent)(_utils.FORM_SUBMIT, type, action, title);
              }

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return _react2.default.createElement(
    'form',
    {
      className: props.className,
      onSubmit: handleSubmit
    },
    props.children
  );
}

Form.propTypes = {
  className: _propTypes2.default.string,
  onSubmit: _propTypes2.default.func.isRequired,
  noSubmitEvent: _propTypes2.default.bool,
  children: _propTypes2.default.node.isRequired,
  analytics: _propTypes2.default.shape({
    type: _propTypes2.default.string,
    action: _propTypes2.default.string,
    title: _propTypes2.default.string
  })
};

Form.defaultProps = {
  className: '',
  noSubmitEvent: false
};