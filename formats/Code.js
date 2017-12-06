'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHighlight = require('react-highlight');

var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

var _reactClipboard = require('react-clipboard.js');

var _reactClipboard2 = _interopRequireDefault(_reactClipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_CLIPBOARD_ICON = 'fa-clipboard';
var languageMap = {
  curl: 'bash'
};

var Code = function (_Component) {
  _inherits(Code, _Component);

  function Code() {
    _classCallCheck(this, Code);

    var _this = _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).call(this));

    _this.onClickCopy = function () {
      if (_this.state.clipboardIcon === DEFAULT_CLIPBOARD_ICON) {
        _this.setState({ clipboardIcon: 'fa-check' }, function () {
          setTimeout(function () {
            _this.setState({ clipboardIcon: DEFAULT_CLIPBOARD_ICON });
          }, 2500);
        });
      }
    };

    _this.state = { clipboardIcon: DEFAULT_CLIPBOARD_ICON };
    return _this;
  }

  _createClass(Code, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          example = _props.example,
          language = _props.language,
          noclipboard = _props.noclipboard;
      var clipboardIcon = this.state.clipboardIcon;


      var lowerCaseLanguage = language.toLowerCase();
      var languageName = languageMap[lowerCaseLanguage] ? languageMap[lowerCaseLanguage] : lowerCaseLanguage;

      var clipboardButton = void 0;
      if (!noclipboard) {
        clipboardButton = _react2.default.createElement(
          _reactClipboard2.default,
          {
            className: 'Code-clipboardButton',
            'data-clipboard-text': example,
            onClick: this.onClickCopy
          },
          _react2.default.createElement('i', { className: 'fa ' + clipboardIcon })
        );
      }

      // TODO: replace this Highlight component... It's tiny and terrible.
      return _react2.default.createElement(
        'div',
        { className: 'Code' },
        _react2.default.createElement(
          _reactHighlight2.default,
          { className: 'language-' + languageName + ' hljs' },
          example
        ),
        clipboardButton
      );
    }
  }]);

  return Code;
}(_react.Component);

exports.default = Code;


Code.propTypes = {
  example: _propTypes2.default.string,
  language: _propTypes2.default.string,
  noclipboard: _propTypes2.default.bool
};

Code.defaultProps = {
  noclipboard: false,
  language: 'bash'
};