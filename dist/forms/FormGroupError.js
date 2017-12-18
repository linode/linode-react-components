'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FormGroupError;

var _flatten = require('lodash/flatten');

var _flatten2 = _interopRequireDefault(_flatten);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FormGroupError(props) {
  var errors = props.errors,
      name = props.name,
      crumbs = props.crumbs,
      inline = props.inline,
      className = props.className;

  var baseClassName = className + ' FormGroupError';
  var fullClassName = inline ? baseClassName : baseClassName + ' FormGroupError--block';
  var names = Array.isArray(name) ? name : [name];
  var fieldErrors = (0, _flatten2.default)(names.map(function (name) {
    return errors[name + (crumbs ? '.' + crumbs : '')] || [];
  }));
  if (fieldErrors && fieldErrors.length) {
    return _react2.default.createElement(
      'ul',
      { className: fullClassName },
      fieldErrors.map(function (error) {
        return _react2.default.createElement(
          'li',
          { key: error.reason },
          error.reason
        );
      })
    );
  }

  return null;
}

FormGroupError.propTypes = {
  errors: _propTypes2.default.any.isRequired,
  name: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]).isRequired,
  className: _propTypes2.default.string,
  crumbs: _propTypes2.default.string,
  inline: _propTypes2.default.bool
};

FormGroupError.defaultProps = {
  inline: true,
  className: ''
};