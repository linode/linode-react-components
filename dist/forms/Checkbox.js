'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Checkbox;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Checkbox(props) {
  return _react2.default.createElement(
    'div',
    { className: 'Checkbox ' + props.className },
    _react2.default.createElement(
      'label',
      null,
      _react2.default.createElement('input', {
        id: props.id || props.name,
        type: 'checkbox',
        value: props.value,
        checked: props.checked,
        disabled: props.disabled,
        onChange: props.onChange,
        name: props.name,
        className: 'Checkbox-input'
      }),
      props.label ? _react2.default.createElement(
        'span',
        { className: 'col-form-label Checkbox-label' },
        props.label
      ) : null
    )
  );
}

Checkbox.propTypes = {
  checked: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  label: _propTypes2.default.any,
  name: _propTypes2.default.string,
  value: _propTypes2.default.bool,
  id: _propTypes2.default.string
};

Checkbox.defaultProps = {
  className: ''
};