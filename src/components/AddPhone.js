import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FormAdd from './Forms/FormAdd';
import {addPhone} from '../reducer/phones';

const AddPhone = ({addPhone}) => {
  const submit = (value) => {
    const obj = {...value};
    addPhone(obj);
  };
  return (
    <div>
      <FormAdd onSubmit={submit} />
    </div>
  );
};

AddPhone.propTypes = {
  addPhone: PropTypes.func.isRequired
};

export default connect(null, {addPhone})(AddPhone);
