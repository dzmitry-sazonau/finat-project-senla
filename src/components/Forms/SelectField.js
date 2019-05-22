import React from 'react';
import PropTypes from 'prop-types';

const SelectField = ({label, input}) => (
  <div className="item-form">
    <label htmlFor={label}>
      {label}
      <select className="input-form" {...input}>
        <option />
        <option value="apple">Apple</option>
        <option value="samsung">Samsung</option>
        <option value="xiaomi">Xiaomi</option>
        <option value="meizu">Meizu</option>
        <option value="huawei">Huawei</option>
      </select>
    </label>
  </div>
);

SelectField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired
};


export default SelectField;
