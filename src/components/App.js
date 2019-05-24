import React, {Component} from 'react';
import PropTypes from 'prop-types';
import fonoapi from 'fonoapi-nodejs';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';
import {connect} from 'react-redux';
import {loadPhones} from '../reducer/phones';
import Navbar from './Navbar';
import PhoneList from './MainPage/PhoneList';
import NotFoundPage from './NotFoundPage';
import ShoppingBasket from './ShoppingBasket';
import Registration from './Registration';
import LogIn from './LogIn';
import PhonePage from './PhonePage';
import AddPhone from './AddPhone';

class App extends Component {
  static propTypes = {
    loadPhones: PropTypes.func.isRequired
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
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={PhoneList} exact />
          <Route path="/phone/:id" component={PhonePage} />
          <Route path="/basket" component={ShoppingBasket} />
          <Route path="/add_phone" component={AddPhone} />
          <Route path="/login" component={LogIn} />
          <Route path="/registration" component={Registration} />
          <NotFoundPage />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(null, {loadPhones})(App);
