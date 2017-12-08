'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CodeEditor;

require('brace');

require('brace/mode/javascript');

require('brace/theme/tomorrow');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAce = require('react-ace');

var _reactAce2 = _interopRequireDefault(_reactAce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CodeEditor(props) {
  return _react2.default.createElement(_reactAce2.default, {
    mode: props.mode,
    theme: 'textmate',
    onChange: function onChange(value) {
      return props.onChange({ target: { value: value, name: props.name } });
    },
    width: '100%',
    showPrintMargin: false,
    value: props.value,
    style: { border: '1px solid #ccc' },
    setOptions: {
      enableBasicAutocompletion: false,
      enableLiveAutocompletion: false,
      enableSnippets: false,
      showLineNumbers: true,
      useWorker: false,
      tabSize: 2
    }
  });
}

CodeEditor.propTypes = {
  name: _propTypes2.default.string.isRequired,
  value: _propTypes2.default.string.isRequired,
  onChange: _propTypes2.default.func.isRequired
};