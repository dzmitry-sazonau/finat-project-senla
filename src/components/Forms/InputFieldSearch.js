import React from 'react';

const InputFieldSearch = ({input, meta, type}) => (
  <div className="item-form">
    <input {...input} type={type} className="input-form" />
    {(meta.error && meta.touched) && <span style={{color: 'red'}}>{meta.error}</span>}
  </div>
);

export default InputFieldSearch;
