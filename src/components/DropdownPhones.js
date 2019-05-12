import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import DropdownList from './DropdownPhonesItem';
import {selectListPhones} from '../reducer/dropdown';

const DropdownPhones = ({dropdown}) => {
  const [listPhones, isOpen] = useState(false);
  const brand = dropdown.find(item => item.selected);
  return (
    <div className="dropdown-phones">
      <div className="wrapper">
        <div className="wrapper-btn">
          <div className="btn-dropdown" role="presentation" onClick={() => isOpen(!listPhones)}>{brand ? brand.title : 'Apple'}</div>
        </div>
        {listPhones
          && (
          <ul className="list">
            {dropdown.map(item => (
              <DropdownList key={item.id} closeDropdown={() => isOpen(!listPhones)} {...item} />
            ))}
          </ul>
          )}
      </div>
    </div>
  );
};

DropdownPhones.propTypes = {
  dropdown: PropTypes.array.isRequired,
};

export default connect(state => ({dropdown: selectListPhones(state)}))(DropdownPhones);
