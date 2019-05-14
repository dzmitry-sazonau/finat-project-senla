import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectAdmin, selectUser, logOut} from '../reducer/users';
import Search from './Seacrh';

class Navbar extends PureComponent {
  static propTypes = {
    isAdmin: PropTypes.bool.isRequired,
    isLogin: PropTypes.bool.isRequired,
    logOut: PropTypes.func.isRequired
  }

  logOutButton = () => {
    const {logOut} = this.props;
    logOut();
  }

  render() {
    const {isAdmin, isLogin} = this.props;
    return (
      <div>
        <Link to="/"><i className="fas fa-home" /></Link>
        {!isAdmin && !isLogin
          ? <Link to="/login">Sign In/Sign Up</Link>
          : <button type="button" onClick={this.logOutButton}>Log Out </button>}
        <Search />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAdmin: selectAdmin(state),
  isLogin: selectUser(state)
});
export default connect(mapStateToProps, {logOut})(Navbar);
