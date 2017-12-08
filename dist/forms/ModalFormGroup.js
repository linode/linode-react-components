'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ModalFormGroup;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormGroup = require('./FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _FormGroupError = require('./FormGroupError');

var _FormGroupError2 = _interopRequireDefault(_FormGroupError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ModalFormGroup(props) {
  var errors = props.errors,
      apiKey = props.apiKey,
      label = props.label,
      id = props.id,
      description = props.description,
      children = props.children;


  return _react2.default.createElement(
    _FormGroup2.default,
    { className: 'row', errors: errors, name: apiKey },
    _react2.default.createElement(
      'label',
      { className: 'col-sm-4 col-form-label', htmlFor: id },
      label
    ),
    _react2.default.createElement(
      'div',
      { className: 'col-sm-8' },
      children,
      description ? _react2.default.createElement(
        'small',
        { className: 'text-muted modal-description' },
        description
      ) : null,
      _react2.default.createElement(_FormGroupError2.default, { errors: errors, name: apiKey, inline: false })
    )
  );
}

ModalFormGroup.propTypes = {
  apiKey: _propTypes2.default.string.isRequired,
  children: _propTypes2.default.node.isRequired,
  label: _propTypes2.default.string.isRequired,
  errors: _propTypes2.default.object.isRequired,
  id: _propTypes2.default.string.isRequired,
  description: _propTypes2.default.string
};

ModalFormGroup.defaultProps = {
  apiKey: '',
  errors: {}
};