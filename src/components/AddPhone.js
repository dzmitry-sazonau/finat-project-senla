import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import FormAdd from './Forms/FormAdd';
import {addPhone} from '../reducer/phones';
import {selectAdmin} from '../reducer/users';

const AddPhone = ({addPhone, isAdmin}) => {
  const submit = useCallback((value, dispatch, {reset}) => {
    const obj = {...value};
    addPhone(obj);
    reset();
  }, [addPhone]);

  return (
    <>
      {isAdmin
        ? (
          <div>
            <p className="form-title">Add Phone</p>
            <FormAdd onSubmit={submit} />
          </div>
        )
        : <Redirect to="/" />
      }
    </>
  );
};

AddPhone.propTypes = {
  addPhone: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired
};

export default connect(state => ({isAdmin: selectAdmin(state)}), {addPhone})(AddPhone);
