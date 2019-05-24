import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FormLog from './Forms/FormLog';
import {
  setUser, selectUsers, logPerson, setAdmin
} from '../reducer/users';


const LogIn = ({
  setUser, users, logPerson, setAdmin, history
}) => {
  const submit = useCallback((value) => {
    const newUser = users.filter(item => item.email === value.email);
    if (newUser[0].name === 'Admin') setAdmin();
    if (newUser[0].name !== 'Admin') setUser();
    logPerson(newUser[0].name);
    history.push('/');
  }, [setUser, users, logPerson, setAdmin, history]);

  return (
    <div>
      <p className="form-title">Log in</p>
      <FormLog
        onSubmit={submit}
      />
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
