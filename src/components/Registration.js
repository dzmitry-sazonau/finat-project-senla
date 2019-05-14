import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FormReg from './Forms/FormReg';
import {
  setUser, selectUsers, logPerson, addUser
} from '../reducer/users';


const Registration = ({
  setUser, users, logPerson, history, addUser
}) => {
  const submit = (value) => {
    const obj = {...value};
    delete obj.confirmPassword;
    const newUser = users.filter(item => item.email === obj.email);
    addUser(obj);
    logPerson(newUser);
    setUser();
    history.push('/');
  };
  return (
    <div>
      <FormReg
        onSubmit={submit}
      />
    </div>
  );
};

Registration.propTypes = {
  logPerson: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  setUser: PropTypes.func.isRequired,
  addUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default connect(state => ({users: selectUsers(state)}),
  {setUser, addUser, logPerson})(Registration);
