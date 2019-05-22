import React from 'react';
import PropTypes from 'prop-types';
import {
  Field, reduxForm
} from 'redux-form';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import {cancelSeacrh} from '../../reducer/phones';
import {setFilter} from '../../reducer/filter';
import InputFieldSearch from './InputFieldSearch';
import {FILTERS} from '../../constants';
import {required} from './validation';

const FormSearch = ({
  handleSubmit, pristine, submitting,
  reset, invalid, setFilter, cancelSeacrh, history
}) => {
  const handleResetButton = () => {
    reset();
    setFilter(FILTERS.ALL);
    cancelSeacrh();
  };
  return (
    <div className="form-search-wrapper">
      <form onSubmit={handleSubmit} className="form-search">
        <Field
          name="search"
          label="Search"
          className="input-search"
          type="text"
          component={InputFieldSearch}
          validate={[required]}
        />
        <div className="buttons">
          <button type="submit" className="button op" onClick={() => history.push('/')} disabled={invalid}>Find</button>
          <button type="button" className="button" onClick={handleResetButton} disabled={pristine || submitting}>Reset</button>
        </div>
      </form>
    </div>
  );
};

FormSearch.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  cancelSeacrh: PropTypes.func.isRequired
};

export default withRouter(compose(
  connect(null, {setFilter, cancelSeacrh}),
  reduxForm({
    form: 'FormSearch',
  })
)(FormSearch));
