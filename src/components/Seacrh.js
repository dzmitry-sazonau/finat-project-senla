import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {setFilter} from '../reducer/filter';
import {seacrhPhones} from '../reducer/phones';
import {setSort} from '../reducer/sort';
import FormSearch from './Forms/FormSearch';
import {FILTERS} from '../constants';


class Seacrh extends React.Component {
  static propTypes = {
    setFilter: PropTypes.func.isRequired,
    seacrhPhones: PropTypes.func.isRequired,
    setSort: PropTypes.func.isRequired
  }

  submit = (values) => {
    const {setFilter, seacrhPhones, setSort} = this.props;
    setFilter(FILTERS.SEARCH);
    seacrhPhones(values.search);
    setSort('');
  }

  render() {
    return (
      <FormSearch onSubmit={this.submit} />
    );
  }
}

export default connect(null, {setFilter, seacrhPhones, setSort})(Seacrh);
