'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ModalShell;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ModalShell(props) {
  var title = props.title,
      open = props.open;


  return _react2.default.createElement(
    'div',
    {
      className: 'ModalOverlay ' + (open ? 'ModalOverlay--visible' : ''),
      onClick: function onClick() {
        props.close();
        (0, _utils.EmitEvent)(_utils.MODAL_CLOSE, 'modal', 'close-overlay', title);
      }
    },
    _react2.default.createElement(
      'div',
      { className: 'Modal', onClick: function onClick(e) {
          return e.stopPropagation();
        } },
      _react2.default.createElement(
        'header',
        { className: 'Modal-header' },
        _react2.default.createElement(
          'h3',
          null,
          title
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'Modal-body' },
        props.children
      )
    )
  );
}

ModalShell.propTypes = {
  title: _propTypes2.default.string,
  children: _propTypes2.default.any,
  open: _propTypes2.default.bool.isRequired,
  close: _propTypes2.default.func.isRequired
};

ModalShell.defaultProps = {
  open: false
};