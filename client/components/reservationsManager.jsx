import React, {Component, PropTypes} from 'react';
import ReservationForm from './reservationForm.jsx';
import Reservation from './reservation.jsx';

export default class ReservationsManager extends Component {
  renderReservations() {
    return this.props.reservations.map((reservation) => {
      return (
        <Reservation
          key={reservation._id}
          reservation={reservation}
          statusChange={ this.props.statusChange }
        />
      );
    });
  }
  render() {
    return (
      <div className="container">
        <header>
          <h1>Reservations</h1>
          <ReservationForm {...this.props} />
        </header>
        <ul>
          {this.renderReservations()}
        </ul>
      </div>
    );
  }
}
