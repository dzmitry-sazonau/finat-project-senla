import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import guid from '../utils';
import {setSort} from '../reducer/sort';
import {DROPDOWN_SORT} from '../constants';


class DropdownSortList extends PureComponent {
  static propTypes = {
    closeDropdown: PropTypes.func.isRequired,
    activeSort: PropTypes.string.isRequired,
    setSort: PropTypes.func.isRequired
  }

  handleSelectButton = (value) => {
    const {closeDropdown, setSort} = this.props;
    setSort(value);
    closeDropdown();
  }

  render() {
    const {activeSort} = this.props;
    return (
      <div className="list-sort">
        {Object.keys(DROPDOWN_SORT).map((filterKey) => {
          const currentFilter = DROPDOWN_SORT[filterKey];
          return (
            <span
              role="presentation"
              key={guid()}
              className={currentFilter === activeSort ? 'sort sort-active' : 'sort'}
              onClick={this.handleSelectButton(currentFilter)}
            >
              {currentFilter}
            </span>
          );
        })}
      </div>
    );
  }
}

export default connect(state => ({activeSort: state.sort}), {setSort})(DropdownSortList);
