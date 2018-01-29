'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Tabs = require('./Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

describe('components/Tabs', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var Test, tabs;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // eslint-disable-next-line react/prefer-stateless-function
          Test = function (_Component) {
            _inherits(Test, _Component);

            function Test() {
              _classCallCheck(this, Test);

              return _possibleConstructorReturn(this, (Test.__proto__ || Object.getPrototypeOf(Test)).apply(this, arguments));
            }

            _createClass(Test, [{
              key: 'render',
              value: function render() {
                /* eslint-disable react/prop-types */
                return _react2.default.createElement(
                  _reactRouterDom.StaticRouter,
                  null,
                  _react2.default.createElement(_Tabs2.default, { tabs: this.props.tabs, onClick: this.props.onClick })
                );
                /* eslint-enable react/prop-types */
              }
            }]);

            return Test;
          }(_react.Component);

          tabs = [{ name: 'One', link: '/one' }, { name: 'Two', link: '/two' }];


          it('renders tabs', function () {
            var dispatch = jest.fn();
            var page = (0, _enzyme.mount)(_react2.default.createElement(Test, {
              dispatch: dispatch,
              tabs: tabs
            }));

            var tabComponents = page.find('Tabs').find('Tab');
            expect(tabComponents.length).toBe(tabs.length);
            tabs.forEach(function (_ref2, i) {
              var name = _ref2.name;

              expect(tabComponents.at(i).children().text()).toBe(name);
            });
          });

          it('supports click handling on tabs', function () {
            var handleClick = jest.fn();
            var dispatch = jest.fn();

            var page = (0, _enzyme.mount)(_react2.default.createElement(Test, {
              dispatch: dispatch,
              tabs: tabs,
              onClick: handleClick
            }));

            var tabComponents = page.find('Tabs').find('Tab');
            tabComponents.at(0).simulate('click');
            expect(handleClick).toHaveBeenCalledTimes(1);
          });

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
})));