import React from 'react';
import PropTypes from 'prop-types';
import {
  Field, reduxForm
} from 'redux-form';
import {connect} from 'react-redux';
import {compose} from 'redux';
import InputField from './InputField';
import SelectField from './SelectField';
import {
  required, minLength, maxLength, minFourLength, minThreeLength
} from './validation';

const FormEdit = ({
  handleSubmit, pristine, submitting, reset, invalid
}) => (
  <div className="form">
    <form onSubmit={handleSubmit}>
      <Field
        name="DeviceName"
        label="DeviceName"
        type="text"
        component={InputField}
        validate={[required, minLength]}
      />
      <Field
        name="Brand"
        label="Brand"
        component={SelectField}
        validate={[required, minFourLength]}
      />
      <Field
        name="colors"
        label="Colors"
        type="text"
        component={InputField}
        validate={[required, minThreeLength]}
      />
      <Field
        name="price"
        label="Price"
        type="text"
        component={InputField}
        validate={[required, minLength]}
      />
      <Field
        name="cpu"
        label="CPU"
        type="text"
        component={InputField}
        validate={[required, minFourLength, maxLength]}
      />
      <Field
        name="os"
        label="OS"
        type="text"
        component={InputField}
        validate={[required, minFourLength, maxLength]}
      />
      <Field
        name="protection"
        label="Protection"
        type="text"
        component={InputField}
        validate={[required, minFourLength, maxLength]}
      />
      <Field
        name="nfc"
        label="NFC"
        type="checkbox"
        component={InputField}
        validate={[required]}
      />
      <Field
        name="gprs"
        label="GPRS"
        type="checkbox"
        component={InputField}
        validate={[required]}
      />
      <div className="buttons">
        <button type="submit" className="button" disabled={invalid}>Change</button>
        <button type="button" className="button" onClick={reset} disabled={pristine || submitting}>Clear</button>
      </div>
    </form>
  </div>
);

FormEdit.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
};

export default compose(
  connect(),
  reduxForm({
    form: 'FormEdit',
  })
)(FormEdit);
