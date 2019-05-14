import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getPhoneById} from '../reducer/phones';

class PhotoPage extends PureComponent {
  static propTypes = {
    phone: PropTypes.object.isRequired,
  }

  render() {
    const {phone} = this.props;

    if (phone) {
      return (
        <div className="photo-container">
          <h1>{phone.DeviceName}</h1>
          <img
            src="../img/phone.jpg"
            alt=""
            width="150"
            height="300"
          />
        </div>
      );
    }
    return null;
  }
}


export default connect((state, props) => {
  const {match: {params}} = props;
  return {
    phone: getPhoneById(state, params.id)
  };
})(PhotoPage);
