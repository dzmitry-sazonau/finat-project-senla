import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {selectPhones} from '../../reducer/phones';
import PhoneItem from './PhoneItem';
import {FILTERS, SORT} from '../../constants';
import Panel from './Panel';

class PhoneList extends Component {
  static propTypes = {
    phones: PropTypes.array.isRequired,
  }

  state = {
    currentPage: 1,
    phonesPerPage: 15
  }

  handleClick = (event) => {
    this.setState({currentPage: Number(event.target.id)});
  }

  render() {
    const {phones} = this.props;
    const {currentPage, phonesPerPage} = this.state;
    const indexOfLastPhone = currentPage * phonesPerPage;
    const indexOfFirstPhone = indexOfLastPhone - phonesPerPage;
    const currentPhones = phones.slice(indexOfFirstPhone, indexOfLastPhone);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(phones.length / phonesPerPage); i += 1) {
      pageNumbers.push(i);
    }
    return (
      <div className="main">
        <Panel />
        <div className="list-phones">
          {currentPhones.map(item => (
            <PhoneItem key={item.id} {...item} />
          ))}
        </div>
        <ul className="pagination-list">
          {pageNumbers.map(number => (
            <li
              className={(number === currentPage) ? 'pagination-item active' : 'pagination-item'}
              role="presentation"
              key={number}
              id={number}
              onClick={this.handleClick}
            >
              {number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {filter, sort: {value}} = state;

  const allPhones = [...selectPhones(state)];
  const getPrice = (value) => {
    const price = /[0-9]/gi;
    return +value.match(price).join('');
  };
  let op = [];
  if (!value) op = allPhones;
  if (value === SORT.INCREASE) op = allPhones.sort((a, b) => getPrice(b.price) - getPrice(a.price));
  if (value === SORT.DECREASE) op = allPhones.sort((a, b) => getPrice(a.price) - getPrice(b.price));
  return {
    phones: filter === FILTERS.ALL ? op : op.filter(item => item.isSearch)
  };
};
export default connect(mapStateToProps)(PhoneList);
