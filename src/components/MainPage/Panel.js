import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectAdmin, selectUser} from '../../reducer/users';
import DropdownPhones from './DropdownPhones';
import DropdownSort from './DropdownSort';

class Panel extends PureComponent {
  static propTypes = {
    isAdmin: PropTypes.bool.isRequired,
    isLogin: PropTypes.bool.isRequired,
  }

  render() {
    const {isAdmin, isLogin} = this.props;
    return (
      <div className="panel">

        <div className="panel-item">
          <div className="dropdown">
            <DropdownPhones />
            <DropdownSort />
          </div>

          {isLogin && (
          <Link to="/basket">
            <div className="button-panel"><i className="fas fa-shopping-basket fa-lg" /></div>
          </Link>
          )}
          {isAdmin && (
          <Link to="/add_phone">
            <div className="button-panel"><i className="fas fa-plus-square fa-lg" /></div>
          </Link>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAdmin: selectAdmin(state),
  isLogin: selectUser(state)
});
export default connect(mapStateToProps)(Panel);
