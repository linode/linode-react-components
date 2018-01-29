import PropTypes from 'prop-types';
import React from 'react';
import isNumber from 'lodash/isNumber';
import isEmpty from 'lodash/isEmpty';

import Input from './Input';

const str = ['an extremely weak', 'a very weak', 'a weak', 'a strong', 'a very strong'];

const PasswordStrength = ({ strength }) => {
  return [
    <div className={`PasswordInput-strength PasswordInput-strength--${strength}`}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>,
    <small className="PasswordInput-strength-text">This is {str[strength]} password.</small>,
  ];
};

export default function PasswordInput({
  name,
  className,
  disabled,
  onChange,
  id,
  strength,
  value,
}) {
  const showStrength = !isEmpty(value) && isNumber(strength);
  
  return (
    <div className={`PasswordInput ${className}`}>
      <Input
        value={value}
        name={name}
        className="PasswordInput-input"
        onChange={onChange}
        autoComplete="off"
        type="password"
        disabled={disabled}
        id={id}
      />
      {showStrength && <PasswordStrength strength={strength} />}
    </div>
  );
}

PasswordInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  errors: PropTypes.object,
  errorField: PropTypes.string,
  passwordType: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
  strength: PropTypes.number,
};

PasswordInput.defaultProps = {
  passwordType: 'offline_fast_hashing_1e10_per_second',
  disabled: false,
  className: '',
};
