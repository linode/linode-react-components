'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NotFound;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Error = require('./Error');

var _Error2 = _interopRequireDefault(_Error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function NotFound() {
  return _react2.default.createElement(_Error2.default, { status: 404 });
}