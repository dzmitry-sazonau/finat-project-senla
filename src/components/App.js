import React, {Component} from 'react';
import PropTypes from 'prop-types';
import fonoapi from 'fonoapi-nodejs';
import {connect} from 'react-redux';
import {loadPhones} from '../reducer/phones';
import Navbar from './Navbar';
import DropdownPhones from './DropdownPhones';
import DropdownSort from './DropdownSort';
import PhoneList from './PhoneList';

class App extends Component {
  static propTypes = {
    loadPhones: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const {loadPhones} = this.props;
    function myCallback(queryString, data) {
      loadPhones(data);
    }
    fonoapi.token = '04de6243c57ebb6c0c523e3abefc5b744fab1367832809cd';
    fonoapi.getLatest(myCallback, 100, 'Apple');
  }

  render() {
    return (
      <>
        <Navbar />
        <DropdownPhones />
        <DropdownSort />
        <PhoneList />
      </>
    );
  }
}

export default connect(null, {loadPhones})(App);
