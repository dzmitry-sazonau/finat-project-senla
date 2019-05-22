import React from 'react';
import PropTypes from 'prop-types';

const InputFieldSearch = ({input, type}) => (
  <>
    <input {...input} type={type} className="input-form" />
  </>
);

InputFieldSearch.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
};

export default InputFieldSearch;
