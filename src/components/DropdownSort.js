import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import DropdownSortList from './DropdownSortList';


const DropdownSort = () => {
  const [listPhones, isOpen] = useState(false);
  return (
    <div className="dropdown-phones">
      <div className="wrapper">
        <div className="wrapper-btn">
          <div className="btn-dropdown" role="presentation" onClick={() => isOpen(!listPhones)}>Select</div>
        </div>
        {listPhones && <DropdownSortList closeDropdown={() => isOpen(!listPhones)} /> }
      </div>
    </div>
  );
};

// DropdownSort.propTypes = {
//   dropdown: PropTypes.array.isRequired,
// };

export default connect()(DropdownSort);
