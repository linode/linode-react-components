'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InternalError;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _buttons = require('../buttons');

var _modals = require('../modals');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function InternalError(props) {
  return _react2.default.createElement(
    _modals.FormModalBody,
    {
      noCancel: true,
      onSubmit: props.returnHome,
      buttonText: 'Refresh',
      analytics: { title: 'Internal Error' }
    },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'p',
        null,
        'Something went wrong. Check your internet connection, try refreshing the page, or return ',
        _react2.default.createElement(
          'a',
          { href: '/' },
          'home'
        ),
        '.'
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'small',
          null,
          'If you think you\'ve discovered a bug in the application and would like to report it, check ',
          _react2.default.createElement(
            _buttons.ExternalLink,
            { to: 'https://github.com/linode/manager/blob/master/CONTRIBUTING.md#reporting-bugs' },
            'here'
          ),
          ' for instructions.'
        )
      )
    )
  );
}

InternalError.propTypes = {
  returnHome: _propTypes2.default.func
};