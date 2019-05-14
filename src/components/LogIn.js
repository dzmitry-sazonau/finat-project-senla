import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import FormLog from './Forms/FormLog';
import {
  setUser, selectUsers, logPerson, setAdmin
} from '../reducer/users';


const LogIn = ({
  setUser, users, logPerson, setAdmin, history
}) => {
  const submit = (value) => {
    const newUser = users.filter(item => item.email === value.email);
    if (newUser[0].name === 'Admin') setAdmin();
    if (newUser[0].name !== 'Admin') setUser();
    logPerson(newUser);
    history.push('/');
  };
  return (
    <div>
      <FormLog
        onSubmit={submit}
      />
      <Link to="/registration">Registration</Link>
    </div>
  );
};

LogIn.propTypes = {
  logPerson: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  setUser: PropTypes.func.isRequired,
  setAdmin: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default connect(state => ({users: selectUsers(state)}),
  {setUser, setAdmin, logPerson})(LogIn);
