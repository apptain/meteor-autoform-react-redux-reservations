import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';

export default class Reservation extends Component {
  render() {
    return (
      <li>
        <span className="text">
          {this.props.reservation.dateTime}:
          &nbsp;&nbsp;{this.props.reservation.partyName} party of {this.props.reservation.partyNumber}

          &nbsp;&nbsp;
          { this.props.reservation.status == "Pending" ? (
            <select id={this.props.reservation._id} name="status" value={this.props.status} onChange={this.props.statusChange}>
              <option value="Pending">Pending</option>
              <option value="Fulfilled">Fulfilled</option>
              <option value="Canceled">Canceled</option>
            </select>
          ) : '-- ' + this.props.reservation.status}
        </span>
      </li>
    );
  }
}
