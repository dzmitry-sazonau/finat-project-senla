import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectPhones} from '../reducer/phones';
import {selectUser} from '../reducer/users';
import ShoppingBasketItem from './ShoppingBasketItem';

const PhoneList = ({phones, sum, isLogin}) => (
  isLogin ? (
    <div className="basket">
      <div className="basket-list-phones">
        {phones.map(item => (
          <ShoppingBasketItem key={item.id} {...item} />
        ))}
        <p>Total: {sum}</p>
      </div>
    </div>
  ) : <Redirect to="/" />
);


PhoneList.propTypes = {
  phones: PropTypes.array.isRequired,
  sum: PropTypes.number.isRequired,
  isLogin: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  const allPhones = [...selectPhones(state)];
  const getPrice = (value) => {
    const price = /[0-9]/gi;
    return +value.match(price).join('');
  };
  const allPhonesBasket = allPhones.filter(item => item.isStore);
  const allSelected = allPhonesBasket.filter(item => item.isSelected);
  let allSum = 0;
  if (!(allSelected.length === 0)) {
    for (let i = 0; i < allSelected.length; i += 1) {
      allSum += getPrice(allSelected[i].price);
    }
  }
  return {
    phones: allPhonesBasket,
    sum: allSum,
    isLogin: selectUser(state)
  };
};
export default connect(mapStateToProps)(PhoneList);
