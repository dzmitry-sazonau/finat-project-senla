import React from 'react';
import PropTypes from 'prop-types';
import {
  Field, reduxForm
} from 'redux-form';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Link} from 'react-router-dom';
import InputField from './InputField';
import {
  required, includeEmail, includePassword
} from './validation';

const FormLog = ({
  handleSubmit, invalid
}) => (
  <div className="form">
    <p>Log in</p>
    <form onSubmit={handleSubmit}>
      <Field
        name="email"
        label="Email"
        type="email"
        component={InputField}
        validate={[required, includeEmail]}
      />
      <Field
        name="password"
        label="Password"
        type="text"
        component={InputField}
        validate={[required, includePassword]}
      />
      <div className="buttons">
        <button type="submit" className="button" disabled={invalid}>Sign</button>
        <button type="button" className="button"><Link to="/registration">Registration</Link></button>
      </div>
    </form>
  </div>
);

FormLog.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
};

export default compose(
  connect(),
  reduxForm({
    form: 'FormLog',
  })
)(FormLog);
