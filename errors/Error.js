'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Error;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Error(props) {
  var status = props.status,
      href = props.href;

  var statusString = status.toString();
  var explicitlyHandled = [404, 521];
  if (status >= 400 && status < 404) {
    statusString = '40x';
  } else if (explicitlyHandled.indexOf(status) === -1) {
    statusString = '50x';
  }

  var _$40x$521$50x$stat = {
    404: {
      title: 'Whoops!',
      msg: 'The page you\'re trying to reach does not exist.'
    },
    '40x': {
      title: 'Doh!',
      msg: 'You are not authorized to access this page.'
    },
    521: {
      title: 'Hang on!',
      msg: _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          'You are unable to connect to our servers.'
        ),
        _react2.default.createElement(
          'div',
          null,
          'Check your internet connection and refresh.'
        )
      )
    },
    '50x': {
      title: 'Uh-oh!',
      msg: _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          'There was an issue on our end. Sorry about that!'
        ),
        _react2.default.createElement(
          'div',
          null,
          'Please try again later or ',
          _react2.default.createElement(
            'a',
            { href: href },
            'contact support'
          ),
          '.'
        )
      )
    }
  }[statusString],
      title = _$40x$521$50x$stat.title,
      msg = _$40x$521$50x$stat.msg;


  return _react2.default.createElement(
    'div',
    { className: 'Error' },
    _react2.default.createElement(
      'h1',
      null,
      status
    ),
    _react2.default.createElement(
      'h2',
      null,
      title
    ),
    _react2.default.createElement(
      'div',
      { className: 'Error-body' },
      msg
    )
  );
}

Error.propTypes = {
  status: _propTypes2.default.number.isRequired,
  href: _propTypes2.default.string
};

Error.defaultProps = {
  href: 'mailto:support@linode.com'
};