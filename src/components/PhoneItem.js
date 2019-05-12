import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import photoPhone from '../img/phone.jpg';


class PhoneItem extends PureComponent {
  static propTypes = {
    DeviceName: PropTypes.string.isRequired
  }

  render() {
    const {DeviceName} = this.props;

    return (
      <div className="item-phones">
        <img className="img-phone" src={photoPhone} alt="phone" />
        <span className="device-name">{DeviceName}</span>
      </div>
    );
  }
}

export default PhoneItem;
