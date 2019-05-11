import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {selectPhones} from '../reducer/phones';
import Dropdown from './Dropdown';
import PhoneItem from './PhoneItem';

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

    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = phones.slice(indexOfFirstTodo, indexOfLastTodo);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(phones.length / todosPerPage); i += 1) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => (
      <li
        role="presentation"
        key={number}
        id={number}
        onClick={this.handleClick}
      >
        {number}
      </li>
    ));

    return (
      <div className="list-phones">
        <Dropdown />
        {currentTodos.map(item => (
          <PhoneItem key={item.id} {...item} />
        ))}
        {renderPageNumbers}
      </div>
    );
  }
}

export default connect(state => ({phones: selectPhones(state)}))(PhoneList);
