import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {selectedInBasket, deleteInBasket} from '../reducer/phones';

class PhoneItem extends PureComponent {
  static propTypes = {
    DeviceName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    selectedInBasket: PropTypes.func.isRequired,
    deleteInBasket: PropTypes.func.isRequired,
  }

  toggleChecked = () => {
    const {id, selectedInBasket} = this.props;
    selectedInBasket(id);
  };

  handleDeleteButton = () => {
    const {id, deleteInBasket} = this.props;
    deleteInBasket(id);
  };

  render() {
    const {
      DeviceName, price
    } = this.props;
    const getPrice = (value) => {
      const price = /[0-9]/gi;
      return +value.match(price).join('');
    };
    const newPrice = getPrice(price);
    return (
      <div>
        <input type="checkbox" onClick={this.toggleChecked} />
        <li className="list-item">{DeviceName}   {newPrice}</li>
        <button type="button" onClick={this.handleDeleteButton}><i className="fas fa-trash" /></button>
      </div>
    );
  }
}


export default connect(null, {selectedInBasket, deleteInBasket})(PhoneItem);
