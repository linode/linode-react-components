'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Tooltip;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTooltip = require('react-tooltip');

var _reactTooltip2 = _interopRequireDefault(_reactTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Tooltip(props) {
  var id = props.id,
      position = props.position,
      children = props.children;


  return _react2.default.createElement(
    _reactTooltip2.default,
    {
      className: 'Tooltip',
      delayHide: 500,
      delayShow: 300,
      id: id,
      effect: 'solid',
      place: position,
      role: 'tooltip'
    },
    children
  );
}

Tooltip.propTypes = {
  id: _propTypes2.default.string,
  children: _propTypes2.default.node,
  position: _propTypes2.default.string
};

Tooltip.defaultProps = {
  position: 'top' // top, right, bottom, left
};