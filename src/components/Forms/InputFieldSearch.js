import React from 'react';
import PropTypes from 'prop-types';

const InputFieldSearch = ({input, meta, type}) => (
  <div className="item-form">
    <input {...input} type={type} className="input-form" />
    {(meta.error && meta.touched) && <span style={{color: 'red'}}>{meta.error}</span>}
  </div>
);

InputFieldSearch.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
};

export default InputFieldSearch;
