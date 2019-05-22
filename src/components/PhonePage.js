import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {
  getPhoneById, addToBasket,
  deletePhone, changePhone
} from '../reducer/phones';
import {selectAdmin, selectUser} from '../reducer/users';
import FormEdit from './Forms/FormEdit';
import photoPhone from '../img/phone.jpg';

class PhotoPage extends PureComponent {
  static propTypes = {
    phone: PropTypes.object.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    isLogin: PropTypes.bool.isRequired,
    deletePhone: PropTypes.func.isRequired,
    addToBasket: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    changePhone: PropTypes.func.isRequired
  }

  state = {
    isChange: false
  }

  submit = (value) => {
    const {phone: {id}, changePhone} = this.props;
    const obj = {
      ...value,
      id
    };
    changePhone(obj);
    this.setState({isChange: false});
  };

  handleChangeButton = () => {
    this.setState(state => ({
      isChange: !state.isChange
    }));
  }

  handleDeleteButton = () => {
    const {phone: {id}, deletePhone, history} = this.props;
    deletePhone(id);
    history.push('/');
  };

  handleAddButton = () => {
    const {phone: {id}, addToBasket} = this.props;
    addToBasket(id);
  };

  render() {
    const {phone, isAdmin, isLogin} = this.props;
    const {isChange} = this.state;
    const check = !phone.isStore
      ? <button type="button" className="button-icon" onClick={this.handleAddButton}><i className="fas fa-plus" /></button>
      : <button type="button" className="button-icon"><i className="fas fa-check" /></button>;
    if (phone) {
      return (
        <div>
          {isAdmin
            && (
              <div className="panel-phone-page">
                {!isChange && <button type="button" className="button-icon" onClick={this.handleDeleteButton}><i className="fas fa-trash" /></button>}
                <button type="button" className="button-icon" onClick={this.handleChangeButton}><i className="fas fa-edit" /></button>
              </div>
            )
          }
          {isLogin
            && (
              <div className="panel-phone-page">
                {check}
                <button type="button" className="button-icon"><Link to="/basket"><i className="fas fa-shopping-basket fa-lg" /></Link></button>
              </div>
            )
          }
          {!isChange
            ? (
              <div className="phone-container">
                <img
                  src={photoPhone}
                  alt="phone"
                  width="200"
                  height="300"
                />
                <div className="block-info">
                  <div className="label">
                    <p className="info-label">Device Name: </p>
                    <p className="info-label">Announced: </p>
                    <p className="info-label">Colors: </p>
                    <p className="info-label">CPU: </p>
                    <p className="info-label">GPRS: </p>
                    <p className="info-label">NFC: </p>
                    <p className="info-label">OS: </p>
                    <p className="info-label">Price: </p>
                    <p className="info-label">Protection: </p>
                  </div>
                  <div className="info">
                    <p className="info-phone"><span>{phone.DeviceName}</span></p>
                    <p className="info-phone"> {phone.announced}</p>
                    <p className="info-phone">{phone.colors}</p>
                    <p className="info-phone">{phone.cpu}</p>
                    <p className="info-phone">{phone.gprs}</p>
                    <p className="info-phone">{phone.nfc ? phone.nfc : 'No'}</p>
                    <p className="info-phone">{phone.os}</p>
                    <p className="info-phone">{phone.price}</p>
                    <p className="info-phone">{phone.protection}</p>
                  </div>
                </div>
              </div>
            )
            : <FormEdit onSubmit={this.submit} />}
        </div>
      );
    }
    return null;
  }
}


export default connect((state, props) => {
  const {match: {params}} = props;
  return {
    phone: getPhoneById(state, params.id),
    isAdmin: selectAdmin(state),
    isLogin: selectUser(state)
  };
}, {addToBasket, deletePhone, changePhone})(PhotoPage);
