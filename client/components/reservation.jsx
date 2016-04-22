import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';

var Reservation = React.createClass({
  statusChange: function(e){
    return this.props.statusChange(e.target.value, e.target.id);
  },
  render: function(){
    return (
      <li>
        <span className="text">
          {this.props.reservation.dateTime}:
          &nbsp;&nbsp;{this.props.reservation.name} party of {this.props.reservation.partyNumber}

          &nbsp;&nbsp;
          { this.props.reservation.status == "Pending" ? (
            <select id={this.props.reservation._id} name="status" value={this.props.status} onChange={this.statusChange}>
              <option value="Pending">Pending</option>
              <option value="Fulfilled">Fulfilled</option>
              <option value="Canceled">Canceled</option>
            </select>
          ) : '-- ' + this.props.reservation.status}
        </span>
      </li>
    );
  }
})

export default Reservation;
