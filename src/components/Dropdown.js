import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import DropdownList from './DropdownItem';
import {selectListPhones} from '../reducer/dropdown';

const Dropdown = ({dropdown}) => {
  const [listPhones, isOpen] = useState(false);
  return (
    <div>
      <div>
        <button type="button" onClick={() => isOpen(!listPhones)}>Iop</button>
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
  );
};

Dropdown.propTypes = {
  dropdown: PropTypes.array.isRequired,
};

export default connect(state => ({dropdown: selectListPhones(state)}))(Dropdown);
