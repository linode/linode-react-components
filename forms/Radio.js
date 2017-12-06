'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Radio;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Radio(props) {
  return _react2.default.createElement(
    'div',
    { className: 'Radio ' + props.className },
    _react2.default.createElement(
      'label',
      null,
      _react2.default.createElement('input', _defineProperty({
        id: props.id || props.name,
        name: props.name,
        type: 'radio',
        className: 'Radio-input',
        checked: props.checked,
        onChange: props.onChange,
        value: props.value
      }, 'name', props.name)),
      props.label ? _react2.default.createElement(
        'span',
        { className: 'col-form-label Radio-label' },
        props.label
      ) : null
    )
  );
}

Radio.propTypes = {
  checked: _propTypes2.default.bool.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  name: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
  label: _propTypes2.default.any,
  id: _propTypes2.default.string,
  className: _propTypes2.default.string
};

Radio.defaultProps = {
  className: ''
};