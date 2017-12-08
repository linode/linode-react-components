'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CardImageHeader;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CardImageHeader(props) {
  var icon = props.icon,
      iconClass = props.iconClass,
      nav = props.nav,
      title = props.title,
      subtitle = props.subtitle,
      tags = props.tags;


  var img = void 0;
  if (icon) {
    img = _react2.default.createElement('img', {
      className: 'CardImageHeader-icon float-sm-left ' + iconClass,
      src: icon,
      alt: 'Client thumbnail'
    });
  }

  var headerTags = void 0;
  if (tags) {
    headerTags = _react2.default.createElement(
      'div',
      { className: 'CardImageHeader-tags float-sm-left' },
      tags.map(function (tag) {
        return _react2.default.createElement(
          'div',
          { key: tag, className: 'CardImageHeader-tag' },
          tag
        );
      })
    );
  }

  var headerTitle = void 0;
  if (title) {
    headerTitle = _react2.default.createElement(
      'div',
      { className: 'float-sm-left' },
      _react2.default.createElement(
        'div',
        { className: 'clearfix' },
        _react2.default.createElement(
          'h2',
          { className: 'CardImageHeader-title float-sm-left' },
          title
        ),
        headerTags
      ),
      subtitle ? _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'small',
          { className: 'text-muted' },
          subtitle
        )
      ) : null
    );
  }

  var navItems = void 0;
  if (nav) {
    navItems = _react2.default.createElement(
      'div',
      { className: 'CardImageHeader-nav float-sm-right' },
      nav
    );
  }

  return _react2.default.createElement(
    'header',
    { className: 'CardImageHeader clearfix' },
    img,
    headerTitle,
    navItems
  );
}

CardImageHeader.propTypes = {
  icon: _propTypes2.default.string,
  iconClass: _propTypes2.default.string,
  title: _propTypes2.default.string,
  subtitle: _propTypes2.default.object,
  nav: _propTypes2.default.node,
  tags: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired
};

CardImageHeader.defaultProps = {
  iconClass: '',
  title: '',
  tags: []
};