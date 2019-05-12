import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import fonoapi from 'fonoapi-nodejs';
import {connect} from 'react-redux';
import {selectPhones} from '../reducer/dropdown';
import {loadPhones} from '../reducer/phones';

class DropdownItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    selectPhones: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    closeDropdown: PropTypes.func.isRequired,
    loadPhones: PropTypes.func.isRequired,
  }

  handleSelectButton = () => {
    const {
      selectPhones, id, closeDropdown, title
    } = this.props;
    selectPhones(id);
    closeDropdown();
    const {loadPhones} = this.props;
    function myCallback(queryString, data) {
      loadPhones(data);
    }
    fonoapi.token = '04de6243c57ebb6c0c523e3abefc5b744fab1367832809cd';
    fonoapi.getLatest(myCallback, 100, title);
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

export default connect(null, {selectPhones, loadPhones})(DropdownItem);
