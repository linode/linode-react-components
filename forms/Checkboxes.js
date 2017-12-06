'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Checkboxes;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Checkboxes(props) {
  return _react2.default.createElement(
    'fieldset',
    { className: 'Checkboxes' },
    props.children
  );
}

Checkboxes.propTypes = {
  children: _propTypes2.default.any.isRequired
};