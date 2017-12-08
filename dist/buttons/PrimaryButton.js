'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PrimaryButton;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dropdowns = require('../dropdowns');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PrimaryButton(props) {
  var groups = [{ elements: [{ name: props.children, action: props.onClick, to: props.to, icon: 'fa-plus' }] }];

  if (props.options && props.options.length) {
    groups.push({ elements: props.options });
  }

  return _react2.default.createElement(
    'div',
    { className: 'PrimaryButton ' + props.className + ' ' + props.buttonClass },
    _react2.default.createElement(_dropdowns.Dropdown, { groups: groups })
  );
}

PrimaryButton.propTypes = {
  children: _propTypes2.default.node.isRequired,
  options: _propTypes2.default.array,
  onClick: _propTypes2.default.func,
  to: _propTypes2.default.string,
  buttonClass: _propTypes2.default.string,
  className: _propTypes2.default.string
};

PrimaryButton.defaultProps = {
  buttonClass: 'btn-primary',
  className: '',
  options: []
};