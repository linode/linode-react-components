'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FormGroup;

var _flatten = require('lodash/flatten');

var _flatten2 = _interopRequireDefault(_flatten);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FormGroup(props) {
  var errors = props.errors,
      name = props.name,
      crumbs = props.crumbs;

  var fieldErrors = void 0;
  if (errors && name) {
    var names = Array.isArray(name) ? name : [name];
    var crumb = crumbs ? '.' + crumbs : '';
    fieldErrors = (0, _flatten2.default)(names.map(function (name) {
      return errors['' + name + crumb] || [];
    }));
  }

  return _react2.default.createElement(
    'div',
    {
      className: 'form-group ' + (fieldErrors && fieldErrors.length ? 'has-danger' : '') + ' ' + props.className
    },
    props.children
  );
}

FormGroup.propTypes = {
  errors: _propTypes2.default.any,
  name: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]).isRequired,
  crumbs: _propTypes2.default.string,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node
};

FormGroup.defaultProps = {
  className: ''
};