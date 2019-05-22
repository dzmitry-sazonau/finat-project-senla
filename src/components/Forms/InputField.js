import React from 'react';
import PropTypes from 'prop-types';

const InputField = (props) => {
  const {
    input, meta, label, type
  } = props;
  return (
    <div className={type === 'checkbox' ? 'item-form checkbox' : 'item-form'}>
      <label htmlFor={label}>
        {label}
        <input {...input} type={type} className="input-form" />
      </label>
      {(meta.error && meta.touched) && <span style={{color: 'red'}}>{meta.error}</span>}
    </div>
  );
};

InputField.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default InputField;
