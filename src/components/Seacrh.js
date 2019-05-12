import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setFilter} from '../reducer/filter';
import {seacrhPhones} from '../reducer/phones';
import FormSearch from './Forms/FormSearch';
import {FILTERS} from '../constants';


class Seacrh extends React.Component {
  static propTypes = {
    setFilter: PropTypes.func.isRequired,
    seacrhPhones: PropTypes.func.isRequired
  }

  submit = (values) => {
    const {setFilter, seacrhPhones} = this.props;
    setFilter(FILTERS.SEARCH);
    seacrhPhones(values.search);
  }

  render() {
    return (
      <FormSearch onSubmit={this.submit} />
    );
  }
}

export default connect(null, {setFilter, seacrhPhones})(Seacrh);
