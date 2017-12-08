'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ComingSoon;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ComingSoon(props) {
  return _react2.default.createElement(
    'div',
    { className: 'Error ComingSoon' },
    _react2.default.createElement(
      'h1',
      null,
      'Hang on!'
    ),
    _react2.default.createElement(
      'h2',
      null,
      'Support for ',
      props.feature,
      ' is coming soon.'
    ),
    _react2.default.createElement(
      'div',
      { className: 'Error-body' },
      'In the meantime, please use the classic ',
      _react2.default.createElement(
        'a',
        { href: 'https://manager.linode.com' + props.classicLink, target: '_blank' },
        'Manager'
      ),
      ' to manage ',
      props.feature,
      '.'
    )
  );
}

ComingSoon.propTypes = {
  feature: _propTypes2.default.string.isRequired,
  classicLink: _propTypes2.default.string.isRequired
};