import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setSort} from '../../reducer/sort';

class DropdownSortList extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    setSort: PropTypes.func.isRequired,
    closeDropdown: PropTypes.func.isRequired,
  }

  handleSelectButton = () => {
    const {
      setSort, title, closeDropdown
    } = this.props;
    setSort(title);
    closeDropdown();
  }

  render() {
    const {title, selected} = this.props;

    return (
      <>
        <li role="presentation" className="list-item" onClick={this.handleSelectButton}>{title}</li>
        {selected && <span>asdasda</span>}
      </>
    );
  }
}

export default connect(null, {setSort})(DropdownSortList);
