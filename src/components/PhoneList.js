import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {selectPhones} from '../reducer/phones';
import PhoneItem from './PhoneItem';
import {FILTERS} from '../constants';

class PhoneList extends Component {
  static propTypes = {
    phones: PropTypes.array.isRequired,
  }

  state = {
    currentPage: 1,
    todosPerPage: 15
  }

  handleClick = (event) => {
    this.setState({currentPage: Number(event.target.id)});
  }

  render() {
    const {phones} = this.props;
    const {currentPage, todosPerPage} = this.state;
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = phones.slice(indexOfFirstTodo, indexOfLastTodo);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(phones.length / todosPerPage); i += 1) {
      pageNumbers.push(i);
    }
    return (
      <div className="main">
        <div className="list-phones">
          {currentTodos.map(item => (
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
  const {filter} = state;
  const allPhones = selectPhones(state);
  return {
    phones: filter === FILTERS.ALL ? allPhones : allPhones.filter(item => item.isSearch)
  };
};
export default connect(mapStateToProps)(PhoneList);


// export default connect(state => ({phones: selectPhones(state)}))(PhoneList);
