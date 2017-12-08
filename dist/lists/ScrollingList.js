'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ScrollingList;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ScrollingList(props) {
  var items = props.items;

  return _react2.default.createElement(
    'ul',
    { className: 'ScrollingList' },
    items.map(function (item, i) {
      return _react2.default.createElement(
        'li',
        { key: i },
        item
      );
    })
  );
}

ScrollingList.propTypes = {
  items: _propTypes2.default.array
};