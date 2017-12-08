'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FormSummary;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FormSummary(props) {
  var className = props.className,
      errors = props.errors,
      success = props.success;


  var content = void 0;
  if (errors._ && errors._.length) {
    content = _react2.default.createElement(
      'div',
      { className: 'alert alert-danger' },
      errors._.map(function (error) {
        var text = error.reason || error;
        return _react2.default.createElement(
          'div',
          { key: text },
          text
        );
      })
    );
  } else if (Object.keys(errors).length > 1) {
    content = _react2.default.createElement(
      'div',
      { className: 'alert alert-danger' },
      'Please fix all errors before retrying.'
    );
  } else if (errors._) {
    content = success ? _react2.default.createElement(
      'div',
      { className: 'alert alert-success' },
      success
    ) : '';
  }

  return _react2.default.createElement(
    'div',
    { className: 'FormSummary ' + className },
    content
  );
}

FormSummary.propTypes = {
  errors: _propTypes2.default.object.isRequired,
  success: _propTypes2.default.string,
  className: _propTypes2.default.string
};

FormSummary.defaultProps = {
  className: ''
};