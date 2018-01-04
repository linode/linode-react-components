'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _linodeComponents = require('linode-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('components/tables/cells/TableCell', function () {
  var tableCell = void 0;

  it('should render without error', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_linodeComponents.TableCell, {
      className: 'example',
      column: {},
      record: {}
    }));

    expect(wrapper).toMatchSnapshot();
  });

  it('should accept className from props', function () {
    tableCell = (0, _enzyme.shallow)(_react2.default.createElement(_linodeComponents.TableCell, {
      className: 'example',
      column: {},
      record: {}
    }));

    expect(tableCell.find('.example').length).toBe(1);
  });

  it('should accept a className from the column configuration', function () {
    tableCell = (0, _enzyme.shallow)(_react2.default.createElement(_linodeComponents.TableCell, {
      column: {
        className: 'example'
      },
      record: {}
    }));

    expect(tableCell.find('.example').length).toBe(1);
  });

  it('should accept arbitrary child elements', function () {
    tableCell = (0, _enzyme.shallow)(_react2.default.createElement(
      _linodeComponents.TableCell,
      {
        column: {
          className: 'example'
        },
        record: {}
      },
      _react2.default.createElement(
        'div',
        null,
        'Example Child'
      )
    ));

    expect(tableCell.children('div').first().length).toBe(1);
    expect(tableCell.children('div').first().text()).toBe('Example Child');
  });

  it('should render a child value from record dataKey lookup', function () {
    tableCell = (0, _enzyme.shallow)(_react2.default.createElement(_linodeComponents.TableCell, {
      column: {
        dataKey: 'value'
      },
      record: {
        value: 10
      }
    }));

    expect(tableCell.text()).toBe('10');
  });

  it('should call an optional format fn to be used in value rendering', function () {
    var spy = jest.fn();
    tableCell = (0, _enzyme.shallow)(_react2.default.createElement(_linodeComponents.TableCell, {
      column: {
        formatFn: spy
      },
      record: {}
    }));

    expect(spy.mock.calls.length).toBe(1);
  });

  it('should render children based on returned values from a format fn', function () {
    tableCell = (0, _enzyme.shallow)(_react2.default.createElement(_linodeComponents.TableCell, {
      column: {
        dataKey: 'value',
        formatFn: function formatFn(children) {
          return 'Value: ' + children;
        }
      },
      record: {
        value: 10
      }
    }));

    expect(tableCell.text()).toBe('Value: 10');
  });
});