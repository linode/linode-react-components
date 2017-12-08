'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onChange = onChange;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function onChange(event) {
  var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value,
      type = _event$target.type,
      checked = _event$target.checked;


  var realValue = value;
  if (type === 'checkbox') {
    realValue = checked;
  }

  this.setState(_defineProperty({}, name, realValue));
}