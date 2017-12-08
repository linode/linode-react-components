'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EmitEvent;
var FORM_SUBMIT = exports.FORM_SUBMIT = 'form:submit';
var MODAL_CANCEL = exports.MODAL_CANCEL = 'modal:cancel';
var MODAL_CLOSE = exports.MODAL_CLOSE = 'modal:close';
var MODAL_SHOW = exports.MODAL_SHOW = 'modal:show';
var SELECT_CHANGE = exports.SELECT_CHANGE = 'select:change';
var DROPDOWN_OPEN = exports.DROPDOWN_OPEN = 'dropdown:open';
var DROPDOWN_CLICK = exports.DROPDOWN_CLICK = 'dropdown:click';
var DROPDOWN_CLOSE = exports.DROPDOWN_CLOSE = 'dropdown:close';

var EVENTS = exports.EVENTS = [FORM_SUBMIT, MODAL_CANCEL, MODAL_CLOSE, MODAL_SHOW, SELECT_CHANGE, DROPDOWN_OPEN, DROPDOWN_CLICK, DROPDOWN_CLOSE];

function EmitEvent(eventName, category, action, label) {
  var value = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

  document.dispatchEvent(new CustomEvent(eventName, {
    detail: {
      category: category,
      action: action,
      label: label,
      value: value
    }
  }));
}