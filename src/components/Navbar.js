import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {
  selectAdmin, selectUser, logOut, selectName
} from '../reducer/users';
import Search from './Seacrh';

class Navbar extends PureComponent {
  static propTypes = {
    isAdmin: PropTypes.bool.isRequired,
    isLogin: PropTypes.bool.isRequired,
    logOut: PropTypes.func.isRequired,
    nameUser: PropTypes.string.isRequired
  }

  logOutButton = () => {
    const {logOut} = this.props;
    logOut();
  }

  render() {
    const {isAdmin, isLogin, nameUser} = this.props;
    return (
      <div className="navbar">
        <div className="navbar-item">
          <Link to="/"><i className="fas fa-home fa-2x" /></Link>
          <Search />
          <div className="login">
            <p>{isAdmin || isLogin ? nameUser : null}</p>
            {!isAdmin && !isLogin
              ? <Link to="/login" className="button link-login">Sign In/Sign Up</Link>
              : <button type="button" className="button btn-log-out" onClick={this.logOutButton}>Log Out </button>}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAdmin: selectAdmin(state),
  isLogin: selectUser(state),
  nameUser: selectName(state)
});
export default connect(mapStateToProps, {logOut})(Navbar);
