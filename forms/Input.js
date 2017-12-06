'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Input;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Input(props) {
  return _react2.default.createElement(
    'span',
    { className: 'Input ' + props.className },
    _react2.default.createElement('input', _extends({}, props, {
      id: props.id || props.name,
      className: 'form-control'
    })),
    !props.label ? null : _react2.default.createElement(
      'label',
      { className: 'Input-label' },
      props.label
    )
  );
}

Input.propTypes = {
  value: _propTypes2.default.any,
  placeholder: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  type: _propTypes2.default.string,
  label: _propTypes2.default.string,
  className: _propTypes2.default.string,
  multiple: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  min: _propTypes2.default.number,
  max: _propTypes2.default.number,
  step: _propTypes2.default.number,
  pattern: _propTypes2.default.string,
  maxlength: _propTypes2.default.number
};

Input.defaultProps = {
  className: ''
};