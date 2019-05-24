import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FormReg from './Forms/FormReg';
import {
  setUser, logPerson, addUser
} from '../reducer/users';


const Registration = ({
  setUser, logPerson, history, addUser
}) => {
  const submit = useCallback((value) => {
    const obj = {...value};
    delete obj.confirmPassword;
    addUser(obj);
    logPerson(obj.name);
    setUser();
    history.push('/');
  }, [setUser, logPerson, history, addUser]);

  return (
    <div>
      <p className="form-title">Registration</p>
      <FormReg
        onSubmit={submit}
      />
    </div>
  );
};

Registration.propTypes = {
  logPerson: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default connect(null, {setUser, addUser, logPerson})(Registration);
