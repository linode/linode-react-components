'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Tabs;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTabs = require('react-tabs');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Tabs(props) {
  var className = props.className,
      children = props.children,
      isSubTabs = props.isSubTabs,
      _onClick = props.onClick,
      pathname = props.pathname,
      selectedIndex = props.selectedIndex,
      tabs = props.tabs;


  var selected = void 0;
  if (selectedIndex !== undefined) {
    selected = selectedIndex;
  } else if (pathname) {
    selected = tabs.reduce(function (knownIndex, _ref, currentIndex) {
      var link = _ref.link;

      return pathname.indexOf(link) === 0 ? currentIndex : knownIndex;
    }, 0);
  } else {
    selected = 0;
  }

  var componentName = isSubTabs ? 'SubTabs' : 'Tabs';
  return _react2.default.createElement(
    _reactTabs.Tabs,
    {
      selectedIndex: selected,
      className: componentName + ' ' + className
    },
    _react2.default.createElement(
      _reactTabs.TabList,
      { className: 'TabList' },
      tabs.map(function (tab, i) {
        var className = i + 1 === selected ? 'selected-previous' : '';
        return _react2.default.createElement(
          _reactTabs.Tab,
          {
            key: tab.name,
            className: 'Tab ' + className,
            onClick: function onClick(e) {
              if (_onClick) {
                _onClick(e, i);
              }
            }
          },
          tab.link ? _react2.default.createElement(
            _reactRouter.Link,
            { to: tab.link },
            tab.name
          ) : tab.name
        );
      })
    ),
    tabs.map(function (tab) {
      return _react2.default.createElement(
        _reactTabs.TabPanel,
        { key: tab.name, className: componentName + '-container' },
        tab.children || children
      );
    })
  );
}

Tabs.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  isSubTabs: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  pathname: _propTypes2.default.string,
  selectedIndex: _propTypes2.default.number,
  tabs: _propTypes2.default.array.isRequired
};

Tabs.defaultProps = {
  className: '',
  isSubTabs: false
};