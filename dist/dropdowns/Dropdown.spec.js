'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Dropdown = require('./Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _Button = require('../buttons/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('components/Dropdown', function () {
  it('should render without error', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Dropdown2.default, {
      groups: [{ elements: [{ action: function action() {}, name: 'Drew' }] }, {
        elements: [{ action: function action() {}, name: 'Phil' }, { action: function action() {}, name: 'Will' }]
      }]
    }));

    expect(wrapper).toMatchSnapshot();
  });

  it('renders dropdown component 2', function () {
    var dropdown = (0, _enzyme.mount)(_react2.default.createElement(_Dropdown2.default, {
      groups: [{ elements: [{ action: function action() {}, name: 'Drew' }] }, {
        elements: [{ action: function action() {}, name: 'Phil' }, { action: function action() {}, name: 'Will' }]
      }]
    }));

    // Should find two buttons.
    expect(dropdown.findWhere(function (n) {
      return n.type() === _Button2.default && n.text() === 'Drew';
    }).length).toBe(1);

    expect(dropdown.find('.Dropdown-item').length).toBe(3);
    expect(dropdown.find('.Dropdown-item').at(1).text()).toBe('Phil');
    expect(dropdown.find('.Dropdown-item').at(2).text()).toBe('Will');
  });

  it('clickable dropdown', function () {
    var clickFirst = jest.fn();
    var clickBodyItem = jest.fn();
    var unclicked = jest.fn();
    var dropdown = (0, _enzyme.shallow)(_react2.default.createElement(_Dropdown2.default, {
      groups: [{ elements: [{ action: clickFirst, name: 'Drew' }] }, {
        elements: [{ action: clickBodyItem, name: 'Phil' }, { action: unclicked, name: 'Will' }]
      }]
    }));

    // Click first item should trigger clickFirst
    dropdown.find('.Dropdown-first').simulate('click');
    // Click toggle should open body
    dropdown.find('.Dropdown-toggle').simulate('click');
    // Click first menu item should trigger clickBodyItem
    dropdown.find('.Dropdown-item').at(1).simulate('mousedown');
    // Last menu item goes unclicked

    expect(clickFirst).toHaveBeenCalledTimes(1);
    expect(dropdown.find('.Dropdown--open').length).toBe(1);
    expect(clickBodyItem).toHaveBeenCalledTimes(1);
    expect(unclicked).toHaveBeenCalledTimes(0);

    // Mousedown did not hide dropdown
    expect(dropdown.find('.Dropdown--open').length).toBe(1);
    // But onblur does
    dropdown.find('.Dropdown').simulate('blur');
    expect(dropdown.find('.Dropdown--open').length).toBe(0);
  });

  it('closes on second click', function () {
    var noAction = function noAction() {};
    var dropdown = (0, _enzyme.shallow)(_react2.default.createElement(_Dropdown2.default, {
      groups: [{ elements: [{ action: noAction, name: '' }] }, { elements: [{ action: noAction, name: '' }] }]
    }));

    dropdown.find('.Dropdown-toggle').simulate('click');
    expect(dropdown.find('.Dropdown--open').length).toBe(1);
    dropdown.find('.Dropdown-toggle').simulate('click');
    expect(dropdown.find('.Dropdown--open').length).toBe(0);
  });

  it('closes on blur', function () {
    var noAction = function noAction() {};
    var dropdown = (0, _enzyme.shallow)(_react2.default.createElement(_Dropdown2.default, {
      groups: [{ elements: [{ action: noAction, name: '' }] }, { elements: [{ action: noAction, name: '' }] }]
    }));

    var toggle = dropdown.findWhere(function (n) {
      return n.type() === _Button2.default && n.hasClass('Dropdown-toggle');
    });

    toggle.simulate('click');
    expect(dropdown.find('.Dropdown--open').length).toBe(1);

    dropdown.simulate('blur');
    expect(dropdown.find('.Dropdown--open').length).toBe(0);
  });
});