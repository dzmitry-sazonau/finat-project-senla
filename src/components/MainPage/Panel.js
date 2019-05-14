import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectAdmin, selectUser} from '../../reducer/users';
import {addToBasket, deletePhone} from '../../reducer/phones';
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
      <div>
        {isLogin && <Link to="/basket"><i className="fas fa-shopping-basket" /></Link>}
        {isAdmin && <Link to="/add"><i className="fas fa-plus-square" /></Link>}
        <DropdownPhones />
        <DropdownSort />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAdmin: selectAdmin(state),
  isLogin: selectUser(state)
});
export default connect(mapStateToProps, {addToBasket, deletePhone})(Panel);
