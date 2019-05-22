import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectAdmin, selectUser} from '../../reducer/users';
import {addToBasket, deletePhone} from '../../reducer/phones';
import photoPhone from '../../img/phone.jpg';


class PhoneItem extends PureComponent {
  static propTypes = {
    DeviceName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    isLogin: PropTypes.bool.isRequired,
    addToBasket: PropTypes.func.isRequired,
    deletePhone: PropTypes.func.isRequired,
    price: PropTypes.string.isRequired,
    announced: PropTypes.string.isRequired,
    isStore: PropTypes.bool.isRequired
  }

  state = {
    isMouseOver: false
  }

  handleMouseOver = () => this.setState({isMouseOver: true});

  handleMouseLeave = () => this.setState({isMouseOver: false});

  handleAddButton = () => {
    const {id, addToBasket} = this.props;
    addToBasket(id);
  };

  handleDeleteButton = () => {
    const {id, deletePhone} = this.props;
    deletePhone(id);
  };

  render() {
    const {
      DeviceName, id, isAdmin, isLogin, price, announced, isStore
    } = this.props;
    const check = !isStore
      ? <button type="button" className="button-icon" onClick={this.handleAddButton}><i className="fas fa-plus" /></button>
      : <button type="button" className="button-icon"><i className="fas fa-check" /></button>;
    const {isMouseOver} = this.state;
    return (
      <div onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave}>
        <div className="button-phone">
          {isMouseOver && isLogin && check}
          {isMouseOver && isAdmin && <button type="button" className="button-icon" onClick={this.handleDeleteButton}><i className="fas fa-trash" /></button>}
        </div>
        <Link to={`/phone/${id}`}>
          <div className="item-phones">
            <img className="img-phone" src={photoPhone} alt="phone" />
            <span className="device-name">{DeviceName}</span>
            <span>{price}</span>
            <span className="announced">{announced}</span>
          </div>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAdmin: selectAdmin(state),
  isLogin: selectUser(state)
});
export default connect(mapStateToProps, {addToBasket, deletePhone})(PhoneItem);
