import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import DropdownSortList from './DropdownSortList';
import {selectListSort} from '../../reducer/sort';

const DropdownSort = ({dropdown}) => {
  const [listPhones, isOpen] = useState(false);
  const sort = dropdown.find(item => item.selected);
  return (
    <div className="wrapper">
      <div className="wrapper-btn">
        <div className="btn-dropdown" role="presentation" onClick={() => isOpen(!listPhones)}>{sort ? sort.title : 'Selected'}</div>
      </div>
      {listPhones
        && (
        <ul className="list">
          {dropdown.map(item => (
            <DropdownSortList key={item.id} closeDropdown={() => isOpen(!listPhones)} {...item} />
          ))}
        </ul>
        )}
    </div>
  );
};

DropdownSort.propTypes = {
  dropdown: PropTypes.array.isRequired,
};

export default connect(state => ({dropdown: selectListSort(state)}))(DropdownSort);
