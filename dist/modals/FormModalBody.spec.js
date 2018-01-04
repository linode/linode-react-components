'use strict';

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _linodeComponents = require('linode-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('components/modal/FormModalBody', function () {

  it('renders customizable content', function () {
    var modal = (0, _enzyme.mount)(_react2.default.createElement(
      _linodeComponents.FormModalBody,
      {
        buttonText: 'OK button text',
        onSubmit: function onSubmit() {},
        onCancel: function onCancel() {}
      },
      _react2.default.createElement(
        'span',
        { className: 'bodytext' },
        'a child element'
      )
    ));
    // Has a submit button/
    expect(modal.find(_linodeComponents.SubmitButton).length).toBe(1);
    expect(modal.find('.bodytext').length).toBe(1);
  });

  it('calls onSubmit when confirm button is pressed', function () {
    var onSubmit = jest.fn();

    var modal = (0, _enzyme.shallow)(_react2.default.createElement(
      _linodeComponents.FormModalBody,
      {
        buttonText: 'OK button text',
        onSubmit: onSubmit,
        onCancel: function onCancel() {}
      },
      'Some text'
    ));

    modal.find('Form').props().onSubmit({
      preventDefault: function preventDefault() {}
    });
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('calls onCancel when cancel button is pressed', function () {
    var onCancel = jest.fn();

    var modal = (0, _enzyme.shallow)(_react2.default.createElement(
      _linodeComponents.FormModalBody,
      {
        buttonText: 'OK button text',
        onSubmit: function onSubmit() {},
        onCancel: onCancel
      },
      _react2.default.createElement(
        'span',
        { className: 'bodytext' },
        'a child element'
      )
    ));

    modal.find('CancelButton').simulate('click');
    expect(onCancel).toHaveBeenCalledTimes(1);
  });
});