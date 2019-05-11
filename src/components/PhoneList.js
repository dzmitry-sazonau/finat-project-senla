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

  render() {
    const {phones} = this.props;

    return (
      <div className="list-phones">
        <Dropdown op={this.selectedPhones} />
        {phones.map(item => (
          <PhoneItem key={item.id} {...item} />
        ))}
      </div>
    );
  }
}

export default connect(state => ({phones: selectPhones(state)}))(PhoneList);
