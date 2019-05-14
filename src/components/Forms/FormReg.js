import React from 'react';
import PropTypes from 'prop-types';
import {
  Field, reduxForm
} from 'redux-form';
import {connect} from 'react-redux';
import {compose} from 'redux';
import InputField from './InputField';
import {
  required, minLength, matchesPassword, validateEmail, normalEmail
} from './validation';

const FormReg = ({
  handleSubmit, pristine, submitting, reset, invalid
}) => (
  <div className="form">
    <form onSubmit={handleSubmit}>
      <Field
        name="name"
        label="Name"
        type="text"
        component={InputField}
        validate={[required, minLength]}
      />
      <Field
        name="surname"
        label="Surname"
        type="text"
        component={InputField}
        validate={[required, minLength]}
      />
      <Field
        name="password"
        label="Password"
        type="text"
        component={InputField}
        validate={[required, minLength]}
      />
      <Field
        name="confirmPassword"
        label="Confirm Password"
        type="text"
        component={InputField}
        validate={[required, matchesPassword]}
      />
      <Field
        name="email"
        label="Email"
        type="email"
        component={InputField}
        validate={[required, normalEmail, validateEmail]}
      />
      <div className="buttons">
        <button type="submit" disabled={invalid}>Registrate</button>
        <button type="button" onClick={reset} disabled={pristine || submitting}>reset</button>
      </div>
    </form>
  </div>
);

FormReg.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
};

export default compose(
  connect(),
  reduxForm({
    form: 'FormReg',
  })
)(FormReg);
