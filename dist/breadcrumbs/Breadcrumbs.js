'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Breadcrumbs;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Breadcrumbs(props) {
  var crumbs = props.crumbs;


  return _react2.default.createElement(
    'div',
    { className: 'Breadcrumbs' },
    _react2.default.createElement(
      'ul',
      null,
      crumbs.map(function (_ref, index) {
        var groupLabel = _ref.groupLabel,
            label = _ref.label,
            to = _ref.to;

        return _react2.default.createElement(
          'li',
          { key: label + '-' + index, className: 'Breadcrumbs-crumb' },
          _react2.default.createElement(
            'div',
            null,
            groupLabel ? _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'small',
                null,
                groupLabel
              )
            ) : null,
            _react2.default.createElement(
              'div',
              { className: 'Breadcrumbs-crumbLink' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: to },
                label
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'Breadcrumbs-divider' },
            index < crumbs.length - 1 ? _react2.default.createElement('i', { className: 'fa fa-chevron-right' }) : null
          )
        );
      })
    )
  );
}

Breadcrumbs.propTypes = {
  crumbs: _propTypes2.default.arrayOf(_propTypes2.default.object)
};